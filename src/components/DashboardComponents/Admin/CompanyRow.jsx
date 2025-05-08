import "./CompanyRow.css"
import {useState} from "react";
import EditCompanyDialogue from "../EditCompanyDialogue";
import {createPortal} from "react-dom";

export default function CompanyRow({ company }) {
    const [portal, setPortal] = useState(<></>);

    let onClose = () => {
        setPortal(<></>);
    }

    let editCompany = () => {
        setPortal(createPortal(<EditCompanyDialogue onClose={onClose} company={company} />, document.body));
    }

  return (
    <tr className={"companyRow"}>
    {portal}
      <td><p>{company.getId()}</p></td>
      <td><p>{company.getName()}</p></td>
      <td><p>{company.getAddress().getStreetAddress()}</p></td>
      <td><button onClick={editCompany}>{"Edit"}</button></td>
    </tr>
  )
}