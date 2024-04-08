import { create } from 'zustand'
import axios from "axios";
import { getEmail, getToken, setEmail } from "../utility/utlity";
import Cookies from 'js-cookie'


const BASEURL='https://bikroybackend.onrender.com'

const AdminStore = create((set) => ({




    isFormSubmit: false,

    adminLoginRequest: async (email, password) => {

        set({ isFormSubmit: true })
        // const email = getEmail()

        let res = await axios.get(`${BASEURL}/api/v1/AdminLogin/${email}/${password}`)

        set({ isFormSubmit: false })
        return res.data['status'] === 'success'
    },






    adminDetails: null,

    adminDetailsRequest: async () => {

        const res = await axios.get(`${BASEURL}/api/v1/ReadAdmin`)
        //console.log(res)
        if (res['data']['data']) {
            set({ adminDetails: res['data']['data'] })
            // set({ profileData: res['data']['data'][0] })

        }

    },

    adminProducts: null,
    adminProductsRequest: async () => {

        const res = await axios.get(`${BASEURL}/api/v1/AdminProduct`)
        // console.log(res['data']['data'])
        if (res['data']['data']) {
            set({ adminProducts: res['data']['data'] })
            // set({ profileData: res['data']['data'][0] })

        }

    },
    adminProductUpdateRequest: async (id, reqData) => {

        const res = await axios.post(`${BASEURL}/api/v1/AdminProductUpdate/${id}`, reqData)

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

    adminAdminLogoutRequest: async () => {

        const res = await axios.get(`${BASEURL}/api/v1/AdminLogout`)

        if (res['data']['status'] === 'success') {
            return true

        }

    },

//AdminLogout




}))













export default AdminStore;





