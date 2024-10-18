
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import {
    CategoriesContainer,
    CategoriesBox,
    CategoriesMenu,
    ProductContainer,
    ProductBox,
    ProductList,
} from '../styled_components/ProductComponentStyled';

import WidgetsOutlinedIcon from '@mui/icons-material/WidgetsOutlined';
import AllInclusiveOutlinedIcon from '@mui/icons-material/AllInclusiveOutlined';

const ProductComponent = () => {
    const dataCategories = useSelector((state) => state.dataCategories);
    const dataProducts = useSelector((state) => state.dataProducts);

    const [originalProducts, setOriginalProducts] = useState([]);
    const [showProducts, setShowProducts] = useState([]);
    const [categoriesProduct, setCategoriesProduct] = useState([]);
    const [activeCategory, setActiveCategory] = useState({categoryName: 'all', categoryID: null});

    const handleChangeCategory = (categoryName, categoryID = null) => {
        setActiveCategory({
            categoryName: categoryName,
            categoryID: categoryID
        })

        handleShowProducts(categoryName, categoryID);
    }

    const handleShowProducts = (categoryName, categoryID) => {
        let filteredProducts = originalProducts;
        
        if (categoryName !== 'all') {
            filteredProducts = originalProducts.filter(product => product.category_name === categoryName && product.category_id === categoryID);
        }

        setShowProducts(filteredProducts);
    }

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
    }, [originalProducts])

    return(
        <>
            <CategoriesContainer>
                <CategoriesBox>
                    <CategoriesMenu>
                        <li
                            className={`list-category ${activeCategory.categoryName === 'all' ? 'active-category' : ''}`}
                            onClick={() => handleChangeCategory('all')}
                        >
                            All
                        </li>

                        {categoriesProduct?.length > 6 ? (
                            <>
                                {
                                    categoriesProduct.slice(0, 6).map((category, index) => (
                                        <li 
                                            className={`list-category ${(activeCategory.categoryName === category.name && activeCategory.categoryID === category.id) ? 'active-category' : ''}`}
                                            key={index}
                                            onClick={() => handleChangeCategory(category.name, category.id)}
                                        >
                                            {category.name}
                                        </li>
                                    ))
                                }

                                <li className='list-category'>
                                    <WidgetsOutlinedIcon />
                                </li>
                            </>
                        ) : (
                            <>  
                                {
                                    categoriesProduct.map((category, index) => (
                                        <li 
                                            className={`list-category ${(activeCategory.categoryName === category.name && activeCategory.categoryID === category.id) ? 'active-category' : ''}`}
                                            key={index}
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
                    {/* <h1>Products</h1> */}

                    <ProductBox>
                        {showProducts.length > 0 ? (
                            showProducts.map((product, index) => (
                                <ProductList key={index}>
                                    <div className='product-img'>
                                        <img src="no_image.jpg" alt="" />
                                    </div>

                                    <div className='product-info'>
                                        <h1 className='product-name'>
                                            {product.name}
                                        </h1>

                                        <h3 className='product-price'>
                                            Rp. {product.original_price}
                                        </h3>
                                        
                                        <h3 className='product-stock'>
                                            {
                                                product.infinity_stock === true &&
                                                (
                                                   <>
                                                        <span className='stock-available' style={{ padding: '0.4rem' }}>
                                                            <AllInclusiveOutlinedIcon style={{ fontSize: '0.9rem' }} />
                                                        </span> 
                                                   </>
                                                )
                                            }

                                            {
                                                product.infinity_stock === false && product.stock > 0 &&
                                                (
                                                   <>
                                                        <span className='stock-available'>{product.stock}</span> 
                                                   </>
                                                )
                                            }

                                            {
                                                product.infinity_stock === false && product.stock <= 0 &&
                                                (
                                                   <>
                                                        <span className='stock-unavailable'>Out of stock</span> 
                                                   </>
                                                )
                                            }
                                        </h3>
                                    </div>
                                </ProductList>
                            ))
                        ) : (
                            <div>No products</div>
                        )}
                    </ProductBox>
                </div>
            </ProductContainer>
        </>
    )
}

export default ProductComponent