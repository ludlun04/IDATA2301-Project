import "./CompanyCars.css"
import CarDetailsTable from "./CarDetailsTable/CarDetailsTable";
import {User} from "../../../model/User";
import {Car} from "../../../model/Car";
import {Rental} from "../../../model/Rental";

export default function CompanyCarsHistory() {
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

    return (
        <main className={"CompanyCars"}>
            <CarDetailsTable rentals={getRentals()}/>
        </main>
    )
}