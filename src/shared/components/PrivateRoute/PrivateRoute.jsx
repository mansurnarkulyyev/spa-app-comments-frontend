import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { isLogin } from "../../../redux/auth/auth-selectors";

function PrivateRoute() {
    const userIsLogin = useSelector(isLogin);

    if (!userIsLogin) {
        return <Navigate to="/login" />
    }

    return <Outlet />
}

export default PrivateRoute;