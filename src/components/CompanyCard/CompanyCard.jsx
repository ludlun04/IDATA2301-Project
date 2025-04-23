import bmw from "./../../resources/images/bmw.jpg";
import "./CompanyCard.css"

const CompanyCard = ({ car }) => {
  return (
    <div className={"RentCompanyCard"}>
      <img alt="Car" className={"RentCompanyImage"} src={bmw} />
      <h2>{car.getCompanyName()}</h2>
    </div>
  )
}


export default CompanyCard;