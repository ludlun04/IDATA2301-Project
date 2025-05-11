import { Company } from "../../model/Company";
import "./CompanyCard.css"

/**
 * A component that displays a car company card.
 * 
 * @param {Company} company - Company to be displayed
 * @returns {JSX.Element}
 */
const CompanyCard = ({ company }) => {
  return (
    <div className={"RentCompanyCard"}>
        <div className={"RentCompanyIcon"}>
            <p className={"RentCompanyLetter"}>{company.getName().charAt(0)}</p>
        </div>
      <h2>{company.getName()}</h2>
    </div>
  )
}


export default CompanyCard;