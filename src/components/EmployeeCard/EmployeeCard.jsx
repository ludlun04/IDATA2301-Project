import "./EmployeeCard.css";

/**
 * A component that displays an employee card.
 * 
 * @param {string} path - The path to the image of the employee.
 * @param {string} name - The name of the employee.
 * @param {string} title - The title of the employee.
 * @returns {JSX.Element}
 */
export default function EmployeeCard(props) {
  const path = props.path;
  const name = props.name;
  const title = props.title;

  return (
    <div className={"EmployeeCard"}>
        <img className={"employeeCardImage"} src={path} alt={`Picture of ${name ? name : "unknown employee"}`}/>
      <h1 className={"employeeCardHeader"}>{name ? name : "No name available"}</h1>
      <p className={"employeeCardParagraph"}>{title ? title : "no title available"}</p>
    </div>
  )
}