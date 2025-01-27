 import "./Header.css"
import {NavLink} from "react-router-dom";
 import {useState} from "react";

export default function Header() {
    const [menuButtonActive, setMenuButtonActive] = useState(false);

    const handleToggle = () => {
       setMenuButtonActive(!menuButtonActive)
    }

    return (
        <div className={"Header"}>
            <NavLink className={"logo"} to={"/home"}>Rental Roulette</NavLink>
            <div className={`headerRightContainer ${menuButtonActive ? "active" : ""}`}>
                <NavLink className={"navLink rent"} to={"/portal"} onClick={handleToggle}>Rent</NavLink>
                <NavLink className={"navLink"} to={"/about"} onClick={handleToggle}>About</NavLink>
                <NavLink className={"navLink"} to={"contact"} onClick={handleToggle}>Contact</NavLink>
                <NavLink className={"navLink sign-in"} to={"/sign-in"} onClick={handleToggle}>Sign In</NavLink>
            </div>
            <div className={`headerMenuButtonContainer ${menuButtonActive ? "active" : ""}`} onClick={handleToggle}>
                <div className={`headerMenuButton top ${menuButtonActive ? "active" : ""}`}></div>
                <div className={`headerMenuButton middle ${menuButtonActive ? "active" : ""}`}></div>
                <div className={`headerMenuButton bottom ${menuButtonActive ? "active" : ""}`}></div>
            </div>
        </div>
    )
}