import { create } from 'zustand'
import axios from "axios";
import { getEmail, getToken, setCookie, setEmail } from "../utility/utlity";
import Cookies from 'js-cookie'


const BASEURL = 'https://bikroybackend.onrender.com'
// const BASEURL = 'http://localhost:5000'
const token = Cookies.get("token")
console.log(token)
const AdminStore = create((set) => ({




    isFormSubmit: false,

    adminLoginRequest: async (email, password) => {

        set({ isFormSubmit: true })
        // const email = getEmail()

        let res = await axios.get(`${BASEURL}/api/v1/AdminLogin/${email}/${password}`)
        setCookie('token', res.data['token'], 7);

        set({ isFormSubmit: false })
        return res.data['status'] === 'success'
    },






    adminDetails: null,

    adminDetailsRequest: async () => {

        const res = await axios.get(`${BASEURL}/api/v1/ReadAdmin`, { headers: { token: token } })
        //console.log(res)
        if (res['data']['data']) {
            set({ adminDetails: res['data']['data'] })
            // set({ profileData: res['data']['data'][0] })

        }

    },

    adminProducts: null,
    adminProductsRequest: async () => {

        const res = await axios.get(`${BASEURL}/api/v1/AdminProduct`, { headers: { token: token } })
        // console.log(res['data']['data'])
        if (res['data']['data']) {
            set({ adminProducts: res['data']['data'] })
            // set({ profileData: res['data']['data'][0] })

        }

    },
    adminProductUpdateRequest: async (id, reqData) => {

        const res = await axios.post(`${BASEURL}/api/v1/AdminProductUpdate/${id}`, reqData, { headers: { token: token } })

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

        const res = await axios.get(`${BASEURL}/api/v1/AdminLogout`, { headers: { token: token } })

        if (res['data']['status'] === 'success') {

            Cookies.remove("token")

            return true

        }

    },

    //AdminLogout




}))













export default AdminStore;





