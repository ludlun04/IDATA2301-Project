import {useState} from "react";
import {UsersAPI} from "../../api/UsersAPI";
import starFilled from "../../resources/icons/starFilled.svg";
import starUnfilled from "../../resources/icons/starUnfilled.svg";
import "./CarFavoriteButton.css";

const CarFavoriteButton = ({car, className}) => {

  const [isFavorite, setIsFavorite] = useState(car.getFavorite());

  const handleFavoriteButtonClick = async (event) => {
    event.stopPropagation(); // Prevent the click event from bubbling up

    try {
      const isFavorite = await UsersAPI.setFavorite(car, !car.getFavorite());
      if (isFavorite !== null) {
        car.setFavorite(isFavorite);
        setIsFavorite(isFavorite);
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