import "./Company.css"
import DetailsSection from "../../components/DashboardComponents/User/DetailsSection";
import {Rental} from "../../model/Rental";
import {User} from "../../model/User";
import {Car} from "../../model/Car";
import CarDetailsTable from "../../components/CarDetailsTable/CarDetailsTable";
import {useState} from "react";

export default function Company() {

  const details = "details";
  const cars = "cars";
  const third = "third";

  const [active, setActive] = useState(details);

  const getRentals = () => {
    const users = User.getSampleUsers();
    const cars = Car.getSampleCars();

    return [
      new Rental(users[0], new Date("2025-03-01"), new Date("2025-03-03"), cars[0]),
      new Rental(users[1], new Date("2025-04-01"), new Date("2025-03-05"), cars[0]),
      new Rental(users[0], new Date("2025-06-01"), new Date("2025-03-09"), cars[2]),
      new Rental(users[2], new Date("2025-01-01"), new Date("2025-03-03"), cars[1])
    ];
  }

  const rentals = getRentals();

  const onEdit = () => {
    console.log("editing");
  }

  const onResetPassword = () => {
    console.log("resetting password");
  }

  return (
    <div className={"Company"}>
      <section className={"companyDetailsLinks"}>
        <button onClick={() => setActive(details)}>Details</button>
        <button onClick={() => setActive(cars)}>Cars</button>
        <button onClick={() => setActive(third)}>Third</button>
      </section>
      <div className={"companyDetailsMainSection"}>
        <DetailsSection
          className={"companyDetailsDetailsSection"}
          style={active === details ? { display: 'block' } : { display: 'none' }}
          onEdit={onEdit}
          onResetPassword={onResetPassword}
        />
        <CarDetailsTable
          className={"companyDetailsCars"}
          style={active === cars ? { display: 'block' } : { display: 'none' }}
          rentals={getRentals()}
        />
        <p
          style={active === third ? { display: 'block' } : { display: 'none' }}
        >Third section...</p>
      </div>
    </div>
  )
}