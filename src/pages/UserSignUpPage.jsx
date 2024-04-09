

import React, { useState } from 'react';
import InputComponent from '../components/layout/InputComponent';
import AdminStore from '../store/adminStore';
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import UserStore from '../store/userStore';
import ValidationHelper from '../utility/validation';



const UserSignUpPage = () => {

    //  const { isFormSubmit } = AdminStore()
    const navigate = useNavigate()
    const { userSignUpRequest, isFormSubmit } = UserStore()


    //console.log(isFormSubmit)
    const [form, setForm] = useState({ email: '', password: '' })

    const onChangeHandler = (key, value) => {
        setForm((previousState) => ({
            ...previousState,
            [key]: value
        }))
    }



    const submitHndler = async () => {
        // console.log(form.password.length)

        // // const res =  ValidationHelper.IsEmail(form.email)
        // const res = ValidationHelper.IsLater(form.password)

        // console.log(res)



        // console.log(ValidationHelper.IsEmail(form.email))
        // console.log(!ValidationHelper.IsEmpty(form.password))

 
        if (ValidationHelper.IsEmail(form.email) && !ValidationHelper.IsEmpty(form.password)) {

            const res = await userSignUpRequest(form);
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





    }




    return (
        <div>
            <Toaster />
            <InputComponent text='Signup' onChangeHandler={onChangeHandler} submitHndler={submitHndler} loading={isFormSubmit} />
        </div>
    );
};

export default UserSignUpPage;