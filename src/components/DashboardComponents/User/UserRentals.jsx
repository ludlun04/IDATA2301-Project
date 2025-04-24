import "./UserRentals.css"
import CarCard from "../../CarCard/CarCard";

export default function UserRentals() {
    return (
        <main className={"UserRentals"}>
            <div className={"UserRentalsButtonContainer"}>
                <button>Active</button>
                <button>History</button>
            </div>
            <div className={"UserRentalsContainer"}>
            </div>
        </main>
    )
}