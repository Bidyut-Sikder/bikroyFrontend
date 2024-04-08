import React, { useState } from 'react';
import productStore from '../../store/productStore';
import { useNavigate } from 'react-router-dom';

const ProductSearch = () => {
    const [searchData, setSearchData] = useState('')
    const navigate = useNavigate()

    const { ProductListByKeywordRequest, ProductDetails, categoryName, location } = productStore();

    const onChangeHandler = (e) => {

        setSearchData(e.target.value.normalize("NFD"))

    }

    const onSubmitHandler = async () => {

        // console.log(ProductDetails._id)
        await ProductListByKeywordRequest(searchData)
        navigate(`/search/${searchData}`)
    }

    const onSubmitFormHandler = async (e) => {
        e.preventDefault()
        await ProductListByKeywordRequest(searchData)
        //  console.log(e.target)
        navigate(`/search/${searchData}`)
    
       //// navigate(`/search/${ProductDetails._id}`)

    }

    return (
        <div className="allAds px-5 py-2">

            <div className="search__option md:flex  items-center mb-3">

                <div className="hidden md:block item w-4/12">
                    <svg stroke="currentColor" fill="currentColor"
                        strokeWidth="0" viewBox="0 0 24 24" className="inline text-[#A855F7]" height="1em" width="1em"
                        xmlns="http://www.w3.org/2000/svg" >
                        <path
                            d="M10 3H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM9 9H5V5h4v4zm11-6h-6a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zm-1 6h-4V5h4v4zm-9 4H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1zm-1 6H5v-4h4v4zm8-6c-2.206 0-4 1.794-4 4s1.794 4 4 4 4-1.794 4-4-1.794-4-4-4zm0 6c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2z">
                        </path>
                    </svg> <span className="text-base font-semibold text-slate-700">Category: {ProductDetails ? ProductDetails.category.categoryName : categoryName}</span>
                </div>


                <div className="hidden md:block item w-3/12">
                    <svg stroke="currentColor" fill="currentColor"
                        strokeWidth="0" viewBox="0 0 512 512" className="inline text-[#A855F7]" height="1em"
                        width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M444.52 3.52L28.74 195.42c-47.97 22.39-31.98 92.75 19.19 92.75h175.91v175.91c0 51.17 70.36 67.17 92.75 19.19l191.9-415.78c15.99-38.39-25.59-79.97-63.97-63.97z">
                        </path>
                    </svg>
                    <span className="text-base font-semibold text-slate-700">{ProductDetails ? ` ${ProductDetails.district},${ProductDetails.subDistrict}` : location}</span>
                </div>
                <div className="item   md:w-5/12 md:ml-auto">

                    <form onSubmit={onSubmitFormHandler} >

                        <label className="block relative">
                            <input type="text"
                                name="text"
                                className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-full sm:text-sm focus:ring-1"
                                placeholder="What Are You Want?"
                                onChange={onChangeHandler}
                                value={searchData}
                            />


                            <div onClick={onSubmitHandler}
                                className="absolute right-[6px] top-[5px] md:top-[3px] md:right-[4px] bg-[#FCD34D] p-2 rounded-full cursor-pointer">
                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512"
                                    height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z">
                                    </path>
                                </svg>
                            </div>
                        </label>
                    </form>

                </div>
            </div>

        </div>
    );
};

export default ProductSearch;