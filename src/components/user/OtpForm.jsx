import React from 'react';
import SubmitButton from './SubmitButton';
import UserStore from '../../store/userStore';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { getEmail } from '../../utility/utlity';
import ValidationHelper from '../../utility/validation';

const OtpForm = () => {
    const navigate = useNavigate()
    const { verifyOTP, OTPOnChange, VerifyLoginRequest } = UserStore()

    const submitOtp = async () => {

        if (ValidationHelper.IsEmpty(verifyOTP.otp)) {
            toast.error('Invalid OTP! Please try again.')

        } else {
            const res = await VerifyLoginRequest(verifyOTP.otp)
            res ? navigate('/') : toast.error('Something went wrong.')
        }
    }

    return (
        <div className="container section">
            <div className="row d-flex justify-content-center">
                <div className="col-md-5">
                    <div className="card p-5">
                        <h4>Enter Verification Code</h4>
                        <p>A verification code has been sent to the email address you provide</p>
                        <input value={verifyOTP.otp} onChange={(e) => OTPOnChange('otp', e.target.value)} placeholder="Verification" type="text" className="form-control" />
                        <SubmitButton onClick={submitOtp} submit={true} className="btn mt-3 btn-success" text="Next" />

                    </div>
                </div>
            </div>
        </div>
    );
};

export default OtpForm;