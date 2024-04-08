import React, { useState } from 'react';
import InputComponent from '../components/layout/InputComponent';
import AdminStore from '../store/adminStore';
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';


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
        const res = await adminLoginRequest(form.email, form.password);
      //  console.log(res)


        if (res) {
            toast.success('Login successfull.')
             navigate('/dashboard')
        } else {
            // console.log('fdf')
            toast.error('Invalid credentials!')
        }
    }




    return (
        <div>
            <Toaster />
            <InputComponent onChangeHandler={onChangeHandler} submitHndler={submitHndler} loading={isFormSubmit} />
        </div>
    );
};

export default AdminLoginPage;