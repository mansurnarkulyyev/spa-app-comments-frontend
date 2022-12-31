import { useSelector, useDispatch } from "react-redux";
import { logoutRequest } from "../../../redux/auth/auth-operation";
import { getUser } from "../../../redux/auth/auth-selectors";

const UserMenu = () => {
    const { name } = useSelector(getUser);
    const dispatch = useDispatch();

    const onLogout = () => {
        dispatch(logoutRequest());
    }

    return (
        <div>
            {name} |
            <button onClick={onLogout} >Logout</button>
        </div>
    )
}

export default UserMenu;