import { create } from 'zustand'
import axios from "axios";
import { getEmail, getToken, setEmail } from "../utility/utlity";
import Cookies from 'js-cookie'

const UserStore = create((set) => ({





    productData: {
        "title": "",
        "des": "",
        "price": "",
        "edition": "",
        "vendorPhone": "",
        "vendorName": "",
        "model": "",
        "district": "",
        "subDistrict": "",
        "condition": "",
        "authenticity": "",
        "features": "",
        "negotiable": false,
        "userID": '',
        "categoryID": '',
        "brandID": '',
        "brand": ''
    },




    onChangeProductData: (key, value) => {
        set((previousData) => ({
            productData: {
                ...previousData.productData,
                [key]: value
            }
        }
        ))
    },

    userSingleproductDetail: null,

    userSingleproductDetailRequest: async (productID) => {

        const res = await axios.get(`/api/v1/UserSingleProductDetail/${productID}`)
        //console.log(res['data']['data'][0])
        if (res['data']['data']) {
            set({ productData: res['data']['data'][0] })
            // set({ userSingleproductDetail: res['data']['data'][0] })
            // set({ profileData: res['data']['data'][0] })

        }

    },






    userProductsUpdateRequest: async (productID, reqBody) => {

        const res = await axios.post(`/api/v1/UserProductUpdate/${productID}`, reqBody)
        // console.log(res['data']['status']==='success')

        if (res['data']['status'] === 'success') {
            return true
            // set({ userProducts: res['data']['data'] })
            // set({ profileData: res['data']['data'][0] })

        }

    },










    profileData: {
        cus_add: '',
        cus_city: '',
        cus_country: '',
        cus_fax: '',
        cus_name: '',
        cus_phone: '',
        cus_postcode: '',
        cus_state: '',
        ship_add: '',
        ship_city: '',
        ship_country: '',
        ship_name: '',
        ship_phone: '',
        ship_postcode: '',
        ship_state: '',
    },





    userLoginRequest: async (email, password) => {

        set({ isFormSubmit: true })
        // const email = getEmail()


        let res = await axios.get(`/api/v1/UserLogin/${email}/${password}`)

        // console.log(res)
        set({ isFormSubmit: false })
        return res.data['status'] === 'success'
    },





    onChangeProfileData: (key, value) => {
        set((previousData) => ({
            profileData: {
                ...previousData.profileData,
                [key]: value
            }
        }
        ))
    },



    userProducts: null,

    userProductsRequest: async () => {

        const res = await axios.get(`/api/v1/UserProducts`)
        //console.log(res['data']['data'])

        if (res['data']['data']) {
            set({ userProducts: res['data']['data'] })
            // set({ profileData: res['data']['data'][0] })

        }

    },



    profileDetails: {

        "email": "",
        "firstName": "",
        "lastName": "",
        "phone": "",
        "password": "",
        "otp": "",

        "age": "",
        "role": "",
        "image": ""
    },


    profileOnchangeHandler: async (key, value) => {

        set((previousData) => ({
            profileDetails: {
                ...previousData.profileDetails,
                [key]: value
            }
        }
        ))

    },
    // [comfirmPassword, setComfirmPassword] = useState({ confirm: '' })

    profileDetailsRequest: async () => {

        const res = await axios.get(`/api/v1/ReadUserProfile`)

        if (res['data']['data']) {
            set({ profileDetails: res['data']['data'] })
            // set({ profileData: res['data']['data'][0] })

        }

    },
    profileUpdateRequest: async (postBody) => {
        const res = await axios.post(`/api/v1/UpdateUserProfile`, postBody, { headers: { 'Content-Type': 'multipart/form-data' } })
        // set({ profileDetails: null })
        if (res['data']['status'] === 'success') {
            return true
        }


    },

    // checking user Login 

    isLogin: () => {
        return !!Cookies.get('token')
        // if (Cookies.get('token')) {
        //     return true
        // } else {
        //     return false
        // }
    },


    userLogoutRequest: async () => {
        const token = getToken()
        let res = await axios.get(`/api/v1/UserLogout`, { headers: { token } })

        set({ profileDetails: null })
        //profileDetails
        return res['status'] === 'success'
    },





    //form controlling 
    LoginFormData: { email: "" },

    LoginOnChange: (key, value) => {

        set((state) => ({
            LoginFormData: {
                ...state.LoginFormData,
                [key]: value
            }
        }))

    },

    verifyOTP: { otp: "" },

    OTPOnChange: (key, value) => {

        set((state) => ({
            verifyOTP: {
                ...state.verifyOTP,
                [key]: value
            }
        }))

    },


    ///form submition 
    isFormSubmit: false,


    UserOTPRequest: async (email) => {
        set({ isFormSubmit: true })
        let res = await axios.get(`/api/v1/UserOTP/${email}`)

        setEmail(email);
        set({ isFormSubmit: false })

        return res.data['status'] === 'success'
    },

    VerifyLoginRequest: async (otp) => {

        set({ isFormSubmit: true })
        const email = getEmail()


        let res = await axios.get(`/api/v1/VerifyOTP/${email}/${parseInt(otp)}`)

        console.log(res)
        set({ isFormSubmit: false })
        return res.data['status'] === 'success'
    }

}))













export default UserStore;





