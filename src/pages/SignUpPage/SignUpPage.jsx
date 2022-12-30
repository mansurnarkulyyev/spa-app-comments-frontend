import React from 'react'
import { useDispatch } from 'react-redux';
import SignUpForm from '../../modules/SignUpForm';
import { signUpRequest } from '../../redux/auth/auth-operation';

function SignUpPage() {
    const dispatch = useDispatch();
    const onSingUp = (data) => {
        dispatch(signUpRequest(data));
        // dispatch(fetchCaptcha(data));
    };

    return (
        <div style={{ margin: "150px 20px" }}>
            <SignUpForm onSubmit={onSingUp} s />
        </div>
    );
}

export default SignUpPage



