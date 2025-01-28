import "./FaqSection.css"
import openFaqIcon from "../../resources/icons/open-faq.svg"

export default function () {
    return (
        <div className={"FaqSection"}>
            <div className={"faqSectionQuestion"}>
                This is a very important question
            </div>
            <div className={"faqSectionIconContainer"}>
                <img  src={openFaqIcon}></img>
            </div>
        </div>
    )

}