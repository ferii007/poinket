
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import {
    ProductContainer
} from '../styled_components/ProductComponentStyled';

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
                <div>
                    {categoriesProduct?.map((category, index) => (
                        <div key={index}>{category.name}</div>
                    ))}
                </div>
            </ProductContainer>
        </>
    )
}

export default ProductComponent