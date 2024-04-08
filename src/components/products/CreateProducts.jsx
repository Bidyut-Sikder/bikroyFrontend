// import React, { useEffect, useState } from 'react';
// import ReactQuill from 'react-quill';
// import Select from 'react-select';
// import "react-quill/dist/quill.snow.css";

// import productStore from '../../store/productStore';
// import UserStore from '../../store/userStore';
// import { useParams } from 'react-router-dom';

// const CreateProducts = () => {
//     const { productID } = useParams()
//     const { ProductCreateRequest, ProductCategoryList, ProductCategoryListRequest } = productStore()

//     const { productData,onChangeProductData,userSingleproductDetailRequest, userSingleproductDetail } = UserStore()

//     const [Description, setDescription] = useState("");
//     const [categories, setCategories] = useState([]);

//     const [imgArr, setImgArr] = useState([])

//     const [category, setCategory] = useState({
//         value: "Select...",
//         label: "",
//     });


//     const [form, setFormData] = useState({

//         "title": "fdfd",
//         "des": "fdas",
//         "price": "fa",
//         "edition": "af",
//         "vendorPhone": "df",
//         "vendorName": "df",
//         "model": "d",
//         "district": "df",
//         "subDistrict": "ds",
//         "condition": "da",
//         "authenticity": "ds",
//         "features": "d",
//         "negotiable": false,
//         "userID": '65f3d94e5c50b0251b4bfdcc',
//         "categoryID": '6610169fd21ca0974dde8d7f',
//         "brandID": '',
//         "brand": ''
//     })



//     const convertToBase64 = async (e) => {

//         const files = e.target.files

//         if (files.length === 0) {
//             alert("Please select at least one image file.");
//             return;
//         }
//         if (files.length > 5) {
//             alert("you cannot select more than image file.");
//             return;
//         }
//         const base64Array = [];

//         for (let i = 0; i < files.length; i++) {
//             const file = files[i];
//             const reader = new FileReader();

//             reader.onload = function (event) {
//                 const base64 = event.target.result;
//                 base64Array.push(base64);

//                 if (base64Array.length === files.length) {

//                     setImgArr(base64Array)
//                 }
//             };

//             reader.readAsDataURL(file);
//         }

//     }

//   console.log(productData)

//     const submitHandler = async () => {

//         const formData = new FormData()

//         formData.append('file', imgArr[0])
//         formData.append('file', imgArr[1])
//         formData.append('file', imgArr[2])
//         formData.append('file', imgArr[3])
//         formData.append('file', imgArr[4])

//         // formData.append("title", form.title)

//         // formData.append("price", form.price)
//         // formData.append("edition", form.edition)
//         // formData.append("vendorPhone", form.vendorPhone)
//         // formData.append("vendorName", form.vendorName)
//         // formData.append("model", form.model)
//         // formData.append("subDistrict", form.subDistrict)
//         // formData.append("district", form.district)
//         // formData.append("condition", form.condition)
//         // formData.append("authenticity", form.authenticity)
//         // formData.append("features", form.features)
//         // formData.append("negotiable", form.negotiable)


//         // formData.append("categoryID", category.value)
//         // formData.append("des", Description)
//         // formData.append("brand", form.brand)
//         formData.append("title", productData.title)

//         formData.append("price", productData.price)
//         formData.append("edition", productData.edition)
//         formData.append("vendorPhone", productData.vendorPhone)
//         formData.append("vendorName", productData.vendorName)
//         formData.append("model", productData.model)
//         formData.append("subDistrict", productData.subDistrict)
//         formData.append("district", productData.district)
//         formData.append("condition", productData.condition)
//         formData.append("authenticity", productData.authenticity)
//         formData.append("features", productData.features)
//         formData.append("negotiable", productData.negotiable)


//         formData.append("categoryID", category.value)
//         formData.append("des", Description)
//         formData.append("brand", productData.brand)



//       //  const res = await ProductCreateRequest(formData)
//         const res = await ProductCreateRequest(formData)


//         console.log(productData)



//     }


//     useEffect(() => {
//         (async () => {
//             await userSingleproductDetailRequest(productID)

//         })()

//         if (ProductCategoryList) {

//             let totalCategories = ProductCategoryList.map((item, i) => ({
//                 value: item._id,
//                 label: item.categoryName
//             }))

//             setCategory(totalCategories)
//             setCategories(totalCategories)
//         }



//     }, [ProductCategoryList])

//     if (productData === null) {
//         return <h1>Loading....</h1>
//     }
//    // setFormData(userSingleproductDetail[0])
//    //console.log(userSingleproductDetail[0])
//    // console.log(form)



//     const onChangeHandler = (key, value) => {
//         setFormData((pre) => ({
//             ...pre,
//             [key]: value
//         }))
//     }



//     return (

//         <div className="profileBody md:w-10/12 mt-10 md:border-l md:pl-8">
//             <h2 className="text-slate-500 text-xl font-semibold border-b pb-4">Bidyut Sikder</h2>
//             <div className="react-tabs__tab-panel" role="tabpanel" id="panel:r0:0" aria-labelledby="tab:r0:0"></div>
//             <div className="react-tabs__tab-panel" role="tabpanel" id="panel:r0:1" aria-labelledby="tab:r0:1"></div>
//             <div className="react-tabs__tab-panel react-tabs__tab-panel--selected" role="tabpanel" id="panel:r0:2"
//                 aria-labelledby="tab:r0:2">

