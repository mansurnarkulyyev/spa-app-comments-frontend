import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import SignInForm from '../../modules/SignInForm';
import { loginRequest } from '../../redux/auth/auth-operation';
import { isLogin } from '../../redux/auth/auth-selectors';

function SignInPage() {

    const userIsLogin = useSelector(isLogin);

    const dispatch = useDispatch();
    const onLogin = (data) => {
        dispatch(loginRequest(data));
    };

    if (userIsLogin) {
        return <Navigate to="/home" />
    }

    return (
        <div style={{ margin: "150px 20px" }}>
            <SignInForm onSubmit={onLogin} />
        </div>
    )
}

export default SignInPage;
