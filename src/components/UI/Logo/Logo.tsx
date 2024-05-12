import logo from "@/assets/images/logo.svg";
import styles from "./Logo.module.css";
import { Link, useLocation } from "react-router-dom";
import { LoadContext } from "@/App";
import { useContext } from "react";

const Logo = () => {
    const loc = useLocation();
    const setIsLoaded = useContext(LoadContext);

    const handleClick = () => {
        if (loc.pathname !== "/") {
            setIsLoaded(false);
        }
    };
    return (
        <Link className={styles.logo} onClick={handleClick} to="/">
            <img src={logo} alt="Logo" />
        </Link>
    );
};

export default Logo;