//                 <div className="body__option my-6">
//                     <h2 className="text-slate-700 text-xl font-semibold mb-2">Create New Ads</h2>

//                     <div>

//                         <div className="flex items-center justify-center mt-5">
//                             <div className="mx-auto w-full">

//                                 <div>
//                                     <div className="mb-3"><label htmlFor="name" className="mb-1 block text-sm  text-slate-500">Product
//                                         Name</label>
//                                         <input type="text" name="name" id="name"
//                                         value={productData.title}
//                                             className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-6 text-base text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"

//                                             onChange={(e) => onChangeProductData('title', e.target.value)} required />
//                                     </div>



//                                     <div className="md:grid grid-cols-2 gap-5">
//                                         <div className="mb-3"><label htmlFor="name"
//                                             className="mb-1 block text-sm  text-slate-500">Price</label><input type="number"
//                                                 name="name" id="name"
//                                                 onChange={(e) => onChangeProductData('price', e.target.value)}
//                                                 className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-6 text-base  text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
//                                         </div>
//                                         <div className="mb-3"><label htmlFor="name"
//                                             className="mb-1 block text-sm  text-slate-500">Edition</label><input type="text"
//                                                 name="name" id="name"
//                                                 onChange={(e) => onChangeProductData('edition', e.target.value)}
//                                                 className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-6 text-base  text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
//                                         </div>
//                                     </div>

//                                     <div className="md:grid grid-cols-3 gap-5">



//                                         <div className="mb-3"><label htmlFor="name"
//                                             className="mb-1 block text-sm  text-slate-500">District</label>
//                                             <div className="select__color css-b62m3t-container"><span
//                                                 id="react-select-3-live-region" className="css-7pg0cj-a11yText"></span><span
//                                                     aria-live="polite" aria-atomic="false" aria-relevant="additions text"
//                                                     className="css-7pg0cj-a11yText"></span>
//                                                 <div className=" css-h4xyy0-control">
//                                                     <div className=" css-1d8n9bt">

//                                                         <input type="text"
//                                                             onChange={(e) => onChangeProductData('district', e.target.value)}
//                                                             className='w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-6 text-base  text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md' />

//                                                     </div>
//                                                     <div className=" css-1wy0on6"><span
//                                                         className=" css-1okebmr-indicatorSeparator"></span>

//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         </div>



//                                         <div className="mb-3"><label htmlFor="name"
//                                             className="mb-1 block text-sm  text-slate-500">Upozila</label>
//                                             <div className="select__color css-b62m3t-container"><span
//                                                 id="react-select-3-live-region" className="css-7pg0cj-a11yText"></span><span
//                                                     aria-live="polite" aria-atomic="false" aria-relevant="additions text"
//                                                     className="css-7pg0cj-a11yText"></span>
//                                                 <div className=" css-h4xyy0-control">
//                                                     <div className=" css-1d8n9bt">

//                                                         <input type="text"
//                                                             onChange={(e) => onChangeProductData('subDistrict', e.target.value)}
//                                                             className='w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-6 text-base  text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md' />

//                                                     </div>
//                                                     <div className=" css-1wy0on6"><span
//                                                         className=" css-1okebmr-indicatorSeparator"></span>

//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         </div>





//                                         <div className="mb-3"><label htmlFor="name" className="mb-1 block text-sm  text-slate-500">Product
//                                             Category</label>
//                                             <div className="select__color css-b62m3t-container"><span
//                                                 id="react-select-4-live-region" className="css-7pg0cj-a11yText"></span><span
//                                                     aria-live="polite" aria-atomic="false" aria-relevant="additions text"
//                                                     className="css-7pg0cj-a11yText"></span>
//                                                 <div className=" css-h4xyy0-control">
//                                                     <div className=" css-1d8n9bt">


//                                                         <Select
//                                                             className="rounded-md select__color border border-[#e0e0e0]"
//                                                             defaultValue={category[0]}
//                                                             onChange={setCategory}
//                                                             options={categories}
//                                                             styles={{
//                                                                 option: (provided, state) => ({
//                                                                     ...provided,
//                                                                     borderBottom: "1px solid #ddd",
//                                                                     color: state.isSelected ? "#fff" : "#666",
//                                                                     background: state.isSelected ? "#A855F7" : "#fff",
//                                                                     cursor: "pointer",
//                                                                     margin: "0px",
//                                                                     fontSize: "14px",
//                                                                     ":active": {
//                                                                         backgroundColor: "#fff",
//                                                                         cursor: "pointer",
//                                                                     },
//                                                                 }),
//                                                                 singleValue: (provided, state) => ({
//                                                                     ...provided,

