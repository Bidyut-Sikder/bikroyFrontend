import React, { useEffect, useState } from 'react';
import UserStore from '../../store/userStore';
import { Link } from 'react-router-dom';
import productStore from '../../store/productStore';

const UserProducts = () => {
    const { userProductsRequest, userProducts } = UserStore()
    const { ProductDeleteRequest } = UserStore()
    const [render, setRender] = useState(0)


    const deleteProduct = async (id) => {
        //console.log(id)
        await ProductDeleteRequest(id);
        setRender(render + 1)
    }



    useEffect(() => {
        (async () => {
            await userProductsRequest()

        })()
    }, [render])





    return (

        <div>
            {
                userProducts ? (

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




                                                                {
                                                                    userProducts ? userProducts.map((product, i) => {
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



                                                                                        {/* <div
                                                                                            className="w-4 cursor-not-allowed mr-2 transform hover:text-purple-500 hover:scale-110">
                                                                                            <svg xmlns="http://www.w3.org/2000/svg"
                                                                                                fill="none" viewBox="0 0 24 24"
                                                                                                stroke="currentColor">
                                                                                                <path strokeLinecap="round"
                                                                                                    strokeLinejoin="round" strokeWidth="2"
                                                                                                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z">
                                                                                                </path>
                                                                                                <path strokeLinecap="round"
                                                                                                    strokeLinejoin="round" strokeWidth="2"
                                                                                                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z">
                                                                                                </path>
                                                                                            </svg>
                                                                                        </div> */}




                                                                                        {
                                                                                            product.approved ? <Link to={`/details/${product._id}`} >

                                                                                                <div
                                                                                                    className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                                                                                                    <svg xmlns="http://www.w3.org/2000/svg"
                                                                                                        fill="none" viewBox="0 0 24 24"
                                                                                                        stroke="currentColor">
                                                                                                        <path strokeLinecap="round"
                                                                                                            strokeLinejoin="round" strokeWidth="2"
                                                                                                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z">
                                                                                                        </path>
                                                                                                        <path strokeLinecap="round"
                                                                                                            strokeLinejoin="round" strokeWidth="2"
                                                                                                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z">
                                                                                                        </path>
                                                                                                    </svg>
                                                                                                </div>


                                                                                            </Link> :
                                                                                                <div
                                                                                                    className="w-4 cursor-not-allowed mr-2 transform hover:text-purple-500 hover:scale-110">
                                                                                                    <svg xmlns="http://www.w3.org/2000/svg"
                                                                                                        fill="none" viewBox="0 0 24 24"
                                                                                                        stroke="currentColor">
                                                                                                        <path strokeLinecap="round"
                                                                                                            strokeLinejoin="round" strokeWidth="2"
                                                                                                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z">
                                                                                                        </path>
                                                                                                        <path strokeLinecap="round"
                                                                                                            strokeLinejoin="round" strokeWidth="2"
                                                                                                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z">
                                                                                                        </path>
                                                                                                    </svg>
                                                                                                </div>

                                                                                        }


















                                                                                    </span>
                                                                                        <Link to={`/edit/${product._id}`}>
                                                                                            <div
                                                                                                className="w-4 cursor-pointer mr-2 transform hover:text-purple-500 hover:scale-110">
                                                                                                <svg xmlns="http://www.w3.org/2000/svg"
                                                                                                    fill="none" viewBox="0 0 24 24"
                                                                                                    stroke="currentColor">
                                                                                                    <path strokeLinecap="round"
                                                                                                        strokeLinejoin="round" strokeWidth="2"
                                                                                                        d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z">
                                                                                                    </path>
                                                                                                </svg>
                                                                                            </div>
                                                                                        </Link>
                                                                                        <div onClick={() => deleteProduct(product._id)}
                                                                                            className="w-4 cursor-pointer mr-2 transform hover:text-purple-500 hover:scale-110">
                                                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                                                                viewBox="0 0 24 24" stroke="currentColor">
                                                                                                <path strokeLinecap="round"
                                                                                                    strokeLinejoin="round" strokeWidth="2"
                                                                                                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16">
                                                                                                </path>
                                                                                            </svg>
                                                                                        </div>
                                                                                    </div>
                                                                                </td>
                                                                            </tr>



                                                                        )
                                                                    }) : <p>Loading...</p>
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



                ) : <p>Loading...</p>
            }
        </div>
    );
};

export default UserProducts;