import React, { useState } from 'react';
import InputComponent from '../components/layout/InputComponent';
import UserStore from '../store/userStore';
import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import ValidationHelper from '../utility/validation';

const UserLoginPage = () => {
    const navigate = useNavigate()
    const { userLoginRequest } = UserStore()
    const { isFormSubmit } = UserStore()

    //console.log(isFormSubmit)
    const [form, setForm] = useState({ email: '', password: '' })

    const onChangeHandler = (key, value) => {
        setForm((previousState) => ({
            ...previousState,
            [key]: value
        }))
    }



    const submitHndler = async () => {


        if (ValidationHelper.IsEmail(form.email) && !ValidationHelper.IsEmpty(form.password)) {

            const res =  await userLoginRequest(form.email, form.password);
            console.log(res)
            if (res) {
                toast.success('Login successfull.')
               // navigate('/user')
                location.replace('/user');
            } else {
                // console.log('fdf')
                toast.error('Invalid credentials!')
            }


        } else {
            toast.error("Please enter creadiantiols")

        }














        // if (!ValidationHelper.IsEmail(form.email) || !form.password.length>0) {

        //     toast.error("Please enter creadiantiols")
        // } else {
        //   //  console.log(ValidationHelper.IsEmail(form.email))
        //     console.log(ValidationHelper.IsEmail(form.password))
        //     const res =  await userLoginRequest(form.email, form.password);
        

        //     if (res) {
        //         toast.success('Login successfull.')
        //         location.replace('/user');
        //        // navigate('/user')
        //     } else {
        //         toast.error('Invalid credentials!')
        //     }
        // }





        // const res = await userLoginRequest(form.email, form.password);
      //  console.log(res)





        // if (res) {
        //     toast.success('Login successfull.')
        //     location.replace('/user');
        //    // navigate('/user')
        // } else {
        //     toast.error('Invalid credentials!')
        // }
    }


    return (
        <div>
            <Toaster />
            <InputComponent text='Login' onChangeHandler={onChangeHandler} submitHndler={submitHndler} loading={isFormSubmit} />
        </div>
    );
};

export default UserLoginPage;