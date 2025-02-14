import React from "react";
import productStore from "../../store/productStore";
import { Link } from "react-router-dom";
import HomeSkeleton from "../../skeleton/HomeSkeleton";
import CartSkeleton from "../../skeleton/CartSkeleton";
import LegalContentSkeleton from "../../skeleton/LegalContentSkeleton";

const ShowCategories = () => {
  const { ProductCategoryListRequest, ProductCategoryList } = productStore();

  return (
    <div className="category__option">
      <div className="container mx-auto">
        <div className="header__text mt-10">
          <h3 className="text-lg  max-[768px]:hidden font-semibold">
            Browse items by category
          </h3>
        </div>
        <div className="hidden md:grid category grid-cols-4 gap-2">
          {ProductCategoryList ? (
            ProductCategoryList.map((category, i) => {
              return (
                <div key={i} className="ml-10 mt-10">
                  <Link to={`/category/${category.value}`} className="flex ">
                    <div className="img__file mr-3 ">
                      <img
                        style={{ width: "50px", height: "50px" }}
                        className=""
                        src={category.categoryImg}
                        alt=""
                      />
                    </div>
                    <div className="text__file">
                      <h2 className="text-sm font-medium text-slate-500">
                        {category.label}
                      </h2>
                      {/* <p className="text-xs font-medium text-slate-500">16 Ads</p> */}
                    </div>
                  </Link>
                </div>
              );
            })
          ) : (
            <>
              {Array.from({ length: 16 }).map((_, i) => (
                <LegalContentSkeleton key={i} />
              ))}
            </>
          )}

        </div>
      </div>
    </div>
  );
};

export default ShowCategories;
