import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import productStore from '../../store/productStore';
import { Link, useNavigate } from 'react-router-dom';
import HomeSearch from './HomeSearch';
import toast from 'react-hot-toast';
import ShowCategories from './ShowCategories';

const MultipleSearch = () => {
    const { ProductCreateRequest, ProductCategoryList, ProductCategoryListRequest } = productStore()
    const [category, setCategory] = useState({
        value: "Select...",
        label: "",
    });
    const [categories, setCategories] = useState([]);
    const navigate = useNavigate()
    const [form, setFormData] = useState({

        "district": "",
        "subDistrict": "",

    })


    const onChangeHandler = (key, value) => {
        setFormData((pre) => ({
            ...pre,
            [key]: value
        }))
    }


    useEffect(() => {


        // if (ProductCategoryList) {

        //     let totalCategories = ProductCategoryList.map((item, i) => ({
        //         value: item._id,
        //         label: item.categoryName
        //     }))

        //     setCategory(totalCategories)
        //     setCategories(totalCategories)
        // }



    }, [ProductCategoryList])



    const submitHandler = () => {
        form.categorid = category.value

        if (form.district === '' || form.subDistrict === '' || form.categorid === undefined) {
            toast.error('you must fill out this form.')
        }else{
        navigate(`/search/${form.district}/${form.subDistrict}/${category.value}`)

        }


    }
    const setCategoryChange = (categoryData) => {
        setCategory(categoryData)
    }

  //console.log(ProductCategoryList)

    return (
        <div className="bg-[#a855f7] py-3">
            <div className="container mx-auto">
                <div className="block md:mt-4 ">
                    <div className="mx-auto md:flex justify-center gap-4"><span className="block mb-3 md:mb-0  md:w-[200px]"><span
                        className="text-sm text-[#fff] pb-1 block">Select District</span>


                   

                        <div className="select__color css-b62m3t-container"><span
                            id="react-select-3-live-region" className="css-7pg0cj-a11yText"></span><span
                                aria-live="polite" aria-atomic="false" aria-relevant="additions text"
                                className="css-7pg0cj-a11yText"></span>
                            <div className=" css-h4xyy0-control">
                                <div className=" css-1d8n9bt">

                                    <input type="text"
                                        onChange={(e) => onChangeHandler('district', e.target.value)}
                                        className='w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-6 text-base  text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md' />

                                </div>
                                <div className=" css-1wy0on6"><span
                                    className=" css-1okebmr-indicatorSeparator"></span>

                                </div>
                            </div>
                        </div>




                    </span><span className="block mb-3 md:mb-0 md:w-[200px]"><span
                        className="text-sm text-[#fff] pb-1 block">Select Upozila</span>




                            <div className="select__color css-b62m3t-container"><span
                                id="react-select-3-live-region" className="css-7pg0cj-a11yText"></span><span
                                    aria-live="polite" aria-atomic="false" aria-relevant="additions text"
                                    className="css-7pg0cj-a11yText"></span>
                                <div className=" css-h4xyy0-control">
                                    <div className=" css-1d8n9bt">

                                        <input type="text"
                                            onChange={(e) => onChangeHandler('subDistrict', e.target.value)}
                                            className='w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-6 text-base  text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md' />

                                    </div>
                                    <div className=" css-1wy0on6"><span
                                        className=" css-1okebmr-indicatorSeparator"></span>

                                    </div>
                                </div>
                            </div>




                        </span><span className="block mb-3 md:mb-0 md:w-[200px]"><span
                            className="text-sm text-[#fff] pb-1 block">Select Category</span>



                            <Select
                                className="rounded-md select__color border border-[#e0e0e0]"
                                // defaultValue={category[0]}
                                // onChange={setCategory}
                                // options={categories}
                                defaultValue={ProductCategoryList && ProductCategoryList[0]}
                                onChange={(e) => setCategoryChange(e)}
                                options={ProductCategoryList && ProductCategoryList}
                               

                                styles={{
                                    option: (provided, state) => ({
                                        ...provided,
                                        borderBottom: "1px solid #ddd",
                                        color: state.isSelected ? "#fff" : "#666",
                                        background: state.isSelected ? "#A855F7" : "#fff",
                                        cursor: "pointer",
                                        margin: "0px",
                                        fontSize: "14px",
                                        ":active": {
                                            backgroundColor: "#fff",
                                            cursor: "pointer",
                                        },
                                    }),
                                    singleValue: (provided, state) => ({
                                        ...provided,

                                        color: "#334155 !important",
                                        border: "1px",
                                        fontSize: "16px",
                                        fontWeight: "500",
                                        ":focus-within": {
                                            ...provided[":focus-within"],
                                            border: "1px solid #7E22CE",
                                            boxShadow: "none",
                                            color: "#fff",
                                        },
                                    }),
                                    control: (styles) => ({
                                        ...styles,
                                        backgroundColor: "#fff",
                                        padding: "2px 0px",
                                        margin: "0px 0px",
                                        cursor: "pointer",
                                        color: "#fff",
                                        border: "1px solid #fff",
                                        borderRadius: "5px",
                                        ":focus-within": {
                                            ...styles[":focus-within"],
                                            border: "1px solid #7E22CE",
                                            boxShadow: "none",
                                            color: "#fff",
                                        },
                                    }),
                                    menuList: (styles) => ({
                                        ...styles,
                                        margin: "0px",
                                        padding: "0px",
                                        color: "#fff",
                                    }),
                                    noOptionsMessage: (styles) => ({
                                        ...styles,
                                        background: "red",
                                        color: "#fff",
                                    }),
                                }}
                            />



                        </span><span className="flex items-end">
                            {/* <Link to={''}> */}
                                {/* <Link to={`/search/${form.district}/${form.subDistrict}/${category.value}`}> */}
                                <button onClick={submitHandler}

                                    className="block  py-[10px] px-3 rounded-lg bg-[#FCD34D] font-semibold text-slate-700 hover:bg-[#fbbf24]"
                                >
                                    <svg
                                        stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24"
                                        strokeLinecap="round" strokeLinejoin="round" className="inline" height="1em"
                                        width="1em" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="11" cy="11" r="8"></circle>
                                        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                                    </svg>
                                    Search
                                </button>
                            {/* </Link> */}
                        </span>
                    </div>
                </div>


                <HomeSearch />




            </div>
        </div>
    );
};

export default MultipleSearch;