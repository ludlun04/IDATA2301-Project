import "./Company.css"
import DetailsSection from "../../components/DashboardComponents/DetailsSection/DetailsSection";
export default function Company() {

  const info = [
    ["Company", "AB Rentals"],
    ["Name", "Username"],
    ["Email", "U***e@gmail.com"],
    ["Phone Number", "91902345"],
    ["First Name", "John"],
    ["Last Name", "Doe"],
    ["Address", "Borgundvegen"],
    ["Birthdate", "12.02.1994"]
  ];

  const onEdit = () => {
    console.log("editing");
  }

  const onResetPassword = () => {
    console.log("resetting password");
  }

  return (
    <div className={"Company"}>
      <div className={"companyDetailsLinks"}>
        <p>Link 1</p>
        <p>Link 2</p>
        <p>Link 3</p>
      </div>
      <DetailsSection className={"companyDetailsDetailsSection"} info={info} onEdit={onEdit} onResetPassword={onResetPassword}/>
    </div>
  )
}