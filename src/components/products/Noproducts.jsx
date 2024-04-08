import React from 'react';
import { Link } from 'react-router-dom';

const Noproducts = () => {
    return (

        <div className="MainAdsData md:w-3/4">
            <div>
                <p className="text-slate-600 font-semibold text-sm mb-5">Total Result Showing: 0</p>
            </div>
            <div className="empty__post my-10 flex justify-center">
                <div className="block p-6 w-[400px]  transition-shadow bg-white sm:pr-12 group">
                    <span className=""><img className="w-[75px] h-[75px]"
                        src="https://res.cloudinary.com/amitjs/image/upload/v1664047528/Ecommerce%20Product%20Img-%20Important/Group_zxczwh.png"
                        alt="" /></span>
                    <h2 className="mt-3 text-lg font-bold">No Searching Data Found yet!</h2>
                    <p className="mt-3 text-sm text-gray-500">You Can Post any Ads and If you want
                        to delete any time. All Ads You have to add Description and Phone
                        number.</p>
                    <div className="mt-5">
                        <Link to={'/'}
                        className="py-2 px-5 rounded-xl bg-[#FCD34D] font-semibold text-slate-700 hover:bg-[#fbbf24]"
                        href="/"><svg stroke="currentColor" fill="currentColor"
                            strokeWidth="0" viewBox="0 0 24 24" className="inline" height="1em"
                            width="1em" xmlns="http://www.w3.org/2000/svg">
                            <path fill="none" d="M0 0h24v24H0z"></path>
                            <path
                                d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z">
                            </path>
                        </svg> Go Home</Link></div>
                </div>
            </div>

            <div>
                <div className="pagination mt-8 mb-8 md:mt-12 md:mb-0">
                    <div className="pagination__data"></div>
                </div>
            </div>
        </div>
    );
};

export default Noproducts;