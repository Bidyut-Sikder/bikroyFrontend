import React, { useEffect, useState } from 'react';
import AdminStore from '../store/adminStore';
import AdminProducts from '../components/admin/AdminProducts';
import Dashboard from '../components/admin/Dashboard';
import { Avatar, Card } from 'keep-react'
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const AdminDashBoardPage = () => {
    const navigate = useNavigate()
    const [show, setShow] = useState({
        dashboard: true,
        products: false,
        create: false,
        setting: false,
    })

    const { adminProductsRequest, adminProducts,
        isLogin, adminProductUpdateRequest, adminDetails,
        adminDetailsRequest, adminAdminLogoutRequest } = AdminStore()





    const onClickHandler = (data) => {

        if (data === 'dashboard') {
            setShow({ dashboard: true })
        }
        if (data === 'products') {
            setShow({ products: true })
        }


    }



    useEffect(() => {
        (async () => {

            await adminDetailsRequest()
        })()


    }, [])



    const logoutHandler = async () => {

        const res = await adminAdminLogoutRequest()
        if (res) {
            navigate('/')
        }
    }


    if (!isLogin()) {
        return <h1>You are not logged in.</h1>
    }




    return (
        <div>
            <Toaster />
            <div className="bg-gray-800 h-screen w-64 fixed">

                <div className="flex items-center justify-center py-4">
                    <img src="https://i.pinimg.com/originals/51/be/90/51be905ccc59d86d1465b79e7094b676.jpg" alt="Logo" className="h-8 w-8" />
                    <span className="text-white text-xl font-semibold ml-2">Admin Dashboard</span>
                </div>

                <nav className="mt-6">
                    <button onClick={() => onClickHandler('dashboard')} className="block py-2 px-4 text-gray-400 hover:bg-gray-700 hover:text-white">Dashboard</button>
                    <button onClick={() => onClickHandler('products')} className="block py-2 px-4 text-gray-400 hover:bg-gray-700 hover:text-white">Products</button>

                </nav>

            </div>


            <div className="ml-64  bg-gray-100 h-screen">
                <div className="bg-gray-900 h-16 flex items-center justify-between px-4">
                    <span className="text-white text-lg font-semibold">Welcome, {adminDetails && adminDetails.firstName} {adminDetails && adminDetails.lastName}</span>
                    {/* <div className=''>
                        <img style={{width:'100px'}} src={adminDetails && adminDetails.image} alt="" />
                        <Avatar img="/images/avatar/avatar-2.png" />
                        <button className="bg-red-600 text-white px-4 py-2 rounded-md">Logout</button>
                        
                    </div> */}
                    <div className="flex items-center justify-center py-4">
                        {/* <Avatar img={adminDetails && adminDetails.image} /> */}
                        <img src={adminDetails ? adminDetails.image : 'https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg'} alt="Logo" className="h-8 w-8" />
                        {/* <span className="text-white text-xl font-semibold ml-2">Logout</span> */}
                        <button onClick={logoutHandler} className="bg-red-600 text-white px-4 py-2 ml-2 rounded-md">Logout</button>

                    </div>

                </div>


                <div className="ml-64">
                    <h1 className="text-3xl font-semibold p-6">Dashboard</h1>

                </div>
                {show.dashboard ? <Dashboard /> : ''}
                {show.products ? <AdminProducts /> : ''}


                {/* <Dashboard /> */}

                {/* <AdminProducts /> */}


            </div>

        </div>
    );
};

export default AdminDashBoardPage;










// import React from 'react';

// const AdminDashBoard = () => {
//     return (
//         <div className="flex">
//         <div className="bg-gray-800 text-white w-64 h-screen">
//             <div className="p-4">
//                 <h1 className="text-2xl font-bold">Admin Dashboard</h1>
//                 <ul className="mt-4">
//                     <li className="py-2 px-4 hover:bg-gray-700">Products</li>
//                     <li className="py-2 px-4 hover:bg-gray-700">Categories</li>
//                     <li className="py-2 px-4 hover:bg-gray-700">Orders</li>
//                 </ul>
//             </div>
//         </div>
//         <div className="p-4">
//             <h1 className="text-2xl font-bold">Product Management</h1>
//             <div className="mt-4">
//                 {/* Your product management content goes here */}
//             </div>
//         </div>
//     </div>
//     );
// };

// export default AdminDashBoard;













