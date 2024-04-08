import React, { useEffect } from 'react';
import Layout from '../components/layout/Layout';
import ShowCategories from '../components/Home/ShowCategories';
import CardShow from '../components/Home/CardShow';
import ContactDetails from '../components/Home/ContactDetails';
import UserResponse from '../components/Home/UserResponse';
import LinksAndAbout from '../components/Home/LinksAndAbout';
import productStore from '../store/productStore';
import MultipleSearch from '../components/Home/MultipleSearch';

const HomePage = () => {
    const { ProductCategoryListRequest, ProductSearchByCategory, ProductList, ProductListByKeywordRequest, ProductDetails, categoryName, location } = productStore();


    useEffect(() => {
        (async () => {
            await ProductCategoryListRequest()
        })()
    }, [])


    return (
        <Layout>

            <MultipleSearch />

             <ShowCategories />
            <CardShow />
            <ContactDetails />
            <UserResponse />
            <LinksAndAbout /> 

        </Layout>
    );
};

export default HomePage;