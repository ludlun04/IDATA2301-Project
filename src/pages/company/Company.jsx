import "./Company.css"
import DetailsSection from "../../components/DashboardComponents/DetailsSection/DetailsSection";
import {Rental} from "../../model/Rental";
import {User} from "../../model/User";
import {Car} from "../../model/Car";
export default function Company() {

  const details = [
    ["Company", "AB Rentals"],
    ["Name", "Username"],
    ["Email", "U***e@gmail.com"],
    ["Phone Number", "91902345"],
    ["First Name", "John"],
    ["Last Name", "Doe"],
    ["Address", "Borgundvegen"],
    ["Birthdate", "12.02.1994"]
  ];

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
        <p>Link 1</p>
        <p>Link 2</p>
        <p>Link 3</p>
      </section>
      <DetailsSection className={"companyDetailsDetailsSection"} info={details} onEdit={onEdit} onResetPassword={onResetPassword}/>
      <table>

      </table>
    </div>
  )
}