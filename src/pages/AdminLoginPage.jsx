import React, { useState } from 'react';
import InputComponent from '../components/layout/InputComponent';
import AdminStore from '../store/adminStore';
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import ValidationHelper from '../utility/validation';


const AdminLoginPage = () => {

    const { isFormSubmit } = AdminStore()
    const navigate = useNavigate()
    const { adminLoginRequest } = AdminStore()


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

            const res = await adminLoginRequest(form.email, form.password);
            console.log(res)
            if (res) {
                toast.success('Login successfull.')
               // navigate('/user')
               location.replace('/dashboard');
            } else {
                // console.log('fdf')
                toast.error('Invalid credentials!')
            }


        } else {
            toast.error("Please enter creadiantiols")

        }














        // if (ValidationHelper.IsEmail(form.email) || ValidationHelper.IsLater(form.password)) {

        //     toast.error("Please enter creadiantiols")
        // } else {
        //     const res = await adminLoginRequest(form.email, form.password);

        //     if (res) {
        //         toast.success('Login successfull.')
        //         // navigate('/dashboard')
        //         location.replace('/dashboard');
        //     } else {
        //         // console.log('fdf')
        //         toast.error('Invalid credentials!')
        //     }


        // }










        //     const res = await adminLoginRequest(form.email, form.password);
        //   //  console.log(res)


        //     if (res) {
        //         toast.success('Login successfull.')
        //         // navigate('/dashboard')
        //         location.replace('/dashboard');
        //     } else {
        //         // console.log('fdf')
        //         toast.error('Invalid credentials!')
        //     }
    }




    return (
        <div>
            <Toaster />
            <InputComponent text='Login' onChangeHandler={onChangeHandler} submitHndler={submitHndler} loading={isFormSubmit} />
        </div>
    );
};

export default AdminLoginPage;