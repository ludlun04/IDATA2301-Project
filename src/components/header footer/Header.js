import "./Header.css"
import {NavLink} from "react-router-dom";

export default function Header() {
    return (
        <div className={"Header"}>
            <NavLink to={"/home"}>Rental Roulette</NavLink>
            <NavLink to={"/portal"}>Rent</NavLink>
            <NavLink to={"/about"}>About</NavLink>
            <NavLink to={"contact"}>Contact</NavLink>
        </div>
    )
}