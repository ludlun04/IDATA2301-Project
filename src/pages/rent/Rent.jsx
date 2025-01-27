import "./Rent.css"
import DatePickerField from "../../components/DatePickerField/DatePickerField"
import bmw from "./../../resources/images/bmw.jpg";

export default function Rent() {
  return (
    <main>
      <div className="Information">
        <img alt="" className={"CarImage"} src={bmw} />
        <h1>Hello World!</h1>

        <section className={"Attributes"}>
          <h2>Attributes</h2>
        </section>
        <h2>Description</h2>
        <p>This is a description for this car</p>
      </div>

      <div className="Interaction">
        <div>
        <div className="CompanyCard">
          <img src="" alt="Company logo" />
          <h2>Company</h2>
        </div>

        <div className="RentSection">
          <div className="DurationSelection">
            <DatePickerField title={"From"}/>
            <DatePickerField title={"To"}/>
          </div>
        </div>

        <div className="DailyPrice">
          <p className="Title">kr/day</p>
          <p className="Content">1000 kr</p>
        </div>

        <div className="TotalPrice">
          <p className="Title">Total</p>
          <p className="Content">10000 kr</p>
        </div>

        <input className="RentButton" type="button" value="Rent Now" />
        </div>
      </div>
    </main>
  )
}