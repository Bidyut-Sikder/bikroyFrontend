import React from 'react';
import SubmitButton from './SubmitButton';
import UserStore from '../../store/userStore';
import ValidationHelper from '../../utility/validation';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom'

const LoginForm = () => {
    const navigate = useNavigate()
    const { LoginFormData, LoginOnChange, UserOTPRequest } = UserStore()

    const onFormSubmit = async () => {
        if (!ValidationHelper.IsEmail(LoginFormData.email)) {
            toast.error('Valid Email Address Required')
          
        } else {
            const res = await UserOTPRequest(LoginFormData.email)
            if (res) {
                navigate('/otp', { replace: true })
            } else {
                toast.error("Invalid Credentials")
            }

        }

    }

    return (
        <div className="container section">
            <div className="row d-flex justify-content-center">
                <div className="col-md-5">
                    <div className="card p-5">
                        <h4>Enter Your Email</h4>
                        <p>A verification code will be sent to the email address you provide</p>
                        <input value={LoginFormData.email} onChange={(e) => LoginOnChange('email', e.target.value)} placeholder="Email Address" type="email" className="form-control" />

                        <SubmitButton onClick={onFormSubmit} className="btn mt-3 btn-success" text="Next" />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default LoginForm;
