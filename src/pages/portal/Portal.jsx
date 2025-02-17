import "./Portal.css"
import CarCard from "../../components/CarCard/CarCard";
import FilterSection from "../../components/FilterSection/FilterSection";

export default function Portal() {
  return (
    <div className={"Portal"}>
      <FilterSection/>
      <div className={"CarList"}>
        <CarCard price={5234} availability={false} seats={2} year={2002} name={"BMW M3"} company={"Kacper Rentals AS"} />
        <CarCard price={4325} availability={true} seats={4} year={2021} name={"Mazda CX3"} company={"Steike Rentals"} />
      </div>
    </div>
  )
}