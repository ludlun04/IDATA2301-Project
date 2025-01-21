import "./Home.css"
import {NavLink} from "react-router-dom";

export default function Home() {
    return (
        <div className={"Home"}>
            <div className={"home"}>
                <div className={"homeLeftPane"}>
                    <p className={"slogan1"}>Your journey starts here</p>
                    <p className={"slogan2"}>Rent with</p>
                    <p className={"slogan2 ease"}>ease</p>
                </div>
                <div className={"homeRightPane"}>
                    <NavLink className={"portalButton"} to={"/portal"}>Rent Now</NavLink>
                </div>
            </div>
        </div>
    )
}