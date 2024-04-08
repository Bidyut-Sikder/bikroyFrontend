import React from 'react';
import productStore from '../../store/productStore';
import { Link } from 'react-router-dom';

const ShowCategories = () => {
    const { ProductCategoryListRequest, ProductCategoryList } = productStore();

    //console.log(ProductCategoryList)

    return (


        <div className="category__option">
            <div className="container mx-auto">
                <div className="header__text mt-10">
            
                    <h3 className="text-lg  max-[768px]:hidden font-semibold">Browse items by category</h3>
                </div>
                <div className="hidden md:grid category grid-cols-4 gap-2">

                    {
                        ProductCategoryList ? ProductCategoryList.map((category, i) => {
                            return (
                                <div key={i} className="ml-10 mt-10">
                                    <Link to={`/category/${category.value}`} className="flex " >
                                        <div className="img__file mr-3 ">
                                            <img style={{width:'50px',height:"50px"}} className=""
                                                src={category.categoryImg}
                                                alt="" /></div>
                                        <div className="text__file">
                                            <h2 className="text-sm font-medium text-slate-500">{category.label}</h2>
                                            {/* <p className="text-xs font-medium text-slate-500">16 Ads</p> */}
                                        </div>
                                    </Link>
                                </div>
                            )
                        }) : (<h3>Loading...</h3>)
                    }

                    {/* <div className="ml-10 mt-10"><a className="flex " href="/all-ads-filter-category/Mobiles/1">
                        <div className="img__file mr-3 "><img className=""
                            src="https://res.cloudinary.com/amit-js/image/upload/v1663922057/bye%20and%20sell/mobile-app_mxusbf.png"
                            alt="" /></div>
                        <div className="text__file">
                            <h2 className="text-sm font-medium text-slate-500">Mobiles</h2>
                            <p className="text-xs font-medium text-slate-500">16 Ads</p>
                        </div>
                    </a></div> */}

                    {/*                     
                    <div className="ml-10 mt-10"><a className="flex " href="/all-ads-filter-category/Electronics/1">
                        <div className="img__file mr-3 "><img className=""
                            src="https://res.cloudinary.com/amit-js/image/upload/v1663922057/bye%20and%20sell/electronic-device_xdfxwx.png"
                            alt="" /></div>
                        <div className="text__file">
                            <h2 className="text-sm font-medium text-slate-500">Electronics</h2>
                            <p className="text-xs font-medium text-slate-500">36 Ads</p>
                        </div>
                    </a></div>
                    <div className="ml-10 mt-10"><a className="flex " href="/all-ads-filter-category/Home &amp; Living/1">
                        <div className="img__file mr-3 "><img className=""
                            src="https://res.cloudinary.com/amit-js/image/upload/v1663922136/bye%20and%20sell/house_r7bbci.png"
                            alt="" /></div>
                        <div className="text__file">
                            <h2 className="text-sm font-medium text-slate-500">Home &amp; Living
                            </h2>
                            <p className="text-xs font-medium text-slate-500">16 Ads</p>
                        </div>
                    </a></div>
                    <div className="ml-10 mt-10"><a className="flex " href="/all-ads-filter-category/Vehicles/1">
                        <div className="img__file mr-3 "><img className=""
                            src="https://res.cloudinary.com/amit-js/image/upload/v1663922254/bye%20and%20sell/electric-vehicle_qang2y.png"
                            alt="" /></div>
                        <div className="text__file">
                            <h2 className="text-sm font-medium text-slate-500">Vehicles</h2>
                            <p className="text-xs font-medium text-slate-500">6 Ads</p>
                        </div>
                    </a></div>
                    <div className="ml-10 mt-10"><a className="flex " href="/all-ads-filter-category/Property/1">
                        <div className="img__file mr-3 "><img className=""
                            src="https://res.cloudinary.com/amit-js/image/upload/v1663923127/bye%20and%20sell/house_1_alznb1.png"
                            alt="" /></div>
                        <div className="text__file">
                            <h2 className="text-sm font-medium text-slate-500">Property</h2>
                            <p className="text-xs font-medium text-slate-500">0 Ads</p>
                        </div>
                    </a></div>
                    <div className="ml-10 mt-10"><a className="flex " href="/all-ads-filter-category/Pets &amp; Animals/1">
                        <div className="img__file mr-3 "><img className=""
                            src="https://res.cloudinary.com/amit-js/image/upload/v1663922309/bye%20and%20sell/dog_crmfm3.png"
                            alt="" /></div>
                        <div className="text__file">
                            <h2 className="text-sm font-medium text-slate-500">Pets &amp; Animals
                            </h2>
                            <p className="text-xs font-medium text-slate-500">11 Ads</p>
                        </div>
                    </a></div>
                    <div className="ml-10 mt-10"><a className="flex " href="/all-ads-filter-category/Sports &amp; Kids/1">
                        <div className="img__file mr-3 "><img className=""
                            src="https://res.cloudinary.com/amit-js/image/upload/v1663922373/bye%20and%20sell/running_fh5n4e.png"
                            alt="" /></div>
                        <div className="text__file">
                            <h2 className="text-sm font-medium text-slate-500">Sports &amp; Kids
                            </h2>
                            <p className="text-xs font-medium text-slate-500">16 Ads</p>
                        </div>
                    </a></div>
                    <div className="ml-10 mt-10"><a className="flex "
                        href="/all-ads-filter-category/Women's Fashion &amp; Beauty/1">
                        <div className="img__file mr-3 "><img className=""
                            src="https://res.cloudinary.com/amit-js/image/upload/v1663922433/bye%20and%20sell/fashion_mgvndb.png"
                            alt="" /></div>
                        <div className="text__file">
                            <h2 className="text-sm font-medium text-slate-500">Women's Fashion &amp;
                                Beauty</h2>
                            <p className="text-xs font-medium text-slate-500">27 Ads</p>
                        </div>
                    </a></div> */}

                </div>

                {/* slider here */}

                {/* 
                <div className="md:hidden category gap-2">
                    <div className="slick-slider slick-initialized" dir="ltr"><button type="button" data-role="none"
                        className="slick-arrow slick-prev" style={{ display: "block" }}>
                        Previous</button>
                        <div className="slick-list">
                            <div className="slick-track" style={{ opacity: "1", transform: "translate3d(0px, 0px, 0px)" }}>





                                <div data-index="28" tabIndex="-1" className="slick-slide slick-cloned" aria-hidden="true"
                                    style={{ width: "0px" }}>
                                    <div>
                                        <div className="ml-10 mt-10" tabIndex="-1" style={{ width: "100%", display: "inline-block" }}>
                                            <a className="flex " href="/all-ads-filter-category/Essentials/1">
                                                <div className="img__file mr-3 "><img className=""
                                                    src="https://res.cloudinary.com/amit-js/image/upload/v1663922791/bye%20and%20sell/bathtub_vsbeqd.png"
                                                    alt="" /></div>
                                                <div className="text__file">
                                                    <h2 className="text-sm font-medium text-slate-500">
                                                        Essentials</h2>
                                                    <p className="text-xs font-medium text-slate-500">11
                                                        Ads</p>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>



                                <div data-index="30" tabIndex="-1" className="slick-slide slick-cloned" aria-hidden="true"
                                    style={{ width: "0px" }}>
                                    <div>
                                        <div className="ml-10 mt-10" tabIndex="-1" style={{ width: "100%", display: "inline-block" }}>
                                            <a className="flex " href="/all-ads-filter-category/Agriculture/1">
                                                <div className="img__file mr-3 "><img className=""
                                                    src="https://res.cloudinary.com/amit-js/image/upload/v1663922921/bye%20and%20sell/tomato_fe0myz.png"
                                                    alt="" /></div>
                                                <div className="text__file">
                                                    <h2 className="text-sm font-medium text-slate-500">
                                                        Agriculture</h2>
                                                    <p className="text-xs font-medium text-slate-500">2
                                                        Ads</p>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>













                            </div>
                        </div>

                    </div>
                </div> */}

            </div>
        </div>


    );
};

export default ShowCategories;