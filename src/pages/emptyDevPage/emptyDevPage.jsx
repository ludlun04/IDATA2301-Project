import "./emptyDevPage.css"
import CarCard from "../../components/CarCard/CarCard";

export default function EmptyDevPage() {
  return (
    <div className={"EmptyDevPage"}>
      <CarCard price={4325} availability={true} seats={4} year={2021} name={"Mazda CX3"} company={"Steike Rentals"} isFavorite={true} />
    </div>
  )
}