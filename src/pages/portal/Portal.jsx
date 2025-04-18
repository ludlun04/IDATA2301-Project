import "./Portal.css";
import CarCard from "../../components/CarCard/CarCard";
import CarSearchSortSection from "../../components/CarSearchSortSection/CarSearchSortSection";
import FiltersSection from "../../components/FilterSection/FiltersSection";
import {useEffect, useState} from "react";
import {Car} from "../../model/Car.js";
import {CarAPI} from "../../api/CarAPI";

export default function Portal() {

  const [centerFiltersDisplayed, setCenterFiltersDisplayed] = useState(false);
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);

  const onSave = () => {
    setCenterFiltersDisplayed(false);
  }

  const filters = (<FiltersSection onSave={onSave}/>)

  const toggleFiltersDisplayed = () => {
    setCenterFiltersDisplayed(!centerFiltersDisplayed);
  }

  const handleUserChoice = () => {
    setCenterFiltersDisplayed(false);
  }

  useEffect(() => {
    const fetchCars = async () => {
        try {
            const cars = await CarAPI.getAllCars();
            setCars(cars);
            setLoading(false);
            console.log(cars);
        } catch (error) {
            console.error("Error fetching car data:", error);
        }
    }
    fetchCars();
    }, []);
  return (
    <div className={"Portal"}>
      <div className={"portalLeftFilters"}>
        {filters}
      </div>
      <div className={"portalVerticalSection"}>
        <CarSearchSortSection onChange={handleUserChoice}/>
        <div className={`portalVerticalSectionFilters ${centerFiltersDisplayed ? " active" : ""}`}>
          {filters}
        </div>


        <button className={`portalVerticalSectionButton ${centerFiltersDisplayed ? "" : " active"}`}
                onClick={toggleFiltersDisplayed}>Filters
        </button>
        <div className={`portalCarCards ${centerFiltersDisplayed ? "" : " active"}`}>
          {loading ? <p>Loading...</p> : cars.map((car) => (
                <CarCard key={car.getId()} car={car}/>
            ))}
        </div>

      </div>

    </div>
  )
}