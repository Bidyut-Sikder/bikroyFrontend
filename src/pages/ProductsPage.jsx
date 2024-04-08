import React, { useEffect, useState } from 'react';
import Layout from '../components/layout/Layout';
import Breadcrumb from '../components/products/Breadcrumb';
import ProductSearch from '../components/products/ProductSearch';
import Admin from '../components/admin/Admin';
import Noproducts from '../components/products/Noproducts';
import SideCategories from '../components/products/SideCategories';
import Products from '../components/products/Products';
import { Link } from 'react-router-dom';
import productStore from '../store/productStore';



const ProductsPage = () => {


    const { AllProductsRequest,ProductCategoryListRequest, ProductList } = productStore()





    useEffect(() => {
        (async () => {
            await AllProductsRequest();
            await ProductCategoryListRequest()
        })()
    }, [])



    return (
        <Layout>


            <div className="bg-[#f3f4f6] min-h-screen block pt-8">
                <div className="container  mx-auto mb-20">

                    <div className="bg-[#fff] rounded-md pb-10">

                        <Breadcrumb />

                        <div className="allAds px-5 py-2">

                            <ProductSearch />
                            <hr />

                            <div className="adsShow mt-4">
                                <div className="main__show__body md:flex gap-6" >
                                    <div className="leftSide md:w-4/5">
                                        <div className="md:flex gap-10">

                                            <Admin />

                                            {/* <Noproducts /> */}
                                            {
                                                ProductList.length!==0 ? (<Products />) : (<Noproducts />)
                                            }

                                        </div>
                                    </div>

                                    <SideCategories />

                                </div>
                            </div>


                        </div>



                    </div>
                </div>

            </div>

        </Layout>
    );
};

export default ProductsPage;
//class="bg-[#f3f4f6] min-h-screen block pt-8"