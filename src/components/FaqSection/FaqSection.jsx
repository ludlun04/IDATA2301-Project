import "./FaqSection.css";
import openFaqIcon from "../../resources/icons/arrowDeprecated.svg";
import {useState, useRef, useEffect} from "react";

/**
 * FaqSection component
 * Displays a question and answer section with a toggleable answer.
 *
 * @param {string} question - The question to be displayed.
 * @param {string} answer - The answer to be displayed.
 * @param {string} className - The class name to be applied to the FAQ section.
 * @returns {JSX.Element}
 */
export default function FaqSection(props) {
    const [menuActive, toggleMenuActive] = useState(false)
    const [height, setHeight] = useState(0)
    const contentRef = useRef(null)

    const triggerToggle = () => {
        toggleMenuActive(!menuActive)
    }

    useEffect(() => {
        if (menuActive) {
            setHeight(contentRef.current.scrollHeight)
        } else {
            setHeight(0)
        }
    }, [menuActive]);

    return (
        <div className={props.className} onClick={triggerToggle}>
            <section className={"FaqSection"}>
                <div className={"faqSectionQuestionAndIconContainer"}>
                    <p className={`faqSectionQuestion`}>{props.question}</p>
                    <img className={`faqSectionIcon ${menuActive ? "active" : ""} `} src={openFaqIcon}
                         alt={"Arrow for triggering displaying the answer of this question"}
                    ></img>
                </div>
                <div className={`faqSectionAnswerContainer`} style={{height: `${height}px`}}
                     ref={contentRef}>
                    <p className={"faqSectionAnswer"}>{props.answer}</p>
                </div>
            </section>
        </div>
    )

}