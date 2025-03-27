import "./EmployeeCard.css";

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