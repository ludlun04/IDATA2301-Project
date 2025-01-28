import "./EmployeeCard.css"
import vedum from "../resources/images/vedum.png"

export default function EmployeeCard(props) {
    return (
        <div className={"EmployeeCard"}>
            <div className={"employeeCardContentContainer"}>
                <div className={"employeeCardImageContainer"}>
                    <img src={vedum} alt={"The finance minister of norway, sir vedum, is smiling."}/>
                </div>
                <h1 className={"employeeCardHeader"}>Vedum</h1>
                <p className={"employeeCardParagraph"}>Finance minister</p>
            </div>

        </div>
    )
}