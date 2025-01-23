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
                <NavLink className={"navLink rent"} to={"/portal"}>Rent</NavLink>
                <NavLink className={"navLink"} to={"/about"}>About</NavLink>
                <NavLink className={"navLink"} to={"contact"}>Contact</NavLink>
                <NavLink className={"navLink sign-in"} to={"/sign-in"}>Sign In</NavLink>
            </div>
            <input className={"headerMenuButton"} type={"checkbox"} checked={menuButtonActive} onChange={handleToggle}></input>
        </div>
    )
}