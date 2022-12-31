import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { isLogin } from "../../../redux/auth/auth-selectors";

import st from "./header-menu.module.scss";

const getLinkClassName = ({ isActive }) => {
  return isActive ? st.linkActive : st.link;
};

const HeaderMenu = () => {

  const userIsLogin = useSelector(isLogin);

  return (
    <div className={st.navbar}>
      {userIsLogin ?
        <NavLink to={"/"} className={getLinkClassName}>
          Home
        </NavLink>
        : " "}

      {/* <NavLink to={"/about"} className={getLinkClassName}>
        About
      </NavLink> */}
    </div>
  );
};

export default HeaderMenu;
