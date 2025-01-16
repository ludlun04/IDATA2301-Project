import "./Header.css"
import {NavLink} from "react-router-dom";

export default function Header() {
    return (
        <div className={"Header"}>
            <NavLink className={"logo"} to={"/home"}>Rental Roulette</NavLink>
            <div className={"rightContainer"}>
                <NavLink className={"navLink rent"} to={"/portal"}>Rent</NavLink>
                <NavLink className={"navLink"} to={"/about"}>About</NavLink>
                <NavLink className={"navLink"} to={"contact"}>Contact</NavLink>
            </div>
        </div>
    )
}