

import React, { useEffect, useState } from 'react';
import Layout from '../components/layout/Layout';
import ProductEdit from '../components/user/ProductEdit';
import productStore from '../store/productStore';




const ProductEditPage = () => {
    const { ProductCreateRequest, ProductCategoryList, ProductCategoryListRequest } = productStore()


    useEffect(() => {
        (async () => {
            await ProductCategoryListRequest()
        })()
    }, [])


    return (
        <Layout>
            <ProductEdit />
        </Layout>

    )

};

export default ProductEditPage;