import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { isLogin } from "../../../redux/auth/auth-selectors";

function PublicRoute() {
    const userIsLogin = useSelector(isLogin);

    if (userIsLogin) {
        return <Navigate to="/home" />
    }
    return <Outlet />
}

export default PublicRoute;