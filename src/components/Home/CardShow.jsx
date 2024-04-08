import React from 'react';
import { Link } from 'react-router-dom';

const CardShow = () => {
    return (



        <div className="card__option mt-20 mb-16">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="card block text-center md:text-left md:flex gap-7 px-8 py-10 rounded-lg box-shadow">
                        <div className="img__file"><img className="w-[140px] mx-auto mb-6"
                            src="https://res.cloudinary.com/amit-js/image/upload/v1663926581/bye%20and%20sell/money-bag_tdgfjg.png"
                            alt="" /></div>
                        <div className="text__file">
                            <h2 className="text-xl font-bold text-slate-700 pb-2">Sell Your Product's
                                and Earn Money!</h2>
                            <p className="text-base text-slate-500 mb-2 ">If you want to sell any of
                                your products then you can sell now. One of the easiest and quickest
                                works</p><Link to={'/user'} ><button
                                    className="rounded-full px-2 btn-primary bg-[#fcd34d] text-slate-800 hover:bg-[#fbbf24]"><svg
                                        stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512"
                                        className="inline text-[12px] mr-1" height="1em" width="1em"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z">
                                        </path>
                                    </svg> Post your Ads</button></Link>
                        </div>
                    </div>
                    <div className="card block text-center md:text-left md:flex gap-7 px-8 py-10 rounded-lg box-shadow">
                        <div className="img__file"><img className="w-[140px]  mx-auto mb-6"
                            src="https://res.cloudinary.com/amit-js/image/upload/v1663928761/bye%20and%20sell/online-shopping_fmcm3g.png"
                            alt="" /></div>
                        <div className="text__file">
                            <h2 className="text-xl font-bold text-slate-700 pb-2">Buy items at your
                                fingertips</h2>
                            <p className="text-base text-slate-500 mb-2 ">You can easily select your
                                desired product and purchase it from here. It is easy and safe to
                                use.</p><Link to={'/products'} > <button
                                    className="rounded-full btn-primary px-3 bg-[#A855F7] text-slate-100 hover:bg-[#9333ea]">
                                    See  All Ads <svg stroke="currentColor" fill="currentColor" strokeWidth="0"
                                        viewBox="0 0 24 24"
                                        className="inline text-[14px] mb-1 ml-1 bg-slate-200 rounded-full text-[#A855F7]"
                                        height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                        <path fill="none" d="M0 0h24v24H0V0z"></path>
                                        <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z">
                                        </path>
                                    </svg></button></Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mx-auto mt-12">
                <div className="card card block text-center md:text-left md:flex gap-7 px-8 py-10 rounded-lg box-shadow">
                    <div className="img__file"><img className="w-[140px] mx-auto mb-6"
                        src="https://res.cloudinary.com/amit-js/image/upload/v1663929563/bye%20and%20sell/delivery-guy_wbx2jz.png"
                        alt="" /></div>
                    <div className="text__file">
                        <h2 className="text-xl font-bold text-slate-700 pb-2">Find the right product for
                            you<span
                                className="inline-block md:inline text-[14px] md:text-[10px] mt-2 md:mt-0  font-semibold bg-[#A855F7] ml-1 px-6 md:px-2 py-0.5 text-white rounded-lg">Hot
                                Delivery</span></h2>
                        <p className="text-base text-slate-500 mb-2 ">Get the product directly in hand
                            and have the facility of fastest delivery. In the case of buying and
                            selling products, you get the benefit of <strong>seeing and
                                understanding</strong> , that is, you can see any product with your
                            own hands and then buy and sell it. ad!</p>
                        <Link to="/products">
                            <button
                                className="rounded-full px-2 btn-primary bg-[#A855F7] text-slate-100 hover:bg-[#9333ea]">
                                Shop Now <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24"
                                    className="inline text-[14px] mb-1 ml-1 bg-slate-200 rounded-full text-[#A855F7]"
                                    height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <path fill="none" d="M0 0h24v24H0V0z"></path>
                                    <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z">
                                    </path>
                                </svg></button></Link>
                    </div>
                </div>
            </div>
        </div>




    );
};

export default CardShow;