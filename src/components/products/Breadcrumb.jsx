import React, { useEffect, useState } from 'react';
import productStore from '../../store/productStore';
import { Link } from 'react-router-dom';

const Breadcrumb = () => {

    const { ProductDetails, resetProdctDetails } = productStore();



    return (

        <div className="body__option py-5 px-5   ">
            <div className="safe__bar bg-[#6366f1] rounded-md md:flex justify-between gap-8 py-4">
                <div className="text__file px-4 md:px-0 md:ml-4  ">
                    <p
                        className="flex justify-center  text-slate-600 font-semibold bg-[#FCD34D] px-2 py-0.5 rounded-full text-sm">
                        Get Safe Browser in your Location!</p>
                </div>
                <div className="flex justify-center mt-2 md:block img__file text-sm text-white font-semibold  mr-4">
                    <p><Link onClick={resetProdctDetails} to="/">Home</Link> / All Ads {ProductDetails ? " / Single Ads Preview" : ""} </p>
                </div>
            </div>
        </div>
    );
};

export default Breadcrumb;