import React, { useState } from "react";
import UserStore from "../../store/userStore";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import SubmitButton from "./SubmitButton";

const InputComponent = ({ loading, onChangeHandler, submitHndler, text }) => {
  // const navigate = useNavigate()
  // const { userLoginRequest } = UserStore()

  // const [form, setForm] = useState({ email: '', password: '' })

  // const onChangeHandler = (key, value) => {
  //     setForm((previousState) => ({
  //         ...previousState,
  //         [key]: value
  //     }))
  // }

  // const submitHndler = async () => {
  //     const res = await userLoginRequest(form.email, form.password);
  //     console.log(res)

  //     if (res) {
  //         toast.success('Login successfull.')
  //         navigate('/user')
  //     } else {
  //         toast.error('Invalid credentials!')
  //     }
  // }

  const onsubmitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="w-full max-w-sm">
        <form
          onSubmit={onsubmitHandler}
          className="bg-white shadow-lg rounded px-8 pt-6 pb-8 mb-4"
        >
          <h3>Email: gadget@gmail.com</h3>
          <h3>password: 1234</h3>

          <div className="mb-4 mt-2">
            <label
              className="block text-gray-700 text-base font-bold mb-2"
              htmlFor="username"
            >
              Email
            </label>
            <input
              onChange={(e) => onChangeHandler("email", e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="email"
              placeholder="Username"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              onChange={(e) => onChangeHandler("password", e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="******************"
            />
            {/* <p className="text-red-500 text-xs italic">Please choose a password.</p> */}
          </div>
          <div className="flex items-center justify-between">
            {/* <button onClick={submitHndler} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                            {submit}
                        </button> */}

            <SubmitButton
              loading={loading}
              onClick={submitHndler}
              text={text}
            />

            {/* <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                        Forgot Password?
                    </a> */}
          </div>
        </form>
        <p className="text-center text-gray-500 text-xs">
          &copy;2024 bidyutsikder.com All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default InputComponent;

// import { Envelope, Lock } from 'phosphor-react'
// import { Button, Icon, Input, Label } from 'keep-react'

// export const InputComponent = () => {
//     return (
//         <form className="mx-auto max-w-md space-y-2 rounded-lg border p-8 shadow-md">
//             <fieldset className="space-y-1">
//                 <Label htmlFor="name">Email</Label>
//                 <div className="relative">
//                     <Input placeholder="Enter email" className="ps-11" />
//                     <Icon>
//                         <Envelope size={19} color="#AFBACA" />
//                     </Icon>
//                 </div>
//             </fieldset>
//             <fieldset className="space-y-1">
//                 <Label htmlFor="password">Password</Label>
//                 <div className="relative">
//                     <Input id="password" placeholder="Enter password" type="password" className="ps-11" />
//                     <Icon>
//                         <Lock size={19} color="#AFBACA" />
//                     </Icon>
//                 </div>
//             </fieldset>
//             <Button size="sm" color="secondary" type="submit">
//                 Sign In
//             </Button>
//         </form>
//     )
// }
