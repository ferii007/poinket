
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import {
    CategoriesContainer,
    CategoriesMenu,
    ProductContainer
} from '../styled_components/ProductComponentStyled';

import WidgetsOutlinedIcon from '@mui/icons-material/WidgetsOutlined';

const ProductComponent = () => {
    const dataCategories = useSelector((state) => state.dataCategories);

    const [categoriesProduct, setCategoriesProduct] = useState([]);

    useEffect(() => {
        if (Array.isArray(dataCategories) && dataCategories.length !== 0) {
            setCategoriesProduct(dataCategories);
        }
    }, [dataCategories])

    return(
        <>
            <ProductContainer>
                <div className='container'>
                    <CategoriesContainer>
                        <CategoriesMenu>
                            <li className='list-category active-category'>
                                All
                            </li>

                            {categoriesProduct?.length > 6 ? (
                                <>
                                    {
                                        categoriesProduct.slice(0, 6).map((category, index) => (
                                            <li 
                                            className='list-category'
                                            key={index}>{category.name}</li>
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
                                            className='list-category'
                                            key={index}>{category.name}</li>
                                        ))
                                    }
                                </>
                            )}
                        </CategoriesMenu>
                    </CategoriesContainer>
                </div>
            </ProductContainer>
        </>
    )
}

export default ProductComponent