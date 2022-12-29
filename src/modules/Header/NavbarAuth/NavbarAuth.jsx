import { NavLink } from 'react-router-dom';
import styles from './auth.module.scss'


const getClassName = ({ isActive }) => {
    return isActive ? `${styles.link} ${styles.active}` : styles.link;
}

const NavbarAuth = () => {
    return (
        <div>
            <NavLink to="/login" className={getClassName}>Login</NavLink> | <NavLink to="/register" className={getClassName}>Register</NavLink>
        </div>
    )
}

export default NavbarAuth;