//                                                                     color: "#334155 !important",
//                                                                     border: "1px",
//                                                                     fontSize: "16px",
//                                                                     fontWeight: "500",
//                                                                     ":focus-within": {
//                                                                         ...provided[":focus-within"],
//                                                                         border: "1px solid #7E22CE",
//                                                                         boxShadow: "none",
//                                                                         color: "#fff",
//                                                                     },
//                                                                 }),
//                                                                 control: (styles) => ({
//                                                                     ...styles,
//                                                                     backgroundColor: "#fff",
//                                                                     padding: "2px 0px",
//                                                                     margin: "0px 0px",
//                                                                     cursor: "pointer",
//                                                                     color: "#fff",
//                                                                     border: "1px solid #fff",
//                                                                     borderRadius: "5px",
//                                                                     ":focus-within": {
//                                                                         ...styles[":focus-within"],
//                                                                         border: "1px solid #7E22CE",
//                                                                         boxShadow: "none",
//                                                                         color: "#fff",
//                                                                     },
//                                                                 }),
//                                                                 menuList: (styles) => ({
//                                                                     ...styles,
//                                                                     margin: "0px",
//                                                                     padding: "0px",
//                                                                     color: "#fff",
//                                                                 }),
//                                                                 noOptionsMessage: (styles) => ({
//                                                                     ...styles,
//                                                                     background: "red",
//                                                                     color: "#fff",
//                                                                 }),
//                                                             }}
//                                                         />



//                                                     </div>
//                                                     <div className=" css-1wy0on6">
//                                                         <span className=" css-1okebmr-indicatorSeparator"></span>

//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         </div>





//                                     </div>

//                                     <div className="md:grid grid-cols-2 gap-5">

//                                         <div className="mb-3"><label htmlFor="name"
//                                             className="mb-1 block text-sm  text-slate-500">Condition</label>
//                                             <div className="flex gap-5">
//                                                 <div className="flex flex-row"><input type="radio" id="cb1" name="Condition"
//                                                     onChange={(e) => onChangeProductData('condition', 'used')}
//                                                     className="appearance-none mt-1 h-4 w-4 bg-gray-400 rounded-full  checked:bg-[#A855F7] transition-all duration-200 peer "
//                                                 />
//                                                     <div
//                                                         className="h-4 w-4 mt-1 absolute rounded-full pointer-events-none peer-checked:[#A855F7] peer-checked:border-2">
//                                                     </div><label htmlFor="cb1"
//                                                         className="flex cursor-pointer flex-col justify-center px-2 text-base  text-slate-500  select-none">Used</label>
//                                                 </div>
//                                                 <div className="flex flex-row"><input type="radio" id="cb2" name="Condition"
//                                                     onChange={(e) => onChangeProductData('condition', 'new')}
//                                                     className="appearance-none mt-1 h-4 w-4 bg-gray-400 rounded-full  checked:bg-[#A855F7] transition-all duration-200 peer "
//                                                 />
//                                                     <div
//                                                         className="h-4 w-4 mt-1 absolute rounded-full pointer-events-none peer-checked:[#A855F7] peer-checked:border-2">
//                                                     </div><label htmlFor="cb2"
//                                                         className="flex cursor-pointer flex-col justify-center px-2 text-base  text-slate-500  select-none">New</label>
//                                                 </div>
//                                             </div>
//                                         </div>





//                                         <div className="mb-3"><label htmlFor="name"
//                                             className="mb-1 block text-sm  text-slate-500">Authenticity</label>
//                                             <div className="flex gap-5">
//                                                 <div className="flex flex-row"><input type="radio" id="cb3" name="Authenticity"
//                                                     onChange={(e) => onChangeProductData('authenticity', 'used')}
//                                                     className="appearance-none mt-1 h-4 w-4 bg-gray-400 rounded-full  checked:bg-[#A855F7] transition-all duration-200 peer "
//                                                 />
//                                                     <div
//                                                         className="h-4 w-4 mt-1 absolute rounded-full pointer-events-none peer-checked:[#A855F7] peer-checked:border-2">
//                                                     </div><label htmlFor="cb3"
//                                                         className="flex cursor-pointer flex-col justify-center px-2 text-base  text-slate-500  select-none">Used</label>
//                                                 </div>
//                                                 <div className="flex flex-row"><input type="radio" id="cb4" name="Authenticity"
//                                                     onChange={(e) => onChangeProductData('authenticity', 'new')}
//                                                     className="appearance-none mt-1 h-4 w-4 bg-gray-400 rounded-full  checked:bg-[#A855F7] transition-all duration-200 peer "
//                                                 />
//                                                     <div
//                                                         className="h-4 w-4 mt-1 absolute rounded-full pointer-events-none peer-checked:[#A855F7] peer-checked:border-2">
//                                                     </div><label htmlFor="cb4"
//                                                         className="flex cursor-pointer flex-col justify-center px-2 text-base  text-slate-500  select-none">New</label>
//                                                 </div>
//                                             </div>
//                                         </div>





//                                     </div>
//                                     <div className="md:grid grid-cols-2 gap-5">

