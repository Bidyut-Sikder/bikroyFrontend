import axios from "axios";
import { create } from "zustand";
import { getToken } from "../utility/utlity";

// const BASEURL = 'http://localhost:5000'
const BASEURL = import.meta.env.VITE_API_URL; //'https://bikroybackend.onrender.com'

const productStore = create((set) => ({
  ProductBrandList: null,
  ProductCategoryList: null,
  ProductSliderList: null,
  ProductList: [],
  ProductListByCategory: null,
  ProductListByRemark: null,
  ProductListBySmilier: null,
  ProductListByKeyword: null,
  ProductDetails: null,
  ProductReviewList: null,

  categoryName: "All",
  location: "All Bangladesh",

  isLoading: false,

  //calling apis from backend

  ProductSearchByCategory: async (products) => {
    set({ ProductList: products });
  },
  ProductCategoryListRequest: async () => {
    let res = await axios.get(`${BASEURL}/api/v1/ProductCategoryList`);

    if (res["data"].status == "success") {
      let totalCategories = res["data"]["data"].map((item, i) => ({
        value: item._id,
        label: item.categoryName,
        categoryImg: item.categoryImg,
      }));
      set({ ProductCategoryList: totalCategories });
    }
  },
  resetProdctDetails: async (categoryname, location) => {
    set({
      ProductDetails: null,
      categoryName: categoryname,
      location: location,
    });
  },

  ///////////////////////

  ProductListByKeywordRequest: async (Keyword) => {
    set({ isLoading: true });
    let res = await axios.get(
      `${BASEURL}/api/v1/ProductListByKeyword/${Keyword}`
    );
    if (res["data"].status == "success") {
      set({ isLoading: false });
      set({ ProductList: res["data"]["data"] });
    }
  },

  ProductsRequestBySort: async (productsList) => {
    set({ ProductList: productsList });
  },

  ProductListByCategoryRequest: async (CategoryID) => {
    set({ isLoading: true });
    let res = await axios.get(
      `${BASEURL}/api/v1/ProductListByCategory/${CategoryID}`
    );

    if (res["data"].status == "success") {
      set({ isLoading: false });
      set({ ProductList: res["data"]["data"] });
    } else {
      set({ isLoading: false });
      set({ ProductList: [] });
    }
  },

  ProductDetailsRequest: async (ProductID) => {
    set({ isLoading: true });
    let res = await axios.get(`${BASEURL}/api/v1/ProductDetails/${ProductID}`);

    if (res["data"].status == "success") {
      set({ isLoading: false });
      set({ ProductDetails: res["data"]["data"][0] });
    } else {
      set({ isLoading: false });
      set({ ProductDetails: null });
    }
  },

  AllProductsRequest: async () => {
    set({ isLoading: true });
    let res = await axios.get(`${BASEURL}/api/v1/AllProducts`);
    if (res["data"].status == "success") {
      set({ isLoading: false });
      set({ ProductList: res["data"]["data"] });
    } else {
      set({ isLoading: false });
      set({ ProductList: [] });
    }
  },

  ProductsRequestByTag: async (district, upozila, categoryId) => {
    let res = await axios.get(
      `${BASEURL}/api/v1/ProductListByTag/${district}/${upozila}/${categoryId}`
    );

    if (res["data"].status == "success") {
      set({ ProductList: res["data"]["data"] });
    }
  },

  //////////////////////data searching
  SearchKeyWord: "",
  SetSearchKeyWord: async (keyword) => {
    set({ SearchKeyWord: keyword });
  },
}));

export default productStore;
