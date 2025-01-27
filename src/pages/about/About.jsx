import "./About.css"
import EmployeeCard from "../../components/EmployeeCard";

export default function About() {
    return (
        <div className={"About"}>
            <div className={"aboutOurStory"}>
                <h1 className={"aboutHeader"}>Our Story</h1>
                <p className={"aboutOurStoryParagraph"}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                    fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>
            <div className={"aboutEmployees"}>
                <h1 className={"aboutHeader"}>Employees</h1>
                <div className={"aboutEmployeeCardContainer"}>
                    <EmployeeCard></EmployeeCard>
                    <EmployeeCard></EmployeeCard>
                    <EmployeeCard></EmployeeCard>
                    <EmployeeCard></EmployeeCard>
                </div>
            </div>
            <div className={"aboutFAQ"}>
                <h1 className={"aboutHeader"}>FAQ</h1>
            </div>
        </div>

    )
}