//                                         <div className="mb-3"><label htmlFor="name"
//                                             className="mb-1 block text-sm  text-slate-500">Features</label>
//                                             <div className="flex gap-5">
//                                                 <div className="flex flex-row"><input type="radio" id="cb5" name="Features"
//                                                     onChange={(e) => onChangeProductData('features', 'physical')}
//                                                     className="appearance-none mt-1 h-4 w-4 bg-gray-400 rounded-full  checked:bg-[#A855F7] transition-all duration-200 peer "
//                                                 />
//                                                     <div
//                                                         className="h-4 w-4 mt-1 absolute rounded-full pointer-events-none peer-checked:[#A855F7] peer-checked:border-2">
//                                                     </div><label htmlFor="cb5"
//                                                         className="flex cursor-pointer flex-col justify-center px-2 text-base  text-slate-500  select-none">Physical
//                                                         Product</label>
//                                                 </div>
//                                                 <div className="flex flex-row"><input type="radio" id="cb6" name="Features"
//                                                     onChange={(e) => onChangeProductData('features', 'digital')}
//                                                     className="appearance-none mt-1 h-4 w-4 bg-gray-400 rounded-full  checked:bg-[#A855F7] transition-all duration-200 peer "
//                                                 />
//                                                     <div
//                                                         className="h-4 w-4 mt-1 absolute rounded-full pointer-events-none peer-checked:[#A855F7] peer-checked:border-2">
//                                                     </div><label htmlFor="cb6"
//                                                         className="flex cursor-pointer flex-col justify-center px-2 text-base  text-slate-500  select-none">Digital
//                                                         Product</label>
//                                                 </div>
//                                             </div>
//                                         </div>









//                                         <div className="mb-3"><label htmlFor="name"
//                                             className="mb-1 block text-sm  text-slate-500">Negotiable</label>
//                                             <div className="flex gap-5">
//                                                 <div className="flex flex-row"><input type="radio" id="cb7" name="Negotiable"
//                                                     onChange={(e) => onChangeProductData('negotiable', true)}
//                                                     className="appearance-none mt-1 h-4 w-4 bg-gray-400 rounded-full  checked:bg-[#A855F7] transition-all duration-200 peer "
//                                                 />
//                                                     <div
//                                                         className="h-4 w-4 mt-1 absolute rounded-full pointer-events-none peer-checked:[#A855F7] peer-checked:border-2">
//                                                     </div><label htmlFor="cb7"
//                                                         className="flex cursor-pointer flex-col justify-center px-2 text-base  text-slate-500  select-none">Yes</label>
//                                                 </div>
//                                                 <div className="flex flex-row"><input type="radio" id="cb8" name="Negotiable"
//                                                     onChange={(e) => onChangeProductData('negotiable', false)}
//                                                     className="appearance-none mt-1 h-4 w-4 bg-gray-400 rounded-full  checked:bg-[#A855F7] transition-all duration-200 peer "
//                                                 />
//                                                     <div
//                                                         className="h-4 w-4 mt-1 absolute rounded-full pointer-events-none peer-checked:[#A855F7] peer-checked:border-2">
//                                                     </div><label htmlFor="cb8"
//                                                         className="flex cursor-pointer flex-col justify-center px-2 text-base  text-slate-500  select-none">No</label>
//                                                 </div>
//                                             </div>
//                                         </div>


//                                     </div>

//                                     <div className="md:grid grid-cols-2 gap-5">

//                                         <div className="mb-3">
//                                             <label htmlFor="name" className="mb-1 block text-sm  text-slate-500">Brand</label>
//                                             <input type="text"
//                                                 onChange={(e) => onChangeProductData('brand', e.target.value)}
//                                                 name="name" id="name"
//                                                 className="w-full rounded-md border  focus:border-[#6A64F1] focus:shadow-md border-[#e0e0e0] bg-white py-2 px-6 text-base  text-[#6B7280] outline-none" />
//                                         </div>



//                                         <div className="mb-3"><label htmlFor="name"
//                                             className="mb-1 block text-sm  text-slate-500">Model</label><input type="text"
//                                                 onChange={(e) => onChangeProductData('model', e.target.value)}
//                                                 name="name" id="name"
//                                                 className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-6 text-base  text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
//                                         </div>
//                                     </div>



//                                     <div className="mb-3">
//                                         <label
//                                             htmlFor="name"
//                                             className="mb-1 block text-sm  text-slate-500"
//                                         >
//                                             Description
//                                         </label>

//                                         <ReactQuill
//                                             className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base  text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
//                                             theme="bubble"
//                                             value={Description}
//                                             onChange={setDescription}
//                                             defaultValue={Description}
//                                         />
//                                     </div>




//                                     <div className="mb-3"><label htmlFor="name" className="mb-1 block text-sm  text-slate-500">Add Image
//                                         <span className="text-xs bg-[#ef4444]  py-0 px-2 ml-2 rounded-full text-white">Max 200kb
//                                             &amp; highest 5 Images</span></label>
//                                         <div className="img__file ">
//                                             {/* <form id="inputField" action="" encType="multipart/form-data"> */}

//                                             <div><label className="block mt-2 flex">
//                                                 <div><span className="sr-only">Choose photo</span>


//                                                     <input onChange={convertToBase64} type="file" multiple
//                                                         className="block w-[250px] text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100"
//                                                     />

//                                                     {/* <input type="file"
//                                                         multiple
//                                                         className="block w-[250px] text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100" /> */}

