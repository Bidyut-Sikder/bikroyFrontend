import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import productStore from '../../store/productStore';
import UserStore from '../../store/userStore';

const Header = () => {
    const navigate = useNavigate()
    const { resetProdctDetails, AllProductsRequest } = productStore();
    const [render, setRender] = useState(0)
    const { isLogin, profileDetails, userLogoutRequest, profileDetailsRequest } = UserStore()



    useEffect(() => {
        (async () => {
            // await AllProductsRequest()
            if (isLogin()) {
                await profileDetailsRequest()
            }


        })()
    }, [render])

    const onClickHandler = () => {
        setRender(render + 1)
        resetProdctDetails("All", 'All Bangladesh')
    }

    const logOut = async () => {
        await userLogoutRequest()
        setRender(render + 1)

       // navigate('/', { replace: true });
       location.replace('/')

    }

    // console.log(isLogin())
    // console.log(profileDetails)
    const image = 'https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg'

    return (

        <div className=" bg-[#a855f7] pt-5 pb-3 md:py-4">

            <header className="  container mx-auto ">

                <nav className="flex justify-between max-[700px]:px-3">

                    <div className="logo__section w-80  flex justify-between items-center">
                        <Link to="/">
                            <img
                                src="data:image/png;base64,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"
                                alt="" className="inline-block " />
                        </Link>
                    </div>

                    <div className="profile__section w-[480px] flex justify-end md:justify-between items-center">
                        <span className="hidden md:flex items-end">

                            {/* <Link onClick={()=>{setRender(render+1) resetProdctDetails("All",'All Bangladesh')}} to="/products"><button */}
                            <Link onClick={onClickHandler} to="/products"><button
                                className="block py-2 px-8 rounded-full bg-[#FCD34D] font-semibold text-slate-700 hover:bg-[#fbbf24]"><svg
                                    stroke="currentColor" fill="currentColor" strokeWidth="0"
                                    viewBox="0 0 24 24" className="inline" height="1em" width="1em"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path fill="none" d="M0 0h24v24H0z"></path>
                                    <path
                                        d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z">
                                    </path>
                                </svg> All Ads</button>


                            </Link>

                            {
                                isLogin() ? (<Link onClick={onClickHandler} to="/user">
                                    <button onClick={logOut}
                                        className="ml-2 block py-2 px-8 rounded-full bg-[#FCD34D] font-semibold text-slate-700 hover:bg-[#fbbf24]"><svg
                                            stroke="currentColor" fill="currentColor" strokeWidth="0"
                                            viewBox="0 0 24 24" className="inline" height="1em" width="1em"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path fill="none" d="M0 0h24v24H0z"></path>
                                            <path
                                                d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z">
                                            </path>
                                        </svg> Logout</button>


                                </Link>) : (
                                    <>

                                        <Link onClick={onClickHandler} to="/login"><button
                                            className="ml-2 block py-2 px-8 rounded-full bg-[#FCD34D] font-semibold text-slate-700 hover:bg-[#fbbf24]">



                                            Login</button>


                                        </Link>

                                        <Link onClick={onClickHandler} to="/signup"><button
                                            className="ml-2 block py-2 px-8 rounded-full bg-[#FCD34D] font-semibold text-slate-700 hover:bg-[#fbbf24]">


                                            Signup</button>


                                        </Link>
                                    </>
                                )
                            }

                            <Link onClick={onClickHandler} to="/user">

                                <div className="block rounded-full ">
                                    {
                                        isLogin() ? <img
                                            className=' ml-2    w-[40px] h-[40px] overflow-hidden  items-center rounded-full '
                                            src={profileDetails.image ? profileDetails.image : image} /> : ""
                                    }


                                </div>

                            </Link>






                        </span>



                        <Link to={'/'}
                            className="md:hidden text-slate-200 font-semibold p-2 transition-primary "
                        ><svg stroke="currentColor" fill="currentColor" strokeWidth="0"
                            viewBox="0 0 640 512" className="inline-block text-[30px]" height="1em"
                            width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M610.5 373.3c2.6-14.1 2.6-28.5 0-42.6l25.8-14.9c3-1.7 4.3-5.2 3.3-8.5-6.7-21.6-18.2-41.2-33.2-57.4-2.3-2.5-6-3.1-9-1.4l-25.8 14.9c-10.9-9.3-23.4-16.5-36.9-21.3v-29.8c0-3.4-2.4-6.4-5.7-7.1-22.3-5-45-4.8-66.2 0-3.3.7-5.7 3.7-5.7 7.1v29.8c-13.5 4.8-26 12-36.9 21.3l-25.8-14.9c-2.9-1.7-6.7-1.1-9 1.4-15 16.2-26.5 35.8-33.2 57.4-1 3.3.4 6.8 3.3 8.5l25.8 14.9c-2.6 14.1-2.6 28.5 0 42.6l-25.8 14.9c-3 1.7-4.3 5.2-3.3 8.5 6.7 21.6 18.2 41.1 33.2 57.4 2.3 2.5 6 3.1 9 1.4l25.8-14.9c10.9 9.3 23.4 16.5 36.9 21.3v29.8c0 3.4 2.4 6.4 5.7 7.1 22.3 5 45 4.8 66.2 0 3.3-.7 5.7-3.7 5.7-7.1v-29.8c13.5-4.8 26-12 36.9-21.3l25.8 14.9c2.9 1.7 6.7 1.1 9-1.4 15-16.2 26.5-35.8 33.2-57.4 1-3.3-.4-6.8-3.3-8.5l-25.8-14.9zM496 400.5c-26.8 0-48.5-21.8-48.5-48.5s21.8-48.5 48.5-48.5 48.5 21.8 48.5 48.5-21.7 48.5-48.5 48.5zM224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm201.2 226.5c-2.3-1.2-4.6-2.6-6.8-3.9l-7.9 4.6c-6 3.4-12.8 5.3-19.6 5.3-10.9 0-21.4-4.6-28.9-12.6-18.3-19.8-32.3-43.9-40.2-69.6-5.5-17.7 1.9-36.4 17.9-45.7l7.9-4.6c-.1-2.6-.1-5.2 0-7.8l-7.9-4.6c-16-9.2-23.4-28-17.9-45.7.9-2.9 2.2-5.8 3.2-8.7-3.8-.3-7.5-1.2-11.4-1.2h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c10.1 0 19.5-3.2 27.2-8.5-1.2-3.8-2-7.7-2-11.8v-9.2z">
                                </path>
                            </svg></Link>
                    </div>

                </nav>

                <div className="flex md:hidden mt-5 justify-center">
                    <Link onClick={onClickHandler} to="/products">
                        <button
                            className="block py-2 px-8 rounded-full bg-[#FCD34D] font-semibold text-slate-700 hover:bg-[#fbbf24]"><svg
                                stroke="currentColor" fill="currentColor" strokeWidth="0"
                                viewBox="0 0 24 24" className="inline" height="1em" width="1em"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fill="none" d="M0 0h24v24H0z"></path>
                                <path
                                    d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z">
                                </path>
                            </svg> All Ads</button>
                    </Link>


                    {
                        isLogin() ? (<Link onClick={onClickHandler} to="/user">
                            <button onClick={logOut}
                                className="ml-2 block py-2 px-8 rounded-full bg-[#FCD34D] font-semibold text-slate-700 hover:bg-[#fbbf24]"><svg
                                    stroke="currentColor" fill="currentColor" strokeWidth="0"
                                    viewBox="0 0 24 24" className="inline" height="1em" width="1em"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path fill="none" d="M0 0h24v24H0z"></path>
                                    <path
                                        d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z">
                                    </path>
                                </svg> Logout</button>


                        </Link>) : (<>

                            <Link onClick={onClickHandler} to="/login"><button
                                className="ml-2 block py-2 px-8 rounded-full bg-[#FCD34D] font-semibold text-slate-700 hover:bg-[#fbbf24]">



                                Login</button>


                            </Link>

                            <Link onClick={onClickHandler} to="/signup"><button
                                className="ml-2 block py-2 px-8 rounded-full bg-[#FCD34D] font-semibold text-slate-700 hover:bg-[#fbbf24]">


                                Signup</button>


                            </Link>
                        </>)
                    }





                    <Link onClick={onClickHandler} to="/user">

                        <div className="block rounded-full ">
                            {
                                isLogin() ? <img
                                    className=' ml-2    w-[40px] h-[40px] overflow-hidden  items-center rounded-full '
                                    src={profileDetails.image ? profileDetails.image : image} /> : ""
                            }


                        </div>

                    </Link>

                </div>
            </header>

        </div>

    );
};

export default Header;