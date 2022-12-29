
import SignUpForm from "./SignUpForm";
import { useDispatch } from "react-redux";

import { signUpRequest } from "../../redux/auth/auth-operation";

function SignUp() {
  const dispatch = useDispatch();
  // const auth = useAuthState();
  const onSingUp = (data) => {
    dispatch(signUpRequest(data));
  };
  return (
    <div style={{ margin: "150px 20px" }}>
      <SignUpForm onSubmit={onSingUp} />
    </div>
  );
}
export default SignUp;
