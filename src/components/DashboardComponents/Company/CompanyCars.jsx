import "./CompanyCars.css"
import CarDetailsTable from "./CarDetailsTable/CarDetailsTable";
import {Car} from "../../../model/Car";

export default function CompanyCars() {

  return (
    <main className={"CompanyCars"}>
      <CarDetailsTable cars={Car.getSampleCars()}/>
    </main>
  )
}