//                                                 </div>
//                                             </label>
//                                             </div>
//                                             <div className="grid grid-cols-3 md:grid-cols-5 gap-1 mt-3 md:w-9/12"></div>
//                                             {/* </form> */}
//                                         </div>
//                                     </div>



//                                     <div>
//                                         <button onClick={submitHandler} className="hover:shadow-form rounded-md bg-[#6A64F1] py-2 px-8 text-base font-semibold text-white outline-none">Create
//                                             Ads
//                                         </button>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>


//                     </div>

//                 </div>


//             </div>
//             <div className="react-tabs__tab-panel" role="tabpanel" id="panel:r0:3" aria-labelledby="tab:r0:3"></div>
//         </div>

//     );
// };

// export default CreateProducts;







































import React, { useEffect, useState } from 'react';
import ReactQuill from 'react-quill';
import Select from 'react-select';
import "react-quill/dist/quill.snow.css";

import productStore from '../../store/productStore';
import toast from 'react-hot-toast';

const CreateProducts = () => {
    const { ProductCreateRequest, ProductCategoryList, ProductCategoryListRequest } = productStore()
    const [Description, setDescription] = useState("");
    const [categories, setCategories] = useState([]);

    const [imgArr, setImgArr] = useState([])

    const [category, setCategory] = useState({
        value: "Select...",
        label: "",
    });


    const [form, setFormData] = useState({

        "title": "",
        "des": "",
        "price": "",
        "edition": "",
        "vendorPhone": "fdf",
        "vendorName": "fdfd",
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
    })



    const convertToBase64 = async (e) => {

        const files = e.target.files

        if (files.length === 0) {
            alert("Please select at least one image file.");
            return;
        }
        if (files.length > 5) {
            alert("you cannot select more than image file.");
            return;
        }
        const base64Array = [];

        for (let i = 0; i < files.length; i++) {
            const file = files[i];
            const reader = new FileReader();

            reader.onload = function (event) {
                const base64 = event.target.result;
                base64Array.push(base64);

                if (base64Array.length === files.length) {

                    setImgArr(base64Array)
                }
            };

            reader.readAsDataURL(file);
        }

    }



    const submitHandler = async () => {

        const formData = new FormData()

        formData.append('file', imgArr[0])
        formData.append('file', imgArr[1])
        formData.append('file', imgArr[2])
        formData.append('file', imgArr[3])
        formData.append('file', imgArr[4])

        formData.append("title", form.title)

        formData.append("price", form.price)
        formData.append("edition", form.edition)
        formData.append("vendorPhone", form.vendorPhone)
        formData.append("vendorName", form.vendorName)
        formData.append("model", form.model)
        formData.append("subDistrict", form.subDistrict)
        formData.append("district", form.district)
        formData.append("condition", form.condition)
        formData.append("authenticity", form.authenticity)
        formData.append("features", form.features)
        formData.append("negotiable", form.negotiable)


        formData.append("categoryID", category.value)
        formData.append("des", Description)
        formData.append("brand", form.brand)




        const res = await ProductCreateRequest(formData)

       // console.log(res) 

        if (res) {
            toast.success('Product created sussessfully.')
        } else {
            toast.error('Something went wrong.')

        }

    }


    const setCategoryChange = (categoryData) => {
        setCategory(categoryData)
    }


    useEffect(() => {


        if (ProductCategoryList) {

            let totalCategories = ProductCategoryList.map((item, i) => ({
                value: item._id,
                label: item.categoryName
            }))

            setCategory(totalCategories)
            setCategories(totalCategories)
        }



    }, [ProductCategoryList])











    const onChangeHandler = (key, value) => {
        setFormData((pre) => ({
            ...pre,
            [key]: value
        }))
    }



    return (


        <div>
            <div className="react-tabs__tab-panel" role="tabpanel" id="panel:r0:0" aria-labelledby="tab:r0:0"></div>

            <div className="react-tabs__tab-panel" role="tabpanel" id="panel:r0:1" aria-labelledby="tab:r0:1"></div>
            <div className="react-tabs__tab-panel react-tabs__tab-panel--selected" role="tabpanel" id="panel:r0:2"
                aria-labelledby="tab:r0:2">

                <div className="body__option my-6">
                    <h2 className="text-slate-700 text-xl font-semibold mb-2">Create New Ads</h2>

                    <div>

                        <div className="flex items-center justify-center mt-5">
                            <div className="mx-auto w-full">

                                <div>
                                    <div className="mb-3"><label htmlFor="name" className="mb-1 block text-sm  text-slate-500">Product
                                        Name</label><input type="text" name="name" id="name"
                                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-6 text-base text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"

                                            onChange={(e) => onChangeHandler('title', e.target.value)} required />
                                    </div>

                                    {/* <div className="md:grid grid-cols-2 gap-5">
                                        <div className="mb-3"><label htmlFor="name" className="mb-1 block text-sm  text-slate-500">Your
                                            Name</label><input type="text" name="name"
                                                disabled
                                                onChange={(e) => onChangeHandler('vendorName', e.target.value)}
                                                id="name"
                                                className="w-full cursor-not-allowed	 rounded-md border border-[#e0e0e0] bg-white py-2 px-6 text-base  text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                            /></div>
                                        <div className="mb-3"><label htmlFor="name" className="mb-1 block text-sm  text-slate-500">Mobile
                                            Number</label><input type="text" name="name" id="name"
                                                onChange={(e) => onChangeHandler('vendorPhone', e.target.value)}
                                                 disabled
                                                className="w-full cursor-not-allowed	 rounded-md border border-[#e0e0e0] bg-white py-2 px-6 text-base  text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                            /></div>
                                    </div> */}

                                    <div className="md:grid grid-cols-2 gap-5">
                                        <div className="mb-3"><label htmlFor="name"
                                            className="mb-1 block text-sm  text-slate-500">Price</label><input type="number"
                                                name="name" id="name"
                                                onChange={(e) => onChangeHandler('price', e.target.value)}
                                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-6 text-base  text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                                        </div>
                                        <div className="mb-3"><label htmlFor="name"
                                            className="mb-1 block text-sm  text-slate-500">Edition</label><input type="text"
                                                name="name" id="name"
                                                onChange={(e) => onChangeHandler('edition', e.target.value)}
                                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-6 text-base  text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                                        </div>
                                    </div>

                                    <div className="md:grid grid-cols-3 gap-5">


                                        {/* <div className="mb-3"><label htmlFor="name"
                                            className="mb-1 block text-sm  text-slate-500">District</label>
                                            <div className="select__color css-b62m3t-container"><span
                                                id="react-select-2-live-region" className="css-7pg0cj-a11yText"></span><span
                                                    aria-live="polite" aria-atomic="false" aria-relevant="additions text"
                                                    className="css-7pg0cj-a11yText"></span>
                                                <div className=" css-h4xyy0-control">
                                                    <div className=" css-1d8n9bt">
                                                        <Select
                                                            className="rounded-md select__color border border-[#e0e0e0]"
                                                            defaultValue={district[0]}
                                                            onChange={setDistrict}
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
                                                                    border: "1px",
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
                                                    </div>
                                                    <div className=" css-1wy0on6"><span
                                                        className=" css-1okebmr-indicatorSeparator"></span>

                                                    </div>
                                                </div>
                                            </div>
                                        </div> */}

                                        <div className="mb-3"><label htmlFor="name"
                                            className="mb-1 block text-sm  text-slate-500">District</label>
                                            <div className="select__color css-b62m3t-container"><span
                                                id="react-select-3-live-region" className="css-7pg0cj-a11yText"></span><span
                                                    aria-live="polite" aria-atomic="false" aria-relevant="additions text"
                                                    className="css-7pg0cj-a11yText"></span>
                                                <div className=" css-h4xyy0-control">
                                                    <div className=" css-1d8n9bt">

                                                        <input type="text"
                                                            onChange={(e) => onChangeHandler('district', e.target.value)}
                                                            className='w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-6 text-base  text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md' />

                                                    </div>
                                                    <div className=" css-1wy0on6"><span
                                                        className=" css-1okebmr-indicatorSeparator"></span>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>



                                        <div className="mb-3"><label htmlFor="name"
                                            className="mb-1 block text-sm  text-slate-500">Upozila</label>
                                            <div className="select__color css-b62m3t-container"><span
                                                id="react-select-3-live-region" className="css-7pg0cj-a11yText"></span><span
                                                    aria-live="polite" aria-atomic="false" aria-relevant="additions text"
                                                    className="css-7pg0cj-a11yText"></span>
                                                <div className=" css-h4xyy0-control">
                                                    <div className=" css-1d8n9bt">

                                                        <input type="text"
                                                            onChange={(e) => onChangeHandler('subDistrict', e.target.value)}
                                                            className='w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-6 text-base  text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md' />

                                                    </div>
                                                    <div className=" css-1wy0on6"><span
                                                        className=" css-1okebmr-indicatorSeparator"></span>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>


                                        {/* <div className="mb-3"><label htmlFor="name"
                                            className="mb-1 block text-sm  text-slate-500">Upozila</label>
                                            <div className="select__color css-b62m3t-container"><span
                                                id="react-select-3-live-region" className="css-7pg0cj-a11yText"></span><span
                                                    aria-live="polite" aria-atomic="false" aria-relevant="additions text"
                                                    className="css-7pg0cj-a11yText"></span>
                                                <div className=" css-h4xyy0-control">
                                                    <div className=" css-1d8n9bt">
                                                        <Select
                                                            className="rounded-md select__color border border-[#e0e0e0]"
                                                            defaultValue={upozila[0]}
                                                            onChange={setUpozila}
                                                            options={Upozila}
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
                                                                    border: "1px",
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

                                                    </div>
                                                    <div className=" css-1wy0on6"><span
                                                        className=" css-1okebmr-indicatorSeparator"></span>

                                                    </div>
                                                </div>
                                            </div>
                                        </div> */}


                                        <div className="mb-3"><label htmlFor="name" className="mb-1 block text-sm  text-slate-500">Product
                                            Category</label>
                                            <div className="select__color css-b62m3t-container"><span
                                                id="react-select-4-live-region" className="css-7pg0cj-a11yText"></span><span
                                                    aria-live="polite" aria-atomic="false" aria-relevant="additions text"
                                                    className="css-7pg0cj-a11yText"></span>
                                                <div className=" css-h4xyy0-control">
                                                    <div className=" css-1d8n9bt">


                                                        <Select
                                                            className="rounded-md select__color border border-[#e0e0e0]"
                                                            defaultValue={ProductCategoryList && ProductCategoryList[0]}
                                                            onChange={(e) => setCategoryChange(e)}
                                                            options={ProductCategoryList && ProductCategoryList}

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
                                                                    border: "1px",
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



                                                    </div>
                                                    <div className=" css-1wy0on6">
                                                        <span className=" css-1okebmr-indicatorSeparator"></span>
                                                        {/* <div className=" css-tlfecz-indicatorContainer" aria-hidden="true"><svg
                                                            height="20" width="20" viewBox="0 0 20 20" aria-hidden="true"
                                                            focusable="false" className="css-8mmkcg">
                                                            <path
                                                                d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z">
                                                            </path>
                                                        </svg>
                                                        </div> */}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>














                                    </div>

                                    <div className="md:grid grid-cols-2 gap-5">

                                        <div className="mb-3"><label htmlFor="name"
                                            className="mb-1 block text-sm  text-slate-500">Condition</label>
                                            <div className="flex gap-5">
                                                <div className="flex flex-row"><input type="radio" id="cb1" name="Condition"
                                                    onChange={(e) => onChangeHandler('condition', 'used')}
                                                    className="appearance-none mt-1 h-4 w-4 bg-gray-400 rounded-full  checked:bg-[#A855F7] transition-all duration-200 peer "
                                                />
                                                    <div
                                                        className="h-4 w-4 mt-1 absolute rounded-full pointer-events-none peer-checked:[#A855F7] peer-checked:border-2">
                                                    </div><label htmlFor="cb1"
                                                        className="flex cursor-pointer flex-col justify-center px-2 text-base  text-slate-500  select-none">Used</label>
                                                </div>
                                                <div className="flex flex-row"><input type="radio" id="cb2" name="Condition"
                                                    onChange={(e) => onChangeHandler('condition', 'new')}
                                                    className="appearance-none mt-1 h-4 w-4 bg-gray-400 rounded-full  checked:bg-[#A855F7] transition-all duration-200 peer "
                                                />
                                                    <div
                                                        className="h-4 w-4 mt-1 absolute rounded-full pointer-events-none peer-checked:[#A855F7] peer-checked:border-2">
                                                    </div><label htmlFor="cb2"
                                                        className="flex cursor-pointer flex-col justify-center px-2 text-base  text-slate-500  select-none">New</label>
                                                </div>
                                            </div>
                                        </div>





                                        <div className="mb-3"><label htmlFor="name"
                                            className="mb-1 block text-sm  text-slate-500">Authenticity</label>
                                            <div className="flex gap-5">
                                                <div className="flex flex-row"><input type="radio" id="cb3" name="Authenticity"
                                                    onChange={(e) => onChangeHandler('authenticity', 'used')}
                                                    className="appearance-none mt-1 h-4 w-4 bg-gray-400 rounded-full  checked:bg-[#A855F7] transition-all duration-200 peer "
                                                />
                                                    <div
                                                        className="h-4 w-4 mt-1 absolute rounded-full pointer-events-none peer-checked:[#A855F7] peer-checked:border-2">
                                                    </div><label htmlFor="cb3"
                                                        className="flex cursor-pointer flex-col justify-center px-2 text-base  text-slate-500  select-none">Used</label>
                                                </div>
                                                <div className="flex flex-row"><input type="radio" id="cb4" name="Authenticity"
                                                    onChange={(e) => onChangeHandler('authenticity', 'new')}
                                                    className="appearance-none mt-1 h-4 w-4 bg-gray-400 rounded-full  checked:bg-[#A855F7] transition-all duration-200 peer "
                                                />
                                                    <div
                                                        className="h-4 w-4 mt-1 absolute rounded-full pointer-events-none peer-checked:[#A855F7] peer-checked:border-2">
                                                    </div><label htmlFor="cb4"
                                                        className="flex cursor-pointer flex-col justify-center px-2 text-base  text-slate-500  select-none">New</label>
                                                </div>
                                            </div>
                                        </div>





                                    </div>
                                    <div className="md:grid grid-cols-2 gap-5">

                                        <div className="mb-3"><label htmlFor="name"
                                            className="mb-1 block text-sm  text-slate-500">Features</label>
                                            <div className="flex gap-5">
                                                <div className="flex flex-row"><input type="radio" id="cb5" name="Features"
                                                    onChange={(e) => onChangeHandler('features', 'physical')}
                                                    className="appearance-none mt-1 h-4 w-4 bg-gray-400 rounded-full  checked:bg-[#A855F7] transition-all duration-200 peer "
                                                />
                                                    <div
                                                        className="h-4 w-4 mt-1 absolute rounded-full pointer-events-none peer-checked:[#A855F7] peer-checked:border-2">
                                                    </div><label htmlFor="cb5"
                                                        className="flex cursor-pointer flex-col justify-center px-2 text-base  text-slate-500  select-none">Physical
                                                        Product</label>
                                                </div>
                                                <div className="flex flex-row"><input type="radio" id="cb6" name="Features"
                                                    onChange={(e) => onChangeHandler('features', 'digital')}
                                                    className="appearance-none mt-1 h-4 w-4 bg-gray-400 rounded-full  checked:bg-[#A855F7] transition-all duration-200 peer "
                                                />
                                                    <div
                                                        className="h-4 w-4 mt-1 absolute rounded-full pointer-events-none peer-checked:[#A855F7] peer-checked:border-2">
                                                    </div><label htmlFor="cb6"
                                                        className="flex cursor-pointer flex-col justify-center px-2 text-base  text-slate-500  select-none">Digital
                                                        Product</label>
                                                </div>
                                            </div>
                                        </div>









                                        <div className="mb-3"><label htmlFor="name"
                                            className="mb-1 block text-sm  text-slate-500">Negotiable</label>
                                            <div className="flex gap-5">
                                                <div className="flex flex-row"><input type="radio" id="cb7" name="Negotiable"
                                                    onChange={(e) => onChangeHandler('negotiable', true)}
                                                    className="appearance-none mt-1 h-4 w-4 bg-gray-400 rounded-full  checked:bg-[#A855F7] transition-all duration-200 peer "
                                                />
                                                    <div
                                                        className="h-4 w-4 mt-1 absolute rounded-full pointer-events-none peer-checked:[#A855F7] peer-checked:border-2">
                                                    </div><label htmlFor="cb7"
                                                        className="flex cursor-pointer flex-col justify-center px-2 text-base  text-slate-500  select-none">Yes</label>
                                                </div>
                                                <div className="flex flex-row"><input type="radio" id="cb8" name="Negotiable"
                                                    onChange={(e) => onChangeHandler('negotiable', false)}
                                                    className="appearance-none mt-1 h-4 w-4 bg-gray-400 rounded-full  checked:bg-[#A855F7] transition-all duration-200 peer "
                                                />
                                                    <div
                                                        className="h-4 w-4 mt-1 absolute rounded-full pointer-events-none peer-checked:[#A855F7] peer-checked:border-2">
                                                    </div><label htmlFor="cb8"
                                                        className="flex cursor-pointer flex-col justify-center px-2 text-base  text-slate-500  select-none">No</label>
                                                </div>
                                            </div>
                                        </div>


                                    </div>

                                    <div className="md:grid grid-cols-2 gap-5">

                                        <div className="mb-3">
                                            <label htmlFor="name" className="mb-1 block text-sm  text-slate-500">Brand</label>
                                            <input type="text"
                                                onChange={(e) => onChangeHandler('brand', e.target.value)}
                                                name="name" id="name"
                                                className="w-full rounded-md border  focus:border-[#6A64F1] focus:shadow-md border-[#e0e0e0] bg-white py-2 px-6 text-base  text-[#6B7280] outline-none" />
                                        </div>



                                        <div className="mb-3"><label htmlFor="name"
                                            className="mb-1 block text-sm  text-slate-500">Model</label><input type="text"
                                                onChange={(e) => onChangeHandler('model', e.target.value)}
                                                name="name" id="name"
                                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-6 text-base  text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                                        </div>
                                    </div>



                                    <div className="mb-3">
                                        <label
                                            htmlFor="name"
                                            className="mb-1 block text-sm  text-slate-500"
                                        >
                                            Description
                                        </label>

                                        <ReactQuill
                                            className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base  text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                            theme="bubble"
                                            value={Description}
                                            onChange={setDescription}
                                            defaultValue={Description}
                                        />
                                    </div>




                                    <div className="mb-3"><label htmlFor="name" className="mb-1 block text-sm  text-slate-500">Add Image
                                        <span className="text-xs bg-[#ef4444]  py-0 px-2 ml-2 rounded-full text-white">Max 200kb
                                            &amp; highest 5 Images</span></label>
                                        <div className="img__file ">
                                            {/* <form id="inputField" action="" encType="multipart/form-data"> */}

                                            <div><label className="block mt-2 flex">
                                                <div><span className="sr-only">Choose photo</span>


                                                    <input onChange={convertToBase64} type="file" multiple
                                                        className="block w-[250px] text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100"
                                                    />

                                                    {/* <input type="file"
                                                        multiple
                                                        className="block w-[250px] text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100" /> */}

                                                </div>
                                            </label>
                                            </div>
                                            <div className="grid grid-cols-3 md:grid-cols-5 gap-1 mt-3 md:w-9/12"></div>
                                            {/* </form> */}
                                        </div>
                                    </div>



                                    <div>
                                        <button onClick={submitHandler} className="hover:shadow-form rounded-md bg-[#6A64F1] py-2 px-8 text-base font-semibold text-white outline-none">Create
                                            Ads
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>

                </div>


            </div>
            <div className="react-tabs__tab-panel" role="tabpanel" id="panel:r0:3" aria-labelledby="tab:r0:3"></div>
        </div>


    );
};

export default CreateProducts;
























