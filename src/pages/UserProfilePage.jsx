import React, { useEffect } from 'react';
import Layout from '../components/layout/Layout';
import UserProfile from '../components/user/UserProfile';
import productStore from '../store/productStore';
import UserStore from '../store/userStore';
import { useNavigate } from 'react-router-dom';
  
const UserProfilePage = () => {
    const { ProductCategoryListRequest } = productStore()
    const { profileDetailsRequest, profileDetails, isLogin } = UserStore()
    const navigate = useNavigate()

    useEffect(() => {

        (async () => {
            await ProductCategoryListRequest()
            await profileDetailsRequest()
        })()
 
        if (!isLogin()) {
            navigate('/login')
        }


    }, [])


    // console.log(profileDetails)

    return (
        <Layout>
            <UserProfile />
        </Layout>
    );
};

export default UserProfilePage;