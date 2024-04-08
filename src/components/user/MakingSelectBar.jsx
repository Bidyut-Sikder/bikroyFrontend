import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Select from "react-select";

import { useEffect } from "react";

import { useRef } from "react";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
const HomeComponents = () => {


  const navigate = useNavigate();

  const [selectedDistrictsOption, setSelectedDistrictsOption] = useState({
    value: "Chittagong",
    label: "Chittagong",
  });


//console.log(selectedDistrictsOption)




  const Districts = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ];

  return (
    <section>
      {/* Heading Search Bar */}
      <div className="bg-[#a855f7] py-3">
        <div className="container mx-auto">
          <div className="block md:mt-4 ">
            <div className="mx-auto md:flex justify-center gap-4">





              <span className="block mb-3 md:mb-0  md:w-[200px]">
                <span className="text-sm text-[#fff] pb-1 block">
                  Select Districts
                </span>



                <Select
                  className="select__color"
                  defaultValue={Districts[0]}
                   onChange={setSelectedDistrictsOption}
                  options={Districts}
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
                      border: "none",
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
                
              </span>








































              {/* <span className="block mb-3 md:mb-0 md:w-[200px]">
                <span className="text-sm text-[#fff] pb-1 block">
                  Select Sub-Districts
                </span>
                <Select
                  className="select__color"
                  defaultValue={SubDistricts[0]}
                  onChange={setSelectedSubDistrictsOption}
                  options={SubDistricts}
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
                      color: "#334155",
                      border: "none",
                      fontSize: "16px",
                      fontWeight: "500",
                    }),
                    control: (styles) => ({
                      ...styles,
                      backgroundColor: "#fff",
                      padding: "2px 0px",
                      margin: "0px 0px",
                      cursor: "pointer",
                      border: "1px solid #fff",
                      borderRadius: "5px",
                      ":focus-within": {
                        ...styles[":focus-within"],
                        border: "1px solid #7E22CE",
                        boxShadow: "none",
                      },
                    }),
                    menuList: (styles) => ({
                      ...styles,
                      margin: "0px",
                      padding: "0px",
                    }),
                    noOptionsMessage: (styles) => ({
                      ...styles,
                      background: "red",
                      color: "#fff",
                    }),
                  }}
                />
              </span>


              <span className="block mb-3 md:mb-0 md:w-[200px]">
                <span className="text-sm text-[#fff] pb-1 block">
                  Select Category
                </span>
                <Select
                  className="select__color"
                  defaultValue={categoryData[0]}
                  onChange={setSelectedCategoryOption}
                  options={categoryData}
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
                      color: "#334155",
                      border: "none",
                      fontSize: "16px",
                      fontWeight: "500",
                    }),
                    control: (styles) => ({
                      ...styles,
                      backgroundColor: "#fff",
                      padding: "2px 0px",
                      margin: "0px 0px",
                      cursor: "pointer",
                      border: "1px solid #fff",
                      borderRadius: "5px",
                      ":focus-within": {
                        ...styles[":focus-within"],
                        border: "1px solid #7E22CE",
                        boxShadow: "none",
                      },
                    }),
                    menuList: (styles) => ({
                      ...styles,
                      margin: "0px",
                      padding: "0px",
                    }),
                    noOptionsMessage: (styles) => ({
                      ...styles,
                      background: "red",
                      color: "#fff",
                    }),
                  }}
                />
              </span>


              <span className="flex items-end">
                <Link
                  onClick={filterSearchFun}
                  to={`/all-ads-filter/${selectedDistrictsOption?.value}/${subDistrictsOption?.value}/${selectedCategoryOption?.value}/1`}
                >
                  <button className="block py-[10px] px-4 rounded-lg bg-[#FCD34D] font-semibold text-slate-700 hover:bg-[#fbbf24]">
                    <FiSearch className="inline" /> Search By Tag
                  </button>
                </Link>
              </span> */}


            </div>

          </div>



          {/* <div className="block md:flex justify-center items-center w-full mt-4">
            <div className="block">
              <div className="pb-5">
                <label class="relative block  w-auto md:w-[600px] truncate ">
                  <input
                    class="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-full py-4 pl-9 pr-3 shadow-sm focus:outline-none sm:text-sm "
                    placeholder="Search for anything..."
                    type="text"
                    name="search"
                    ref={(input) => (searchRef = input)}
                  />
                  <span class="sr-only">Search</span>
                  <span
                    class="absolute inset-y-0 right-0 flex items-center px-4 cursor-pointer bg-[#fde047] rounded-r-full"
                    onClick={searchHandel}
                  >
                    <MdOutlineSearch className="inline text-2xl text-slate-600" />
                  </span>
                </label>
                <div className="flex justify-center mt-4">
                  <button className="md:hidden py-2 px-8 rounded-full bg-[#FCD34D] font-semibold text-slate-700 hover:bg-[#fbbf24]">
                    <MdLocationOn className="inline" /> Post Your AD
                  </button>
                </div>
              </div>
            </div>
          </div> */}


        </div>
      </div>
      {/* Category Search Bar */}
      {/* <div className="category__option">
        <div className="container mx-auto">
          <div className="header__text mt-10">
            <h3 className="text-lg font-semibold">Browse items by category</h3>
          </div>
          <div className="hidden md:grid category grid-cols-4 gap-2">
            {category.map((item, index) => (
              <div className="ml-10 mt-10" key={index}>
                {All_Ads_Data.length === 0 ? (
                  <Skeleton baseColor="#faf5ff" count={3} />
                ) : (
                  <Link
                    to={`/all-ads-filter-category/${item?.name}/1`}
                    className="flex "
                  >
                    <div className="img__file mr-3 ">
                      <img className="" src={item.img} alt="" />
                    </div>
                    <div className="text__file">
                      <h2 className="text-sm font-medium text-slate-500">
                        {item.name}
                      </h2>
                      <p className="text-xs font-medium text-slate-500">
                        {item.name === "Mobiles"
                          ? Mobiles.length
                          : item.name === "Electronics"
                          ? Electronics.length
                          : item.name === "Home & Living"
                          ? HomeLiving?.length
                          : item.name === "Vehicles"
                          ? Vehicles.length
                          : item.name === "Property"
                          ? Property.length
                          : item.name === "Pets & Animals"
                          ? PetsAnimals.length
                          : item.name === "Sports & Kids"
                          ? SportsKids.length
                          : item.name === "Women's Fashion & Beauty"
                          ? Women.length
                          : item.name === "Men's Fashion & Grooming"
                          ? Men.length
                          : item.name === "Business & Industry"
                          ? BusinessIndustry.length
                          : item.name === "Jobs"
                          ? Jobs.length
                          : item.name === "Essentials"
                          ? Essentials.length
                          : item.name === "Agriculture"
                          ? Agriculture.length
                          : item.name === "Overseas Jobs"
                          ? OverseasJobs.length
                          : item.name === "Services"
                          ? Services.length
                          : item.name === "Education"
                          ? Education.length
                          : null}{" "}
                        Ads
                      </p>
                    </div>
                  </Link>
                )}
              </div>
            ))}
          </div>
          <div className="md:hidden category gap-2">
            <Slider {...settings}>
              {category.map((item, index) => (
                <div className="ml-10 mt-10" key={index}>
                  <Link
                    to={`/all-ads-filter-category/${item?.name}/1`}
                    className="flex "
                  >
                    <div className="img__file mr-3 ">
                      <img className="" src={item.img} alt="" />
                    </div>
                    <div className="text__file">
                      <h2 className="text-sm font-medium text-slate-500">
                        {item.name}
                      </h2>
                      <p className="text-xs font-medium text-slate-500">
                        {item.name === "Mobiles"
                          ? Mobiles.length
                          : item.name === "Electronics"
                          ? Electronics.length
                          : item.name === "Home & Living"
                          ? HomeLiving?.length
                          : item.name === "Vehicles"
                          ? Vehicles.length
                          : item.name === "Property"
                          ? Property.length
                          : item.name === "Pets & Animals"
                          ? PetsAnimals.length
                          : item.name === "Sports & Kids"
                          ? SportsKids.length
                          : item.name === "Women's Fashion & Beauty"
                          ? Women.length
                          : item.name === "Men's Fashion & Grooming"
                          ? Men.length
                          : item.name === "Business & Industry"
                          ? BusinessIndustry.length
                          : item.name === "Jobs"
                          ? Jobs.length
                          : item.name === "Essentials"
                          ? Essentials.length
                          : item.name === "Agriculture"
                          ? Agriculture.length
                          : item.name === "Overseas Jobs"
                          ? OverseasJobs.length
                          : item.name === "Services"
                          ? Services.length
                          : item.name === "Education"
                          ? Education.length
                          : null}{" "}
                        Ads
                      </p>
                    </div>
                  </Link>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div> */}
      {/* Card Option */}


      {/* Contact Information */}


      {/* Quick Responce */}

      {/* Quick links */}

      {/* About Section */}




    </section>
  );
};

export default HomeComponents;
