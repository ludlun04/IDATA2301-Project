import {useState} from "react";
import {UsersAPI} from "../../util/api/UsersAPI";
import starFilled from "../../resources/icons/starFilled.svg";
import starUnfilled from "../../resources/icons/starUnfilled.svg";
import "./CarFavoriteButton.css";
import {useNavigate} from "react-router-dom";

/**
 * CarFavoriteButton component
 * Displays a button to mark a car as favorite or not.
 * 
 * @param {Car} Car the car to be marked as favorite
 * @param {string} className the class name to be applied to the button 
 * @returns 
 */
const CarFavoriteButton = ({car, className}) => {
  const navigate = useNavigate();

  const [isFavorite, setIsFavorite] = useState(car.getFavorite());

  const handleFavoriteButtonClick = async (event) => {
    event.stopPropagation(); // Prevent the click event from bubbling up

    try {
      const isFavorite = await UsersAPI.setFavorite(car, !car.getFavorite());
      console.log("isFavorite: ", isFavorite);
      if (isFavorite !== undefined) {
        setIsFavorite(isFavorite);
        car.setFavorite(isFavorite);
      } else {
        navigate("/sign-in")
      }
    } catch (error) {
      console.error("Failed to set favorite on car: ", error);
    }


  }


  return (
    <div className={className}>
      <button className={"CarFavoriteButton"} onClick={handleFavoriteButtonClick}>
        <img className={"favoriteButtonIcon"} src={isFavorite ? starFilled : starUnfilled}
             alt={starUnfilled}/>
      </button>
    </div>
  )
}

export default CarFavoriteButton;