import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";


import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import UserProfilePage from "./pages/UserProfilePage";
import SingleProductPage from "./pages/SingleProductPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import ProductByCategoyPage from "./pages/ProductByCategoyPage";
import ProductSearchPage from "./pages/ProductSearchPage";
import ProductPageByMutipleSearchData from "./pages/ProductPageByMutipleSearchData";
import ProductEditPage from "./pages/ProductEditPage";
import UserLoginPage from "./pages/UserLoginPage";
import AdminLoginPage from "./pages/AdminLoginPage";
import AdminDashBoardPage from "./pages/AdminDashBoardPage";
import UserSignUpPage from "./pages/UserSignUpPage";


const App = () => {



  return (

    <BrowserRouter>

      <Routes>

        <Route path="/adminlogin" element={<AdminLoginPage />} />
        <Route path="/dashboard" element={<AdminDashBoardPage />} />


        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/user" element={<UserProfilePage />} />
        <Route path="/login" element={<UserLoginPage />} />
        <Route path="/signup" element={<UserSignUpPage />} />

        <Route path="/singleproduct" element={<SingleProductPage />} />
        <Route path="/details/:productID" element={<ProductDetailsPage />} />
        <Route path="/category/:categoryID" element={<ProductByCategoyPage />} />
        <Route path="/search/:keyword" element={<ProductSearchPage />} />
        <Route path="/search/:district/:upozila/:categoryID" element={<ProductPageByMutipleSearchData />} />
        <Route path="/edit/:productID" element={<ProductEditPage />} />

      </Routes>
    </BrowserRouter>





  );
};

export default App;
















































