import "./About.css"
import EmployeeCard from "../../components/EmployeeCard";

export default function About() {
    return (
        <div className={"About"}>
            <div className={"aboutOurStory"}>
                <h1>Our Story</h1>
                <p>This is very cool</p>
            </div>
            <div className={"aboutEmployees"}>
                <h1>Employees</h1>
                <div className={"aboutEmployeeCardContainer"}>
                    <EmployeeCard></EmployeeCard>
                    <EmployeeCard></EmployeeCard>
                    <EmployeeCard></EmployeeCard>
                </div>
            </div>
        </div>

    )
}