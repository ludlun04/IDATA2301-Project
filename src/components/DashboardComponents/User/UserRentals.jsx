import "./UserRentals.css"
import CarCard from "../../CarCard/CarCard";

export default function UserRentals() {
    return (
        <main className={"UserRentals"}>
            <h1>Rentals</h1>
            <div className={"UserRentalsButtonContainer"}>
                <button>Active</button>
                <button>History</button>
            </div>
            <div className={"UserRentalsContainer"}>
                <CarCard price={4325} availability={true} seats={4} year={2021} name={"Mazda CX3"} company={"Steike Rentals"} isFavorite={true}/>
                <CarCard price={4325} availability={true} seats={4} year={2021} name={"Mazda CX3"} company={"Steike Rentals"} isFavorite={true}/>
                <CarCard price={4325} availability={true} seats={4} year={2021} name={"Mazda CX3"} company={"Steike Rentals"} isFavorite={true}/>
                <CarCard price={4325} availability={true} seats={4} year={2021} name={"Mazda CX3"} company={"Steike Rentals"} isFavorite={true}/>
                <CarCard price={4325} availability={true} seats={4} year={2021} name={"Mazda CX3"} company={"Steike Rentals"} isFavorite={true}/>
            </div>
        </main>
    )
}