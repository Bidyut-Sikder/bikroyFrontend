import { create } from "zustand";
import axios from "axios";
import { getEmail, getToken, setCookie, setEmail } from "../utility/utlity";
import Cookies from "js-cookie";

const BASEURL = import.meta.env.VITE_API_URL; // 'https://bikroybackend.onrender.com'
// const BASEURL = 'http://localhost:5000'

const token = Cookies.get("token");

const UserStore = create((set) => ({
  productData: {
    title: "",
    des: "",
    price: "",
    edition: "",
    vendorPhone: "",
    vendorName: "",
    model: "",
    district: "",
    subDistrict: "",
    condition: "",
    authenticity: "",
    features: "",
    negotiable: false,
    userID: "",
    categoryID: "",
    brandID: "",
    brand: "",
  },

  onChangeProductData: (key, value) => {
    set((previousData) => ({
      productData: {
        ...previousData.productData,
        [key]: value,
      },
    }));
  },

  userSingleproductDetail: null,

  userSingleproductDetailRequest: async (productID) => {
    const res = await axios.get(
      `${BASEURL}/api/v1/UserSingleProductDetail/${productID}`,
      { headers: { token: token } }
    );
    //console.log(res['data']['data'][0])
    if (res["data"]["data"]) {
      set({ productData: res["data"]["data"][0] });
      // set({ userSingleproductDetail: res['data']['data'][0] })
      // set({ profileData: res['data']['data'][0] })
    }
  },

  userProductsUpdateRequest: async (productID, reqBody) => {
    const res = await axios.post(
      `${BASEURL}/api/v1/UserProductUpdate/${productID}`,
      reqBody,
      { headers: { token: token } }
    );
    // console.log(res['data']['status']==='success')

    if (res["data"]["status"] === "success") {
      return true;
      // set({ userProducts: res['data']['data'] })
      // set({ profileData: res['data']['data'][0] })
    }
  },

  ProductCreateRequest: async (formData) => {
    //const token = Cookies.get("token")

    set({ isLoading: true });
    const res = await axios.post(`${BASEURL}/api/v1/ProductCreate/`, formData, {
      headers: { token: token },
    });
    // const res = await axios.post('/api/v1/ProductCreate/', formData, { headers: headers })
    set({ isLoading: false });

    return res["data"]["status"] === "success";
  },

  ProductDeleteRequest: async (productID) => {
    let res = await axios.get(`${BASEURL}/api/v1/ProductDelete/${productID}`, {
      headers: { token: token },
    });

    if (res["data"].status == "success") {
      set({ ProductList: res["data"]["data"] });
    }
  },

  profileData: {
    cus_add: "",
    cus_city: "",
    cus_country: "",
    cus_fax: "",
    cus_name: "",
    cus_phone: "",
    cus_postcode: "",
    cus_state: "",
    ship_add: "",
    ship_city: "",
    ship_country: "",
    ship_name: "",
    ship_phone: "",
    ship_postcode: "",
    ship_state: "",
  },

  userLoginRequest: async (email, password) => {
    set({ isFormSubmit: true });
    // const email = getEmail()

    //  let res = await axios.get(`https://bikroybackend.onrender.com/api/v1/UserLogin/bidyutsikder420@gmail.com/1234`)
    // let res = await axios.get(`https://bikroybackend.onrender.com/api/v1/UserLogin/${email}/${password}`)
    let res = await axios.get(
      `${BASEURL}/api/v1/UserLogin/${email}/${password}`,
      { headers: { token: token } }
    );

    // console.log(res.data['token'])

    setCookie("token", res.data["token"], 7);

    // console.log(res)

    set({ isFormSubmit: false });
    return res.data["status"] === "success";
  },

  userSignUpRequest: async (reqBody) => {
    set({ isFormSubmit: true });

    let res = await axios.post(`${BASEURL}/api/v1/SignUp/`, reqBody);

    // console.log(res.data['token'])

    setCookie("token", res.data["token"], 7);

    // console.log(res)

    set({ isFormSubmit: false });
    return res.data["status"] === "success";
  },

  onChangeProfileData: (key, value) => {
    set((previousData) => ({
      profileData: {
        ...previousData.profileData,
        [key]: value,
      },
    }));
  },

  userProducts: null,

  userProductsRequest: async () => {
    const res = await axios.get(`${BASEURL}/api/v1/UserProducts`, {
      headers: { token: token },
    });
    //console.log(res['data']['data'])

    if (res["data"]["data"]) {
      set({ userProducts: res["data"]["data"] });
      // set({ profileData: res['data']['data'][0] })
    }
  },

  profileDetails: {
    email: "",
    firstName: "",
    lastName: "",
    phone: "",
    password: "",
    otp: "",
    age: "",
    role: "",
    image: "",
  },

  profileOnchangeHandler: async (key, value) => {
    set((previousData) => ({
      profileDetails: {
        ...previousData.profileDetails,
        [key]: value,
      },
    }));
  },
  // [comfirmPassword, setComfirmPassword] = useState({ confirm: '' })

  profileDetailsRequest: async () => {
    const res = await axios.get(`${BASEURL}/api/v1/ReadUserProfile`, {
      headers: { token: token },
    });

    if (res["data"]["data"]) {
      set({ profileDetails: res["data"]["data"] });
      // set({ profileData: res['data']['data'][0] })
    }
  },
  profileUpdateRequest: async (postBody) => {
    const res = await axios.post(
      `${BASEURL}/api/v1/UpdateUserProfile`,
      postBody,
      { headers: { "Content-Type": "multipart/form-data", token: token } }
    );
    // set({ profileDetails: null })
    if (res["data"]["status"] === "success") {
      return true;
    }
  },

  // checking user Login

  isLogin: () => {
    return !!Cookies.get("token");
    // if (Cookies.get('token')) {
    //     return true
    // } else {
    //     return false
    // }
  },

  userLogoutRequest: async () => {
    // const token = Cookies.get("token")

    let res = await axios.get(`${BASEURL}/api/v1/UserLogout`, {
      headers: { token: token },
    });

    //  console.log(res['data']['status'])
    if (res["data"]["status"] === "success") {
      Cookies.remove("token");
    }
    set({ profileDetails: null });
    //profileDetails
    return res["status"] === "success";
  },

  //form controlling
  LoginFormData: { email: "" },

  LoginOnChange: (key, value) => {
    set((state) => ({
      LoginFormData: {
        ...state.LoginFormData,
        [key]: value,
      },
    }));
  },

  verifyOTP: { otp: "" },

  OTPOnChange: (key, value) => {
    set((state) => ({
      verifyOTP: {
        ...state.verifyOTP,
        [key]: value,
      },
    }));
  },

  ///form submition
  isFormSubmit: false,

  UserOTPRequest: async (email) => {
    set({ isFormSubmit: true });
    let res = await axios.get(`/api/v1/UserOTP/${email}`);

    setEmail(email);
    set({ isFormSubmit: false });

    return res.data["status"] === "success";
  },

  VerifyLoginRequest: async (otp) => {
    set({ isFormSubmit: true });
    const email = getEmail();

    let res = await axios.get(`/api/v1/VerifyOTP/${email}/${parseInt(otp)}`);

    console.log(res);
    set({ isFormSubmit: false });
    return res.data["status"] === "success";
  },
}));

export default UserStore;
