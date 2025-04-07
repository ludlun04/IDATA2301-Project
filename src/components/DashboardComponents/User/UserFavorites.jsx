import "./UserFavorites.css"
import CarCard from "../../CarCard/CarCard";

export default function UserFavorites() {
    return (
        <main className={"UserFavorites"}>
            <div className={"UserFavoritesContainer"}>
                <CarCard price={4325} availability={true} seats={4} year={2021} name={"Mazda CX3"} company={"Steike Rentals"} isFavorite={true}/>
                <CarCard price={4325} availability={true} seats={4} year={2021} name={"Mazda CX3"} company={"Steike Rentals"} isFavorite={true}/>
                <CarCard price={4325} availability={true} seats={4} year={2021} name={"Mazda CX3"} company={"Steike Rentals"} isFavorite={true}/>
                <CarCard price={4325} availability={true} seats={4} year={2021} name={"Mazda CX3"} company={"Steike Rentals"} isFavorite={true}/>
                <CarCard price={4325} availability={true} seats={4} year={2021} name={"Mazda CX3"} company={"Steike Rentals"} isFavorite={true}/>
                <CarCard price={4325} availability={true} seats={4} year={2021} name={"Mazda CX3"} company={"Steike Rentals"} isFavorite={true}/>
                <CarCard price={4325} availability={true} seats={4} year={2021} name={"Mazda CX3"} company={"Steike Rentals"} isFavorite={true}/>
                <CarCard price={4325} availability={true} seats={4} year={2021} name={"Mazda CX3"} company={"Steike Rentals"} isFavorite={true}/>

            </div>
        </main>
    )
}