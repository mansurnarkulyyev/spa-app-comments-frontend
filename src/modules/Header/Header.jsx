
import Logo from "./Logo/Logo";
import styles from "./header.module.scss";
import HeaderMenu from "./HeaderMenu/HeaderMenu";
import NavbarAuth from "./NavbarAuth/NavbarAuth";

const Header = () => {
    return (
        <header className={styles.header}>
            <div className="container">
                <div className={styles.row}>
                    <Logo />
                    <HeaderMenu />
                    <NavbarAuth />
                </div>
            </div>
        </header>
    )
}

export default Header;