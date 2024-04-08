import React, { useEffect, useState } from 'react';
import AdminStore from '../../store/adminStore';
import { Link } from 'react-router-dom';


const AdminProducts = () => {
    const { adminProductsRequest, adminProducts,
        isLogin, adminProductUpdateRequest, adminDetails,
        adminDetailsRequest } = AdminStore()

    const [render, setRender] = useState(0)

    useEffect(() => {
        (async () => {

            await adminProductsRequest()
        })()


    }, [render])

    //console.log(adminProducts)

    const onclickHandler = async (id) => {


        const res = await adminProductUpdateRequest(id, { approved: true })
        setRender(render + 1)

    }


    return (
        <div>




            <div>


                <div className="react-tabs__tab-panel react-tabs__tab-panel--selected" role="tabpanel" id="panel:r0:1"
                    aria-labelledby="tab:r0:1">
                    <div className="item">
                        <div className="flex flex-col min-h-[360px]">
                            <div className="overflow-x-auto">
                                <div className="py-2 inline-block min-w-full ">
                                    <div className="overflow-x-auto">
                                        <div className=" bg-[#fff] flex  justify-center  font-sans overflow-hidden">
                                            <div className="w-full ">
                                                <div className="bg-white shadow-md rounded my-6 min-h-[340px]">

                                                    <table className="min-w-max w-full table-auto">
                                                        <thead>
                                                            <tr
                                                                className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                                                                <th className="py-3 px-6 text-left">Product Name</th>
                                                                <th className="py-3 px-6 text-left">Image</th>
                                                                <th className="py-3 px-6 text-left">Create Date</th>
                                                                <th className="py-3 px-6 text-center">Status</th>
                                                                <th className="py-3 px-6 text-center">Actions</th>
                                                            </tr>
                                                        </thead>

                                                        <tbody className="text-gray-600 text-sm font-light">

                                                            <tr className="py-3 px-6 text-left"></tr>

                                                            {
                                                                adminProducts && adminProducts.map((product, i) => {
                                                                    return (


                                                                        <tr key={i} className="border-b border-gray-200 hover:bg-gray-100">
                                                                            <td className="py-3 px-6 text-left whitespace-nowrap">
                                                                                <div className="flex items-center">

                                                                                    <span className="font-medium">{product.title} </span>


                                                                                </div>
                                                                            </td>
                                                                            <td className="py-3 px-6 text-left">
                                                                                <div className="flex items-center">
                                                                                    <div className="mr-2">
                                                                                        <img src={product.image} className="w-10 h-8 rounded-lg" />
                                                                                    </div>
                                                                                </div>
                                                                            </td>
                                                                            <td className="py-3 px-6 ">
                                                                                <div className="flex items-center">
                                                                                    <div className="mr-2"><span>{new Date(product.createdAt).getDay() + "-" + (new Date(product.createdAt).getMonth() + 1) + "-" + new Date(product.createdAt).getFullYear()}</span></div>
                                                                                </div>
                                                                            </td>
                                                                            <td className="py-3 px-6 text-center"><span
                                                                                className="bg-purple-200 text-purple-600 py-1 px-3 rounded-full text-xs">{product.approved ? "Approved" : "Pending"}</span>
                                                                            </td>
                                                                            <td className="py-3 px-6 text-center">
                                                                                <div className="flex item-center justify-center"><span>


                                                                                </span>

                                                                                    <div onClick={() => onclickHandler(product._id)}
                                                                                        className="w-7 cursor-pointer mr-2 transform hover:text-purple-500 hover:scale-110">


                                                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                                                                        </svg>
                                                                                    </div>


                                                                                </div>
                                                                            </td>
                                                                        </tr>



                                                                    )
                                                                })
                                                            }



                                                        </tbody>

                                                    </table>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>




            </div>

        </div>
    );
};

export default AdminProducts;