import React, { useEffect } from 'react';
import ImageGallary from './ImageGallary';
import productStore from '../../store/productStore';
import parse from 'html-react-parser';



const SingleProduct = () => {
    const { ProductDetails, AllProductsRequest } = productStore();



    // console.log(ProductDetails)


    useEffect(() => {
        (async () => {
            await AllProductsRequest()
        })()

    }, [])


    return (
        <div>
            <div className="item  rounded-md py-2 px-2 mb-4">
                <div>
                    {/* slider will be here */}

                    <ImageGallary />

                    <div className="text__file mt-10">
                        <div className="price">
                            <h2 className="text-[#6366F1] font-bold text-[26px] inline-block">Tk {ProductDetails.price}</h2><span
                                className="ml-2 bg-[#FCD34D] text-xs font-semibold rounded-full py-[1px] px-2">{ProductDetails.negotiable ? "Negotiable" : "Not Negotiable"}</span>
                        </div>
                        <div className="brand__condition mt-4">
                            <div className="grid md:grid-cols-1 md:gap-10">
                                <div className="brand"><span className="text-slate-500 text-base ">Product Name:</span><span
                                    className="text-slate-600 text-base font-semibold ml-2">{ProductDetails.title}</span></div>
                            </div>
                            <div className="grid md:grid-cols-2 md:gap-10 mt-2">
                                <div className="brand"><span className="text-slate-500 text-sm ">Brand:</span><span
                                    className="text-slate-600 text-sm font-semibold ml-2">{ProductDetails.brand} </span></div>
                                <div className="condition"><span className="text-slate-500 text-sm ">Condition:</span><span
                                    className="text-slate-600 text-sm font-semibold ml-2">{ProductDetails.condition}</span></div>
                            </div>
                            <div className="grid md:grid-cols-2 md:gap-10 mt-1">
                                <div className="brand"><span className="text-slate-500 text-sm ">Model:</span><span
                                    className="text-slate-600 text-sm font-semibold ml-2">{ProductDetails.model}</span></div>
                                <div className="condition"><span className="text-slate-500 text-sm ">Authenticity:</span><span
                                    className="text-slate-600 text-sm font-semibold ml-2">{ProductDetails.authenticity}</span></div>
                            </div>
                            <div className="md:grid grid-cols-2 gap-10 mt-1">
                                <div className="brand"><span className="text-slate-500 text-sm ">Edition:</span><span
                                    className="text-slate-600 text-sm font-semibold ml-2">{ProductDetails.edition} </span></div>
                                <div className="Category"><span className="text-slate-500 text-sm ">Category:</span><span
                                    className="text-slate-600 text-sm font-semibold ml-2">{ProductDetails.category.categoryName}</span></div>
                            </div>
                            <div className="md:grid grid-cols-2 gap-10 mt-1">
                                <div className="Districts"><span className="text-slate-500 text-sm ">Districts:</span><span
                                    className="text-slate-600 text-sm font-semibold ml-2">{ProductDetails.district}</span></div>
                                <div className="brand"><span className="text-slate-500 text-sm ">Upozila:</span><span
                                    className="text-slate-600 text-sm font-semibold ml-2">{ProductDetails.subDistrict}</span></div>
                            </div>
                            <div className="md:grid grid-cols-2 gap-10 mt-1">
                                <div className="Districts"><span className="text-slate-500 text-sm ">Posted Ads Date:</span><span
                                    className="text-slate-600 text-sm font-semibold ml-2">{new Date(ProductDetails.createdAt).getDay() + "-" + (new Date(ProductDetails.createdAt).getMonth() + 1) + "-" + new Date(ProductDetails.createdAt).getFullYear()}</span></div>

                                <div className="brand"><span className="text-slate-500 text-sm ">Email:</span><span
                                    className="text-slate-600 text-sm font-semibold ml-2">{ProductDetails.user.email}</span></div>
                            </div>
                        </div>
                        <div className="description mt-6">
                            <h2 className="text-slate-700 text-base font-semibold">Description:</h2>
                            <div className="text-slate-600 text-sm mt-4">
                                <div>
                                    {
                                        parse(ProductDetails.des)
                                    }
                                </div>
                            </div>
                        </div>
                    </div>



                </div>






            </div>
        </div>
    );
};

export default SingleProduct;