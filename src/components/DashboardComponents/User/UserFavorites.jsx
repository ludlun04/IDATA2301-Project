import "./UserFavorites.css"
import CarCard from "../../CarCard/CarCard";
import {useEffect, useState} from "react";
import {UsersAPI} from "../../../api/UsersAPI";
import {CarAPI} from "../../../api/CarAPI";

export default function UserFavorites() {
    const [favoritedCars, setFavoritedCars] = useState([]);


    useEffect(() => {
        async function fetchFavoritedCars() {
            const favorites = await CarAPI.getCurrentUserFavorites()

            if (favorites) {
                setFavoritedCars(favorites)
            }
        }

        fetchFavoritedCars();
    }, []);

    console.log(favoritedCars)

    return (
        <main className={"UserFavorites"}>
            <div className={"UserFavoritesContainer"}>
                {favoritedCars.map((car) => (
                    <CarCard key={car.getId()} car={car} />
                ))}
            </div>
        </main>
    )
}