import "./Footer.css"
import {NavLink} from "react-router-dom";
import facebook from "./../../resources/icons/facebook.svg";
import instagram from "./../../resources/icons/instagram-yellow.svg";
import linkedin from "./../../resources/icons/linkedin.svg";

export default function Footer() {

    return (
        <div className={"Footer"}>
            <div className={"footerTop"}>
                <div className={"footerTopLeftPane"}>
                    <div className={"footerAddressPane"}>
                        <p className={"footerAddress title"}>Address</p>
                        <p className={"footerAddress"}>Brusdalsvegen 222A</p>
                        <p className={"footerAddress"}>6011 Ålesund</p>
                    </div>
                    <div className={"footerNavigationPane"}>
                        <p className={"footerNavigation"}>Navigation</p>
                        <NavLink className={"footerNavLink"} to={"/portal"}>Rent</NavLink>
                        <NavLink className={"footerNavLink"} to={"/about"}>About Us</NavLink>
                        <NavLink className={"footerNavLink"} to={"/contact"}>Contact</NavLink>
                        <NavLink className={"footerNavLink"} to={"/sign-in"}>Login</NavLink>
                    </div>
                </div>
                <div className={"footerTopRightPane"}>
                    <a href={"https://www.instagram.com/ntnu/"} target={"_blank"} rel="noreferrer">
                        <img className={"footerIcon"} src={instagram} alt="Icon"/>
                    </a>
                    <a href={"https://www.linkedin.com/school/ntnuaalesund/ "} target={"_blank"} rel="noreferrer">
                        <img className={"footerIcon"} src={linkedin} alt="Icon"/>
                    </a>
                    <a href={"https://www.facebook.com/ntnu.no"} target={"_blank"} rel="noreferrer">
                        <img className={"footerIcon"} src={facebook} alt="Icon"/>
                    </a>
                </div>
            </div>
            <div className={"footerBottom"}>
                <p className={"ntnuDisclaimer"}>This website is a result of a university group project, performed in the course IDATA2301 Web technologies, at NTNU. All the information provided here is a result of imagination. Any resemblance with real companies or products is a coincidence.</p>
            </div>
        </div>
    )
}