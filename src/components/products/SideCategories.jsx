import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import productStore from '../../store/productStore';
import { Link } from 'react-router-dom';

const SideCategories = ({ user }) => {

    const { ProductCategoryListRequest, resetProdctDetails, ProductCategoryList, ProductList, ProductsRequestBySort } = productStore()



    const [tags, setShortTag] = useState({
        value: "Date:Latest",
        label: 'Date:Latest'
    });
    const shortTags = [
        { value: 'Latest', label: 'Latest' },
        { value: 'Old', label: 'Old' },
        { value: 'LowToHigh', label: 'Low To High' },
        { value: 'HighToLow', label: 'High To Low' },

    ];






    useEffect(() => {

        (async () => {
            await ProductCategoryListRequest()
        })()

        if (tags.value === 'Old') {
            let products = ProductList.sort((a, b) => parseFloat(new Date(a.createdAt).getTime()) - parseFloat(new Date(b.createdAt).getTime()))

            ProductsRequestBySort(products)

        }
        if (tags.value === 'Latest') {
            let products = ProductList.sort((a, b) => parseFloat(new Date(b.createdAt).getTime()) - parseFloat(new Date(a.createdAt).getTime()))

            ProductsRequestBySort(products)

        }
        if (tags.value === 'LowToHigh') {
            let products = ProductList.sort((a, b) => (parseFloat(a.price)) - (parseFloat(b.price)))

            ProductsRequestBySort(products)
        }
        if (tags.value === 'HighToLow') {
            let products = ProductList.sort((a, b) => (parseFloat(b.price)) - (parseFloat(a.price)))

            ProductsRequestBySort(products)
        }


    }, [tags])

    if (ProductCategoryList === null) {
        return <h1>Loading...</h1>
    }

    // console.log(ProductCategoryList)

    return (
        <div className="rightSide md:w-1/5 md:border-l md:pl-5 border-slate-200">
            <div className="sort__result">

                {
                    user ? (<>


                        <div className="vendor">
                            <p className="text-slate-500 text-xs mb-2">Sales by <span className=" text-slate-700 text-base font-semibold">{`${user.firstName} ${user.lastName}`} </span></p>
                            <hr />
                            <div className="mt-5 mb-2">
                                <p style={{ background: '#6366F1', padding: '5px' }} className="text-white text-base text-[14px] bg-[#6366F1] inline-block px-4 py-0 rounded-full">
                                    <svg
                                        stroke="currentColor" fill="currentColor" strokeWidth="10" viewBox="0 0 512 512"
                                        className="inline text-[12px] mb-1 " height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z">
                                        </path>
                                    </svg>
                                    Number For Call:</p>
                                <p className="mt-2 px-4 text-slate-600 font-semibold">{user.phone}</p>
                            </div>
                            <hr />

                        </div>


                    </>) : (
                        <div className="mb-3"><label htmlFor="name"
                            className="mb-1 block text-sm  text-slate-500">Sort results by</label>
                            <div className="select__color css-b62m3t-container"><span
                                id="react-select-2-live-region" className="css-7pg0cj-a11yText"></span><span
                                    aria-live="polite" aria-atomic="false" aria-relevant="additions text"
                                    className="css-7pg0cj-a11yText"></span>
                                <div className=" css-h4xyy0-control">
                                    <div className=" css-1d8n9bt">
                                        <Select
                                            className="rounded-md select__color border border-[#e0e0e0]"
                                            defaultValue={tags[0]}
                                            onChange={setShortTag}
                                            options={shortTags}
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
                                    </div>
                                    <div className=" css-1wy0on6"><span
                                        className=" css-1okebmr-indicatorSeparator"></span>

                                    </div>
                                </div>
                            </div>
                        </div>


                    )
                }


            </div>



            <div className="category mt-4">
                <h2 className="text-slate-700 font-semibold text-sm">All Categories:</h2>
                <ul className="mt-2">

                    {/* {
                        ProductCategoryList ? ProductCategoryList.map((category, i) => {
                            return (
                                <Link onClick={() => resetProdctDetails(category.categoryName, "All Bangladesh")} key={i} to={`/category/${category._id}`} className="block text-sm text-slate-400 hover:text-slate-500 py-0.5"
                                >
                                    <li>{category.categoryName}</li>
                                </Link>
                            )
                        }) : <>Loading..</>
                    } */}










                    {
                        ProductCategoryList.map((category, i) => {
                            return (
                                <Link onClick={() => resetProdctDetails(category.label, "All Bangladesh")}
                                    key={i} to={`/category/${category.value}`}
                                    className="block text-sm text-slate-400 hover:text-slate-500 py-0.5"
                                >
                                    <li>{category.label}</li>
                                </Link>
                            )
                        })

                    }











                </ul>
            </div>


        </div>


    );
};

export default SideCategories;









