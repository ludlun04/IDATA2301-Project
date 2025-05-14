import "./Header.css"
import {NavLink, useLocation} from "react-router-dom";
import {useState} from "react";
import {ReactComponent as Logo} from "../../resources/logo/Logo-Dark-Horizontal.svg";
import {useAuth} from "../../context/AuthContext";
import Profile from "./Profile";

 export default function Header() {
    const [menuButtonActive, setMenuButtonActive] = useState(false);
    const { isSignedIn } = useAuth();

    const location = useLocation();
    const currentPage = location.pathname;

    const handleToggle = () => {
       setMenuButtonActive(!menuButtonActive)
    }

    const handleDashboardRedirect = () => {
        if (isSignedIn) {
            return "/dashboard/user/details";
        } else {
            return "/sign-in";
        }
    }

    return (
        <div className={"Header"}>
            <NavLink className={"logo"} to={"/home"}>
                <Logo className={"headerLogo"}/>
            </NavLink>
            <div className={`headerRightContainer ${menuButtonActive ? "active" : ""}`}>
                <NavLink className={`navLink ${currentPage === "/portal" ? "activePage" : ""}`} to={"/portal"} onClick={handleToggle}>Rent</NavLink>
                <NavLink className={`navLink ${currentPage === "/about" ? "activePage" : ""}`} to={"/about"} onClick={handleToggle}>About</NavLink>
                <NavLink className={`navLink ${currentPage === "/contact" ? "activePage" : ""}`} to={"/contact"} onClick={handleToggle}>Contact</NavLink>
                <NavLink className={`navLink ${currentPage.startsWith("/dashboard") ? "activePage" : ""}`} to={handleDashboardRedirect()} onClick={handleToggle}>{isSignedIn ? <Profile/> : "Login"}</NavLink>
            </div>
            <button className={`headerMenuButtonContainer ${menuButtonActive ? "active" : ""}`} onClick={handleToggle}>
                <div className={`headerMenuButton top ${menuButtonActive ? "active" : ""}`}></div>
                <div className={`headerMenuButton middle ${menuButtonActive ? "active" : ""}`}></div>
                <div className={`headerMenuButton bottom ${menuButtonActive ? "active" : ""}`}></div>
            </button>
        </div>
    )
}