import React, { useState } from 'react';
import productStore from '../../store/productStore';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const HomeSearch = () => {

    const [searchData, setSearchData] = useState('')
    const navigate = useNavigate()

    const { ProductListByKeywordRequest, ProductDetails } = productStore();

    const onChangeHandler = (e) => {

        setSearchData(e.target.value.normalize("NFD"))

    }

    const onSubmitHandler = async () => {

     
        if (searchData.length !== 0) {
            await ProductListByKeywordRequest(searchData.toLocaleLowerCase())
            navigate(`/search/${searchData.toLocaleLowerCase()}`)
        } else {
            toast.error('you must type something.')
        }

    }

    const onSubmitFormHandler = async (e) => {
        e.preventDefault()

        if (searchData.length !== 0) {
            await ProductListByKeywordRequest(searchData.toLocaleLowerCase())
            navigate(`/search/${searchData.toLocaleLowerCase()}`)
        } else {
            toast.error('you must type something.')
        }


    }





    return (

        < div className="block md:flex justify-center items-center w-full mt-4" >
            <div className="block max-[700px]:px-3">
                <div className="pb-5"><label className="relative block  w-auto md:w-[600px] truncate ">
                    <form onSubmit={onSubmitFormHandler}>

                        <input
                            onChange={onChangeHandler}
                            value={searchData}

                            className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-full py-4 pl-9 pr-3 shadow-sm focus:outline-none sm:text-sm "
                            placeholder="Search for anything..." type="text" name="search" />

                    </form>
                    <span className="sr-only  items-center">Search</span>
                    {/* <span className="flex md:hidden mt-5 justify-center sr-only  items-center">Search</span> */}
                    <span onClick={onSubmitHandler}

                        className="absolute inset-y-0 right-0 flex items-center px-4 cursor-pointer bg-[#fde047] rounded-r-full"><svg
                            stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24"
                            className="inline text-2xl text-slate-600" height="1em" width="1em"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill="none" d="M0 0h24v24H0V0z"></path>
                            <path
                                d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z">
                            </path>
                        </svg>
                    </span>
                </label>

                    <div className="flex justify-center mt-4">
                        <Link to='/user'
                            className="md:hidden py-2 px-8 rounded-full bg-[#FCD34D] font-semibold text-slate-700 hover:bg-[#fbbf24]"><svg
                                stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24"
                                className="inline" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path fill="none" d="M0 0h24v24H0z"></path>
                                <path
                                    d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z">
                                </path>
                            </svg> Post Your AD</Link>
                    </div>

                </div>
            </div>
        </div >
    );
};

export default HomeSearch;