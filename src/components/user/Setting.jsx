import React, { useState } from 'react';
import UserStore from '../../store/userStore';
import toast, { Toaster } from 'react-hot-toast';

const Setting = () => {

    const { profileDetails, profileUpdateRequest, profileOnchangeHandler } = UserStore()
    // const [comfirmPassword, setComfirmPassword] = useState({ confirm: '' })

    const onConfirmChangeHandlder = (key, value) => {

        setComfirmPassword((previousData) => ({
            // profileDetails: {
            ...previousData.setComfirmPassword,
            [key]: value
            // }
        }
        ))
    }







    const convertToBase64 = (e) => {


        let reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        reader.onload = () => {

            profileOnchangeHandler('image', reader.result)
            //  console.log(reader.result);
        }
        reader.onerror = (error) => {
            console.log(error)
        }

    }

    const submitHandler = async () => {

        // if (comfirmPassword.confirm !== "") {
        //     if (profileDetails.password !== comfirmPassword.confirm) {
        //         alert("Your Password and Confirm password does")
        //     }
        // }

        const res = await profileUpdateRequest(profileDetails)
        console.log(res)
        if (res) {
            toast.success('Profile updated successfuly.')
        } else {
            toast.error('Something went wrong.')

        }

    }

    return (


        <div className="react-tabs__tab-panel react-tabs__tab-panel--selected" role="tabpanel" id="panel:r0:3"
            aria-labelledby="tab:r0:3">
            <div className="body__option my-6">
                <h2 className="text-slate-700 text-2xl font-semibold mb-2">Change details</h2>

                {/* <div>
                        <p className="text-slate-600 cursor-not-allowed">Email: <span
                            className="">{profileDetails.email}</span><span
                                className="text-slate-200 text-xs bg-[#dc2626] ml-2 rounded-full px-2 py-0.5">Can't
                                Change</span></p>
                    </div> */}

                <div className="intro__htmlForm">
                    <div className="p-0">
                        <div className="mt-5 md:grid grid-cols-2 gap-3">
                            <div><label className="sc-bqyKva ePvcBv text-slate-500 text-sm">First Name:</label><input
                                type="text" value={profileDetails.firstName}
                                onChange={(e) => profileOnchangeHandler('firstName', e.target.value)}
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-6 text-base text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                placeholder="First Name" /></div>
                            <div className="mt-3 md:mt-0"><label className="sc-bqyKva ePvcBv text-slate-500 text-sm ">Last
                                Name:</label><input type="text"
                                    onChange={(e) => profileOnchangeHandler('lastName', e.target.value)}
                                    value={profileDetails.lastName}
                                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-6 text-base text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                    placeholder="Last Name" /></div>
                        </div>
                        <div className="mt-3 md:grid grid-cols-2 gap-3">
                            <div><label className="sc-bqyKva ePvcBv text-slate-500 text-sm">Age:</label><input type="text"
                                value={profileDetails.age}
                                onChange={(e) => profileOnchangeHandler('age', e.target.value)}
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-6 text-base text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                placeholder="Age" /></div>
                            <div className="mt-3 md:mt-0"><label className="sc-bqyKva ePvcBv text-slate-500 text-sm">Mobile
                                Number:</label><input type="text"
                                    value={profileDetails.phone}
                                    onChange={(e) => profileOnchangeHandler('phone', e.target.value)}
                                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-6 text-base text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                    placeholder="Mobile Number" /></div>
                        </div>
                        <div className="mt-3">
                            <div><label className="sc-bqyKva ePvcBv text-slate-500 text-sm ">Email ID:</label>
                                <input value={profileDetails.email}
                                    onChange={(e) => profileOnchangeHandler('email', e.target.value)}

                                    type="text" disabled=""
                                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-6 text-base text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                /></div>
                        </div>
                        <div className="mt-3">
                            <div className="mb-3"><label htmlFor="name" className="mb-1 block text-sm  text-slate-500">Add Profile
                                Image</label>
                                <div className="img__file ">
                                    <div>
                                        <label className="block mt-2 cursor-pointer	"><span className="sr-only">Choose profile
                                            photo</span>
                                            <input type="file" onChange={convertToBase64}
                                                className="block  w-[250px] cursor-pointer	 text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100" />

                                        </label>
                                        <div className="grid grid-cols-3 md:grid-cols-5 gap-1 mt-3 md:w-9/12">





                                            <div
                                                className="border w-[100px] h-[100px] rounded-md flex justify-center	items-center	 relative overflow-hidden">
                                                <img className="w-[65px] h-[auto] rounded-md" alt=""
                                                    src={profileDetails.image} />
                                            </div>














                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-3 md:grid grid-cols-2 gap-3">
                            <div><label className="sc-bqyKva ePvcBv text-slate-500 text-sm">Password:</label><input
                                type="password"
                                value={profileDetails.password}
                                onChange={(e) => profileOnchangeHandler('password', e.target.value)}
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-6 text-base text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            /></div>
                            {/* <div className="mt-3 md:mt-0"><label className="sc-bqyKva ePvcBv text-slate-500 text-sm">Confirm
                                Password:</label><input type="password"
                                    value={comfirmPassword.confirm}
                                    onChange={(e) => onConfirmChangeHandlder('confirm', e.target.value)}
                                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-6 text-base text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                />
                            </div> */}
                        </div>
                        <div className="mt-10"><button onClick={submitHandler}
                            className="py-3 bg-[#a855f7] inline-block text-white px-4 rounded-lg hover:bg-[#9333ea] transition-primary">Update
                            Profile</button></div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Setting;