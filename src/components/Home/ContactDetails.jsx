import React from 'react';

const ContactDetails = () => {
    return (
    

    <div className="hidden md:block contact mb-10">
        <div className="container mx-auto">
            <div className="item__body grid md:grid-cols-3 gap-10">
                <div className="item p-10 rounded-lg  transition-primary cursor-pointer text-center">
                    <div className="icon__section  inline-block  rounded-lg shadow-lg"><svg stroke="currentColor"
                            fill="currentColor" strokeWidth="0" viewBox="0 0 16 16"
                            className="inline bg-[#faf5ff] m-10 text-[#9333ea] text-[20px]" height="1em" width="1em"
                            xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"></path>
                            <path
                                d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z">
                            </path>
                        </svg></div>
                    <div className="text__section">
                        <h2 className="mt-5 text-lg font-bold text-slate-700">Phone</h2>
                        <p className="text-slate-500 text-md mb-2">If you have to need any help you can call any time. Our
                            teem spend there time for give best service.</p>
                        <p className="text-slate-500 text-sm font-semibold">+88 01814-33135*</p>
                    </div>
                </div>
                <div className="item p-10 rounded-lg  transition-primary cursor-pointer text-center">
                    <div className="icon__section  inline-block  rounded-lg shadow-lg"><svg stroke="currentColor"
                            fill="currentColor" strokeWidth="0" viewBox="0 0 24 24"
                            className="inline bg-[#faf5ff] m-10 text-[#9333ea] text-[20px]" height="1em" width="1em"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill="none" d="M0 0h24v24H0V0z"></path>
                            <path
                                d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z">
                            </path>
                        </svg></div>
                    <div className="text__section">
                        <h2 className="mt-5 text-lg font-bold text-slate-700">Email</h2>
                        <p className="text-slate-500 text-md mb-2">If you have want to send massage, You can send email us.
                            We shall back to response very quickly!</p>
                        <p className="text-slate-500 text-sm font-semibold">amitbd599@gmail.com</p>
                    </div>
                </div>
                <div className="item p-10 rounded-lg  transition-primary cursor-pointer text-center">
                    <div className="icon__section  inline-block  rounded-lg shadow-lg"><svg stroke="currentColor"
                            fill="currentColor" strokeWidth="0" viewBox="0 0 24 24"
                            className="inline bg-[#faf5ff] m-10 text-[#9333ea] text-[20px]" height="1em" width="1em"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill="none" d="M0 0h24v24H0z"></path>
                            <path
                                d="M20.5 3l-.16.03L15 5.1 9 3 3.36 4.9c-.21.07-.36.25-.36.48V20.5c0 .28.22.5.5.5l.16-.03L9 18.9l6 2.1 5.64-1.9c.21-.07.36-.25.36-.48V3.5c0-.28-.22-.5-.5-.5zM15 19l-6-2.11V5l6 2.11V19z">
                            </path>
                        </svg></div>
                    <div className="text__section">
                        <h2 className="mt-5 text-lg font-bold text-slate-700">Location</h2>
                        <p className="text-slate-500 text-md mb-2">Our Company has located in Chittagong, Bangladesh. please
                            visit https://amitjs.com for more info.</p>
                        <p className="text-slate-500 text-sm font-semibold">Chittagong, Bangladesh</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    );
};

export default ContactDetails;