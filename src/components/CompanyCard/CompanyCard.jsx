import "./CompanyCard.css"

const CompanyCard = ({ car }) => {
  return (
    <div className={"RentCompanyCard"}>
        <div className={"RentCompanyIcon"}>
            <p className={"RentCompanyLetter"}>{car.getCompanyName().charAt(0)}</p>

        </div>
      <h2>{car.getCompanyName()}</h2>
    </div>
  )
}


export default CompanyCard;