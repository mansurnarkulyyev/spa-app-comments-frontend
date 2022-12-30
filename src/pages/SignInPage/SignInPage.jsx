import React from 'react'
import { useDispatch } from 'react-redux';
import SignInForm from '../../modules/SignInForm';
import { loginRequest } from '../../redux/auth/auth-operation';

function SignInPage() {
    const dispatch = useDispatch();
    const onLogin = (data) => {
        dispatch(loginRequest(data));
    };
    return (
        <div style={{ margin: "150px 20px" }}>
            <SignInForm onSubmit={onLogin} />
        </div>
    )
}

export default SignInPage;
