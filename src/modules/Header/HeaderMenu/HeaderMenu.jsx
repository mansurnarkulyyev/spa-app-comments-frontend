import { NavLink } from "react-router-dom";

import st from "./header-menu.module.scss";

const getLinkClassName = ({ isActive }) => {
  return isActive ? st.linkActive : st.link;
};

const HeaderMenu = () => {
  return (
    <div className={st.navbar}>
      <NavLink to={"/"} className={getLinkClassName}>
        Home
      </NavLink>
      <NavLink to={"/about"} className={getLinkClassName}>
        About
      </NavLink>
    </div>
  );
};

export default HeaderMenu;
