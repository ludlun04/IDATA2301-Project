import "./Rent.css"
import DatePickerField from "../../components/DatePickerField/DatePickerField"
import bmw from "./../../resources/images/bmw.jpg";

export default function Rent() {
  return (
    <main className="RentMain">
      <div className="RentInformation">
        <img alt="" className={"RentCarImage"} src={bmw} />
        <h1>Fast cool car</h1>

        <section className={"RentAttributes"}>
          <h2>Attributes</h2>
        </section>
        <h2>Description</h2>
        <p>This is a description for this car</p>
      </div>

      <div className="RentInteraction">
        <div className="RentInteractionInner">
          <div className="RentCompanyCard">
            <div alt="Image of company renting out the car" className="RentCompanyImage"></div>
            <h2>Company</h2>
          </div>

          <div className="RentRentSection">
            <div className="RentDurationSelection">
              <DatePickerField title={"From"}/>
              <DatePickerField title={"To"}/>
            </div>
          </div>

          <div className="RentDailyPrice">
            <p className="RentTitle">kr/day</p>
            <p className="RentContent">1000 kr</p>
          </div>

          <div className="RentTotalPrice">
            <p className="RentTitle">Total</p>
            <p className="RentContent">10000 kr</p>
          </div>

          <input className="RentButton" type="button" value="Rent Now" />
          </div>
      </div>
    </main>
  )
}