import React, { useState } from 'react';
import InputComponent from '../components/layout/InputComponent';
import UserStore from '../store/userStore';
import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

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
        const res = await userLoginRequest(form.email, form.password);
      //  console.log(res)


        if (res) {
            toast.success('Login successfull.')
            navigate('/user')
        } else {
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

export default UserLoginPage;