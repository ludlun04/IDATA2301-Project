import "./FaqSection.css";
import openFaqIcon from "../../resources/icons/open-faq.svg";
import {useState} from "react";

export default function FaqSection() {
    const [menuActive, toggleMenuActive] = useState(false)

    const triggerToggle = () => {
        toggleMenuActive(!menuActive)
    }

    return (
        <div className={"FaqSection"}>
            <div className={"faqSectionQuestionAndIconContainer"}>
                <p className={`faqSectionQuestion`}>This is a very important question, or is it?</p>
                <img className={`faqSectionIcon ${menuActive ? "active" : ""} `} src={openFaqIcon}
                     alt={"Arrow for triggering displaying the answer of this question"}
                     onClick={triggerToggle}></img>
            </div>
            <div className={`faqSectionAnswerContainer`} style={{height: `${menuActive ? "100px" : "0px"}`}}>
                <p className={"faqSectionAnswer"}>And this is a very important answer.</p>
            </div>
        </div>
    )

}