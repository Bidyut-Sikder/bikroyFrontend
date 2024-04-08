
import axios from 'axios'
import { create } from 'zustand'
import { getToken } from '../utility/utlity'


const BASEURL='https://bikroybackend.onrender.com'


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

    categoryName: 'All',
    location: 'All Bangladesh',

    isLoading: false,

    //calling apis from backend 

    ProductSearchByCategory: async (products) => {
        set({ ProductList: products })

    },
    ProductCategoryListRequest: async () => {
        set({ isLoading: true })
        let res = await axios.get(`${BASEURL}/api/v1/ProductCategoryList`)
        
        if (res['data'].status == 'success') {

            let totalCategories = res['data']['data'].map((item, i) => ({
                value: item._id,
                label: item.categoryName,
                categoryImg:item.categoryImg
            }))

          //  console.log(totalCategories)
             set({ ProductCategoryList: totalCategories })

            // set({ ProductCategoryList: res['data']['data'] })
            // set({ isLoading: false })
        }
      
    },
    resetProdctDetails: async (categoryname, location) => {


        set({ ProductDetails: null, categoryName: categoryname, location: location })

    },

    ProductCreateRequest: async (formData) => {
        const headers = {
            token: getToken()
        }
        set({ isLoading: true })
        const res = await axios.post(`${BASEURL}/api/v1/ProductCreate/`, formData)
        // const res = await axios.post('/api/v1/ProductCreate/', formData, { headers: headers })
        set({ isLoading: false })

        return res['data']['status']==='success'
    },

    ///////////////////////


    ProductListByKeywordRequest: async (Keyword) => {
        let res = await axios.get(`${BASEURL}/api/v1/ProductListByKeyword/${Keyword}`)
        if (res['data'].status == 'success') {
            set({ ProductList: res['data']['data'] })
        }
    },




    ProductDeleteRequest: async (productID) => {
        let res = await axios.get(`${BASEURL}/api/v1/ProductDelete/${productID}`)

        if (res['data'].status == 'success') {
            set({ ProductList: res['data']['data'] })
        }
    },



    //
    //









    ProductsRequestBySort: async (productsList) => {
        // let res = await axios.get(`/api/v1/ProductListByTag/${district}/${upozila}/${categoryId}`)

        //console.log(productStore)

        set({ ProductList: productsList })

        // if (res['data'].status == 'success') {
        //     set({ ProductList: res['data']['data'] })
        // }
    },















    ProductListByCategoryRequest: async (CategoryID) => {
        let res = await axios.get(`${BASEURL}/api/v1/ProductListByCategory/${CategoryID}`)

          // console.log(res['data']['data'])
        if (res['data'].status == 'success') {
            set({ ProductList: res['data']['data'] })
        }
    },







    ProductDetailsRequest: async (ProductID) => {
        let res = await axios.get(`${BASEURL}/api/v1/ProductDetails/${ProductID}`)
        //  console.log(res)
        if (res['data'].status == 'success') {
            set({ ProductDetails: res['data']['data'][0] })
        }
    },

    AllProductsRequest: async () => {
        let res = await axios.get(`${BASEURL}/api/v1/AllProducts`)
        if (res['data'].status == 'success') {

            set({ ProductList: res['data']['data'] })
        }
    },

    ProductsRequestByTag: async (district, upozila, categoryId) => {
        let res = await axios.get(`${BASEURL}/api/v1/ProductListByTag/${district}/${upozila}/${categoryId}`)

        console.log(res)
        if (res['data'].status == 'success') {
            set({ ProductList: res['data']['data'] })
        }
    },



    //////////////////////data searching 
    SearchKeyWord: "",
    SetSearchKeyWord: async (keyword) => {
        set({ SearchKeyWord: keyword })
    },




}))





export default productStore;








































