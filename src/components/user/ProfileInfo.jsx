import React from 'react';
import UserStore from '../../store/userStore';
import { useNavigate } from 'react-router-dom';

const ProfileInfo = () => {
    const { profileDetailsRequest, profileDetails, userLogoutRequest } = UserStore()
    const navigate = useNavigate()



    const logout = async () => {
        await userLogoutRequest()
        navigate('/')
    }

    const image = 'https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg'
    return (
        <>
            {
                profileDetails ? (


                    <div className="react-tabs__tab-panel react-tabs__tab-panel--selected" role="tabpanel"
                        id="panel:r0:0" aria-labelledby="tab:r0:0">
                        <div className="body__option my-6">
                            <h2 className="text-slate-700 text-xl font-semibold mb-2">Dashboard</h2>
                            <p className="text-slate-500 text-base ">Hello, <strong>{profileDetails.firstName} {profileDetails.lastName}</strong>  you can
                                easily check &amp; view your recent orders, manage your shipping and billing
                                addresses and edit your password and account details.</p>
                            <div className="mt-8 flex gap-5">
                                <div
                                    className="img__file w-[80px] h-[80px] overflow-hidden flex justify-center  items-center rounded-full">
                                    <img className="w-[100%] h-[auto] " src={profileDetails.image ? profileDetails.image : image} alt="" />
                                </div>
                                <div className="text__file">
                                    <p className="text-slate-500 ">Name: {profileDetails.firstName} {profileDetails.lastName}</p>
                                    <p className="text-slate-500 ">Email: {profileDetails.email} </p>
                                    <p className="text-slate-500 ">Mobile Number: {profileDetails.phone}</p>
                                    <p className="text-slate-500 ">User Roles: {profileDetails.role}</p>
                                    <p className="text-slate-500 ">Age: {profileDetails.age}</p>
                                    <p className="text-slate-500 ">Create Date: {new Date(profileDetails.createdAt).getDay() + "-" + (new Date(profileDetails.createdAt).getMonth() + 1) + "-" + new Date(profileDetails.createdAt).getFullYear()}</p>

                                    <button onClick={logout}
                                        className="rounded-lg btn-primary px-2 bg-[#A855F7] text-slate-100 hover:bg-[#9333ea]">Logout
                                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0"
                                            viewBox="0 0 24 24"
                                            className="inline text-[14px] mb-1 ml-1 bg-slate-200 rounded-full text-[#A855F7]"
                                            height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                            <path fill="none" d="M0 0h24v24H0V0z"></path>
                                            <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z">
                                            </path>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                ) : <h3>Loading...</h3>
            }
        </>
    );
};

export default ProfileInfo;