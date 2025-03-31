import "./CompanyRow.css"

export default function CompanyRow({ company }) {
  return (
    <tr className={"companyRow"}>
      <td>{company.getId()}</td>
      <td>{company.getName()}</td>
      <td>{company.getAddress()}</td>
      <td>{company.getEmail()}</td>
      <td><button onClick={() => alert(`Editing Company ${company.getId()}`)}>{"Edit"}</button></td>
    </tr>
  )
}