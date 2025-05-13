import "./UserFavorites.css"
import CarCard from "../../CarCard/CarCard";
import {useEffect, useState} from "react";
import Loader from "../..//loader/Loader";
import ErrorFetchingDataMessage from "../../ErrorFetchingDataMessage/ErrorFetchingDataMessage";
import {CarAPI} from "../../../api/CarAPI";

/**
  * UserFavorites component
  * Displays a list of cars that the user has favorited.
  * The component fetches the user's favorited cars from the API and displays them in a grid format.
  * If there are no favorited cars, a message is displayed.
  * If there is an error fetching the data, an error message is displayed.
  *
  * @returns {JSX.Element}
  */
export default function UserFavorites() {
  const [favoritedCars, setFavoritedCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMessageActive, setErrorMessageActive] = useState(false);

  useEffect(() => {
    async function fetchFavoritedCars() {
      setLoading(true);
      try {
        const favorites = await CarAPI.getCurrentUserFavorites()

        if (favorites) {
          setFavoritedCars(favorites)
        }
        setLoading(false);
        setErrorMessageActive(false);
      } catch (error) {
        console.error("Error fetching favorited cars:", error);
        setLoading(false);
        setErrorMessageActive(true);
      }

    }

    fetchFavoritedCars();
  }, []);

  console.log(favoritedCars)

  return (
    <main className={"UserFavorites"}>
      <h1>Favorites</h1>
      {loading ?
        <Loader/>
        : errorMessageActive ?
          <ErrorFetchingDataMessage/>
          : favoritedCars.length === 0 ?
            <p>Looks like you haven't favorited any cars yet.</p>
            :
            <div className={"UserFavoritesContainer"}>
              {favoritedCars.map((car) => (
                <CarCard key={car.getId()} car={car}/>
              ))}
            </div>

      }

    </main>
  )
}