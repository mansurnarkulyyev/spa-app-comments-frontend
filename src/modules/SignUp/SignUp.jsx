
import SignUpForm from "./SignUpForm";
import { useDispatch } from "react-redux";

import s from "./signUp.module.scss";
import {  signUpRequest } from "../../redux/auth/auth-operation";

function SignUp() {
  const dispatch = useDispatch();
  // const auth = useAuthState();
  const onSingUp = (data) => {
    dispatch(signUpRequest(data));
  };
  return (
    <div className={s.wrapper}>
      <SignUpForm onSubmit={onSingUp} />
    </div>
  );
}
export default SignUp;
