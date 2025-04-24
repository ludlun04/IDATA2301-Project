import "./CompanyRow.css"

export default function CompanyRow({ company }) {
  return (
    <tr className={"companyRow"}>
      <td><p>{company.getId()}</p></td>
      <td><p>{company.getName()}</p></td>
      <td><p>{company.getAddress()}</p></td>
      <td><button onClick={() => alert(`Editing Company ${company.getId()}`)}>{"Edit"}</button></td>
    </tr>
  )
}