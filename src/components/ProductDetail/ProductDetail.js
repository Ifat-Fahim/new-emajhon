import React from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData';
import Product from '../Product/Product';

const ProductDetail = () => {
    const {productKey} = useParams();
    const product = fakeData.find(product => product.key === productKey);
    return (
        <div>
            <Product product={product} handleAddToCart={false} />
        </div>
    );
};

export default ProductDetail;