import "./Portal.css";
import CarCard from "../../components/CarCard/CarCard";
import CarSearchSortSection from "../../components/CarSearchSortSection/CarSearchSortSection";
import FiltersSection from "../../components/FilterSection/FiltersSection";
import ErrorFetchingDataMessage
  from "../../components/ErrorFetchingDataMessage/ErrorFetchingDataMessage";
import {useEffect, useState} from "react";
import {CarAPI} from "../../api/CarAPI";
import {CompanyAPI} from "../../api/CompanyAPI";
import {CarBrandAPI} from "../../api/CarBrandAPI";
import {FuelTypeAPI} from "../../api/FuelTypeAPI";

export default function Portal() {

  const [centerFiltersDisplayed, setCenterFiltersDisplayed] = useState(false);

  const [cars, setCars] = useState([]);

  const [possibleManufacturers, setPossibleManufacturers] = useState([]);
  const [possibleFuelTypes, setPossibleFuelTypes] = useState([]);
  const [possibleSellers, setPossibleSellers] = useState([]);
  const [possibleSeats, setPossibleSeats] = useState([]);



  const [loading, setLoading] = useState(true);
  const [errorMessageActive, setErrorMessageActive] = useState(false);

  const [chosenManufacturers, setChosenManufacturers] = useState([]);
  const [chosenFuelTypes, setChosenFuelTypes] = useState([]);
  const [chosenSellers, setChosenSellers] = useState([]);
  const [chosenSeats, setChosenSeats] = useState([]);
  const [chosenTimes, setChosenTimes] = useState([]);

  useEffect(() => {
    const filters = {
      manufacturers: chosenManufacturers,
      fuelTypes: chosenFuelTypes,
      sellers: chosenSellers,
      seats: chosenSeats,
      times: chosenTimes
    }
    fetchCars(filters);
  }, [chosenManufacturers, chosenFuelTypes, chosenSellers, chosenSeats, chosenTimes]);

  const filters = (
    <FiltersSection
      manufacturers={possibleManufacturers}
      setChosenManufacturers={setChosenManufacturers}
      fuelTypes={possibleFuelTypes}
      setChosenFuelTypes={setChosenFuelTypes}
      sellers={possibleSellers}
      setChosenSellers={setChosenSellers}
      seats={possibleSeats}
      setChosenSeats={setChosenSeats}

    />)

  const toggleFiltersDisplayed = () => {
    setCenterFiltersDisplayed(!centerFiltersDisplayed);
  }

  const handleUserChoice = () => {
    setCenterFiltersDisplayed(false);
  }

  const fetchCars = async (filters) => {
    const cars = await CarAPI.getAllCars(filters);
    setCars(cars);
    setLoading(false);
    console.log(cars);
  };

  const fetchManufacturers = async () => {
    const manufacturers = await CarBrandAPI.getBrandsUsedInCars();
    setPossibleManufacturers(manufacturers);
    console.log(manufacturers);
  }

  const fetchFuelTypes = async () => {
    const fuelTypes = await FuelTypeAPI.getFuelTypesUsedInCars();
    setPossibleFuelTypes(fuelTypes);
    console.log(fuelTypes);
  }

  const fetchSellers = async () => {
    const companies = await CompanyAPI.getCompaniesUsedInCars();
    setPossibleSellers(companies);
    console.log(companies);
  }

  useEffect(() => {
    try {
      fetchCars();
      fetchManufacturers();
      fetchFuelTypes();
      fetchSellers();
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