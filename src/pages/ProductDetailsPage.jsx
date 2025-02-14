import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import productStore from "../store/productStore";
import Layout from "../components/layout/Layout";
import SingleProduct from "../components/products/SingleProduct";
import Breadcrumb from "../components/products/Breadcrumb";
import Admin from "../components/admin/Admin";
import SideCategories from "../components/products/SideCategories";
import ProductSearch from "../components/products/ProductSearch";

const ProductDetailsPage = () => {
  const { productID } = useParams();

  const { ProductDetails, ProductDetailsRequest, ProductCategoryListRequest } =
    productStore();
  useEffect(() => {
    (async () => {
      await ProductDetailsRequest(productID);

      await ProductCategoryListRequest();
    })();
  }, []);

  return (
    <Layout>
      <div className="bg-[#f3f4f6] min-h-screen block pt-8">
        <div className="container  mx-auto mb-20">
          <div className="bg-[#fff] rounded-md pb-10">
            <Breadcrumb />
            <div className="allAds px-5 py-2">
              <ProductSearch />
              <hr />

              <div className="adsShow mt-4">
                <div className="main__show__body md:flex gap-6">
                  <div className="leftSide md:w-4/5">
                    <div className="md:flex gap-10">
                      <Admin />

                      {ProductDetails === null ? (
                        <div className="w-full">
                          <div className="animate-pulse flex space-x-4">
                            <div className="flex-1 space-y-4 py-1">
                              <div className="h-4 bg-gray-400 mb-2 rounded w-3/4"></div>
                              <div className="space-y-2">
                                <div className="h-4 bg-gray-400 rounded"></div>
                                <div className="h-4 bg-gray-400 rounded w-5/6"></div>
                                <div className="h-4 bg-gray-400 rounded w-5/6"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <SingleProduct />
                      )}
                    </div>
                  </div>

                  {ProductDetails === null ? (
                    <SideCategories />
                  ) : (
                    <SideCategories user={ProductDetails.user} />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetailsPage;
