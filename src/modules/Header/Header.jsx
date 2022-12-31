import { useSelector } from "react-redux";

import Logo from "./Logo/Logo";
import styles from "./header.module.scss";
import HeaderMenu from "./HeaderMenu/HeaderMenu";
import NavbarAuth from "./NavbarAuth/NavbarAuth";
import { isLogin } from "../../redux/auth/auth-selectors";
import UserMenu from "./UserMenu";

const Header = () => {

    const isAuth = useSelector(isLogin)

    return (
        <header className={styles.header}>
            <div className="container">
                <div className={styles.row}>
                    <Logo />
                    <HeaderMenu isLogin={isAuth} />
                    {isAuth ? <UserMenu /> : <NavbarAuth />}
                </div>
            </div>
        </header>
    )
}

export default Header;