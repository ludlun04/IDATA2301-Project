import "./Portal.css";
import CarCard from "../../components/CarCard/CarCard";
import CarSearchSortSection from "../../components/CarSearchSortSection/CarSearchSortSection";
import FiltersSection from "../../components/FilterSection/FiltersSection";
import ErrorFetchingDataMessage
  from "../../components/ErrorFetchingDataMessage/ErrorFetchingDataMessage";
import {useEffect, useState} from "react";
import {CarAPI} from "../../api/CarAPI";
import {CompanyAPI} from "../../api/CompanyAPI";

export default function Portal() {

  const [centerFiltersDisplayed, setCenterFiltersDisplayed] = useState(false);

  const [cars, setCars] = useState([]);
  const [companies, setCompanies] = useState([]);

  const [loading, setLoading] = useState(true);
  const [errorMessageActive, setErrorMessageActive] = useState(false);


  const onSave = () => {
    setCenterFiltersDisplayed(false);
  }

  const filters = (<FiltersSection sellers={companies} onSave={onSave}/>)

  const toggleFiltersDisplayed = () => {
    setCenterFiltersDisplayed(!centerFiltersDisplayed);
  }

  const handleUserChoice = () => {
    setCenterFiltersDisplayed(false);
  }

  const fetchCars = async () => {
    const cars = await CarAPI.getAllCars();
    setCars(cars);
    setLoading(false);
    console.log(cars);
  };

  const fetchCompanies = async () => {
    const companies = await CompanyAPI.getCompaniesUsedInCars();
    setCompanies(companies);
    console.log(companies);
  }

  useEffect(() => {
    try {
      fetchCars();
      fetchCompanies();
      setErrorMessageActive(false);
    } catch (error) {
      console.error("Error fetching car data:", error);
      setErrorMessageActive(true);
      setLoading(false);
    }

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