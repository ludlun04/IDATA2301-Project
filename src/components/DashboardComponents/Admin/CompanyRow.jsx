export default function CompanyRow({ company }) {
  return (
    <tr>
      <td>{company.getId()}</td>
      <td>{company.getName()}</td>
      <td>{company.getAddress()}</td>
      <td>{company.getEmail()}</td>
    </tr>
  )
}