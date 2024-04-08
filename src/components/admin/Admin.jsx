import React from 'react';

const Admin = () => {
    return (
        <div className="hidden md:block customsAdsData md:w-1/4 mt-7 md:mt-0">
            <h2 className="text-slate-600 font-semibold text-sm mb-5">Developer Details:</h2>
            <div className="bg-[#fff] rounded-lg px-4 py-5 drop-shadow-md">
                <div className="img__file flex justify-between"><img
                    className="w-[80px] h-[80px] rounded-full"
                    src="https://avatars.githubusercontent.com/u/89535239?v=4"
                    // src="https://res.cloudinary.com/amit-js/image/upload/v1663599145/AmitJS.com/profile_img__Data/background_white_pp_size_1_kxvfi9.png"
                    alt="" /></div>
                <h2 className="mt-3 text-slate-700 font-semibold text-base">Bidyut Sikder</h2>
                <p className=" text-slate-600 font-normal text-sm">https://bidyutsikder.com</p>
                <p className="text-slate-500 text-xs">Full Stack Web Developer (MERN) and Web
                    Application specializing.</p>
                <div className="icons flex gap-1 mt-4"><a
                    className="flex justify-center items-center bg-[#1877f2] w-[25px] h-[25px] rounded-full"
                    href="/"><svg stroke="currentColor" fill="currentColor" strokeWidth="0"
                        viewBox="0 0 320 512" className="text-white" height="1em" width="1em"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z">
                        </path>
                    </svg></a><a
                        className="flex justify-center items-center bg-[#0a66c2] w-[25px] h-[25px] rounded-full"
                        href="/"><svg stroke="currentColor" fill="currentColor" strokeWidth="0"
                            viewBox="0 0 448 512" className="text-white" height="1em" width="1em"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z">
                            </path>
                        </svg></a><a href="https://medium.com/@amitbd599" target="blank"
                            className="flex justify-center items-center bg-[#191919] w-[25px] h-[25px] rounded-full"><svg
                                stroke="currentColor" fill="currentColor" strokeWidth="0"
                                viewBox="0 0 512 512" className="text-white" height="1em" width="1em"
                                xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M71.5 142.3c.6-5.9-1.7-11.8-6.1-15.8L20.3 72.1V64h140.2l108.4 237.7L364.2 64h133.7v8.1l-38.6 37c-3.3 2.5-5 6.7-4.3 10.8v272c-.7 4.1 1 8.3 4.3 10.8l37.7 37v8.1H307.3v-8.1l39.1-37.9c3.8-3.8 3.8-5 3.8-10.8V171.2L241.5 447.1h-14.7L100.4 171.2v184.9c-1.1 7.8 1.5 15.6 7 21.2l50.8 61.6v8.1h-144v-8L65 377.3c5.4-5.6 7.9-13.5 6.5-21.2V142.3z">
                            </path>
                        </svg></a><a
                            className="flex justify-center items-center bg-[#1da1f2] w-[25px] h-[25px] rounded-full"
                            href="/"><svg stroke="currentColor" fill="currentColor" strokeWidth="0"
                                viewBox="0 0 512 512" className="text-white" height="1em" width="1em"
                                xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z">
                            </path>
                        </svg></a></div>
            </div>
        </div>
    );
};

export default Admin;