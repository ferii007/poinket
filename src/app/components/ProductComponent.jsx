
import { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { AnimatePresence, motion } from 'framer-motion';
import useTranslationHook from './../tweaks/locales/index';

import {
    ProductComponentContainer,
    CategoriesContainer,
    CategoriesBox,
    CategoriesMenu,
    ProductContainer,
    ProductBox,
    ProductList,
    AllCategoriesContainer,
} from '../styled_components/ProductComponentStyled';

import {
    modalVariants
} from './../tweaks/framerMotionVariants';

import {
    currencyFormatter
} from './../tweaks/currency';

import WidgetsOutlinedIcon from '@mui/icons-material/WidgetsOutlined';
import AllInclusiveOutlinedIcon from '@mui/icons-material/AllInclusiveOutlined';

const ProductComponent = () => {
    const { translations } = useTranslationHook();

    const dataLogin = useSelector((state) => state.dataLogin);
    const dataCategories = useSelector((state) => state.dataCategories);
    const dataProducts = useSelector((state) => state.dataProducts);

    const [originalProducts, setOriginalProducts] = useState([]);
    const [showProducts, setShowProducts] = useState([]);
    const [categoriesProduct, setCategoriesProduct] = useState([]);
    const [activeCategory, setActiveCategory] = useState({categoryName: 'all', categoryID: null});
    const [loadedImages, setLoadedImages] = useState(null);
    const [isShowAllCategories, setIsShowAllCategories] = useState(false);

    const toggleShowAllCategories = () => {
        setIsShowAllCategories(prevState => !prevState);
    };

    const handleImageLoad = (index) => {
        setLoadedImages(prev => {
            const newLoadedImages = [...prev];
            newLoadedImages[index] = true;
            return newLoadedImages;
        });
    };

    const handleChangeCategory = (categoryName, categoryID = null) => {
        setActiveCategory({
            categoryName: categoryName,
            categoryID: categoryID
        })
        setIsShowAllCategories(false)
    }

    const handleShowProducts =  useCallback((categoryName, categoryID) => {
        let filteredProducts = originalProducts;
        
        if (categoryName !== 'all') {
            filteredProducts = originalProducts.filter(product => product.category_name === categoryName && product.category_id === categoryID);
        }

        setLoadedImages(filteredProducts)

        setShowProducts(filteredProducts);
    }, [originalProducts]);

    useEffect(() => {
        if (Array.isArray(dataCategories) && dataCategories.length !== 0) {
            setCategoriesProduct(dataCategories);
        }
    }, [dataCategories])

    useEffect(() => {
        if (Array.isArray(dataProducts) && dataProducts.length !== 0) {
            setOriginalProducts(dataProducts);
        }
    }, [dataProducts])

    useEffect(() => {
        if (originalProducts) {
            handleShowProducts(activeCategory.categoryName, activeCategory.categoryID);
        }
    }, [originalProducts, activeCategory, handleShowProducts])

    return(
        <>
            <ProductComponentContainer>
                <CategoriesContainer>
                    <CategoriesBox>
                        <CategoriesMenu>
                            <li
                                className={`list-category ${activeCategory.categoryName === 'all' ? 'active-category' : ''}`}
                                onClick={() => handleChangeCategory('all')}
                            >
                                {translations.all}
                            </li>

                            {categoriesProduct?.length > 6 ? (
                                <>
                                    {
                                        categoriesProduct.slice(0, 6).map((category, index) => (
                                            <li 
                                                className={`list-category ${(activeCategory.categoryName === category.name && activeCategory.categoryID === category.id) ? 'active-category' : ''}`}
                                                key={`list-category-${index}`}
                                                onClick={() => handleChangeCategory(category.name, category.id)}
                                            >
                                                {category.name}
                                            </li>
                                        ))
                                    }

                                    <li 
                                        className='list-category'
                                        onClick={() => toggleShowAllCategories()}
                                    >
                                        <WidgetsOutlinedIcon />
                                    </li>
                                </>
                            ) : (
                                <>  
                                    {
                                        categoriesProduct.map((category, index) => (
                                            <li 
                                                className={`list-category ${(activeCategory.categoryName === category.name && activeCategory.categoryID === category.id) ? 'active-category' : ''}`}
                                                key={`list-category-${index}`}
                                                onClick={() => handleChangeCategory(category.name, category.id)}
                                            >
                                                {category.name}
                                            </li>
                                        ))
                                    }
                                </>
                            )}
                        </CategoriesMenu>
                    </CategoriesBox>
                </CategoriesContainer>

                <ProductContainer>
                    <div>
                        <ProductBox>
                            <AnimatePresence>
                                {showProducts.length > 0 ? (
                                    showProducts.map((product, index) => (
                                        loadedImages[index] && (
                                            <motion.div
                                                key={`show-products-${index}`}
                                                variants={modalVariants}
                                                initial="initial"
                                                animate="animate"
                                                exit="exit"
                                            >
                                                <ProductList>
                                                    <div className='product-img'>
                                                        <img 
                                                            src={product.image || "no_image.jpg"} 
                                                            alt="" 
                                                            onLoad={() => handleImageLoad(index)} 
                                                        />
                                                    </div>

                                                    <div className='product-info'>
                                                        <h1 className='product-name'>
                                                            {product.name}
                                                        </h1>

                                                        <h3 className='product-price'>
                                                            {currencyFormatter(
                                                                product.original_price,
                                                                dataLogin.outlet_currency_code,
                                                                dataLogin.outlet_location_code
                                                            )}
                                                        </h3>

                                                        <h3 className='product-stock'>
                                                            {product.infinity_stock === true ? (
                                                                <span className='stock-available' style={{ padding: '0.4rem' }}>
                                                                    <AllInclusiveOutlinedIcon style={{ fontSize: '0.9rem' }} />
                                                                </span>
                                                            ) : product.stock > 0 ? (
                                                                <span className='stock-available'>{product.stock}</span>
                                                            ) : (
                                                                <span className='stock-unavailable'>{translations.out_of_stock}</span>
                                                            )}
                                                        </h3>
                                                    </div>
                                                </ProductList>
                                            </motion.div>
                                        )
                                    ))
                                ) : (
                                    <>
                                        <div style={{ position: 'absolute' }}>
                                            <motion.div
                                                key="no-products"
                                                variants={modalVariants}
                                                initial="initial"
                                                animate="animate"
                                                exit="exit"
                                            >
                                                <div>No products</div>
                                            </motion.div>
                                        </div>
                                    </>
                                )}
                            </AnimatePresence>
                        </ProductBox>
                    </div>
                </ProductContainer>
            </ProductComponentContainer>

            {isShowAllCategories && (
                <AllCategoriesContainer>
                    <ul>
                        {
                            categoriesProduct.map((category, index) => (
                                <li 
                                    className={``}
                                    key={`all-categories-${index}`}
                                    onClick={() => handleChangeCategory(category.name, category.id)}
                                >
                                    {category.name}
                                </li>
                            ))
                        }
                    </ul>
                </AllCategoriesContainer>
            )}
        </>
    )
}

export default ProductComponent