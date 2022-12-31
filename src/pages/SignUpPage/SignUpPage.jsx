import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import SignUpForm from '../../modules/SignUpForm';
import { signUpRequest } from '../../redux/auth/auth-operation';
import { isLogin } from '../../redux/auth/auth-selectors';

function SignUpPage() {
    const userIsLogin = useSelector(isLogin);


    const dispatch = useDispatch();
    const onSingUp = (data) => {
        dispatch(signUpRequest(data));//data данные из форма
        // dispatch(fetchCaptcha(data));
    };

    if (userIsLogin) {
        return <Navigate to="/home" />
    }

    return (
        <div style={{ margin: "150px 20px" }}>
            <SignUpForm onSubmit={onSingUp} />
        </div>
    );
}

export default SignUpPage



