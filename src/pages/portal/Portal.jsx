import "./Portal.css";
import CarCard from "../../components/CarCard/CarCard";
import CarSearchSortSection from "../../components/CarSearchSortSection/CarSearchSortSection";
import FiltersSection from "../../components/FilterSection/FiltersSection";
import ErrorFetchingDataMessage from "../../components/ErrorFetchingDataMessage/ErrorFetchingDataMessage";
import {useEffect, useState} from "react";
import {CarAPI} from "../../api/CarAPI";

export default function Portal() {

  const [centerFiltersDisplayed, setCenterFiltersDisplayed] = useState(false);
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMessageActive, setErrorMessageActive] = useState(false);

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
        setErrorMessageActive(false);
        console.log(cars);

      } catch (error) {
        console.error("Error fetching car data:", error);
        setErrorMessageActive(true);
        setLoading(false);
      }
    };
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
        {errorMessageActive ?
          <ErrorFetchingDataMessage/>
          :
          <div className={`portalCarCards ${centerFiltersDisplayed ? "" : " active"}`}>
            {loading ? <p>Loading...</p> : cars.map((car) => (
              <CarCard key={car.getId()} car={car}/>
            ))}
          </div>
        }

      </div>

    </div>
  )
}