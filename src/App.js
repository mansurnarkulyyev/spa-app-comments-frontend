// import SignUp from "./modules/SignUp/SignUp";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Header from "./modules/Header/Header";
import { getCurrentRequest } from "./redux/auth/auth-operation";
import UserRoutes from "./UserRoutes";

function App() {
 
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentRequest());
  }, [dispatch]);


  return (
    <>
   <Header/>
      <UserRoutes/>
    </>
  );
}

export default App;
