import "./Home.css"
import {NavLink} from "react-router-dom";

export default function Home() {
    return (
        <div className={"Home"}>
            <div className={"home"}>
                <div className={"homeLeftPane"}>
                    <h2 className={"slogan1"}>Your journey starts here</h2>
                    <h1 className={"slogan2"}>Rent with</h1>
                    <h1 className={"slogan2 ease"}>ease</h1>
                </div>
                <div className={"homeRightPane"}>
                    <NavLink id={"portalButton"} className={"FormSubmitButton"} to={"/portal"}>Rent Now</NavLink>
                </div>
            </div>
        </div>
    )
}