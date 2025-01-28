import "./FaqSection.css";
import openFaqIcon from "../../resources/icons/open-faq.svg";
import {useState} from "react";

export default function () {
    const [menuActive, toggleMenuActive] = useState(false)

    const triggerToggle = () => {
        toggleMenuActive(!menuActive)
    }

    return (
        <div className={"FaqSection"}>
            <div className={"faqSectionQuestion"}>
                <p>This is a very important question</p>
            </div>
            <div>
                <img src={openFaqIcon} alt={"Arrow for triggering displaying the answer of this question"} onClick={triggerToggle} className={`faqSectionIcon ${menuActive ? "active" : ""} `}></img>
            </div>
        </div>
    )

}