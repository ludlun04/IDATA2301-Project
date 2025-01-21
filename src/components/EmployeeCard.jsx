import "./EmployeeCard.css"
import vedum from "../resources/images/vedum.png"

export default function EmployeeCard(props) {
    return (
        <div className={"EmployeeCard"}>
            <div className={"employeeCardContentContainer"}>
                <img src={vedum} alt={"The finance minister of norway, sir vedum, is smiling."}/>
                <h1>Vedum</h1>
                <p>Finance minister</p>
            </div>

        </div>
    )
}