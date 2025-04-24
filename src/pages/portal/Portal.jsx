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
  const [chosenKeyword, setChosenKeyword] = useState("");

  useEffect(() => {
    const filters = {
      manufacturers: chosenManufacturers,
      fuelTypes: chosenFuelTypes,
      sellers: chosenSellers,
      seats: chosenSeats,
      times: chosenTimes,
      keyword: chosenKeyword
    }
    fetchCars(filters);
  }, [chosenManufacturers, chosenFuelTypes, chosenSellers, chosenSeats, chosenTimes, chosenKeyword]);

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
    console.log("Fetched cars: " + cars);
  };

  const fetchManufacturers = async () => {
    const manufacturers = await CarBrandAPI.getBrandsUsedInCars();
    setPossibleManufacturers(manufacturers);
    console.log("Fetched manufacturers: " + manufacturers);
  }

  const fetchFuelTypes = async () => {
    const fuelTypes = await FuelTypeAPI.getFuelTypesUsedInCars();
    setPossibleFuelTypes(fuelTypes);
    console.log("Fetched fuel types: " + fuelTypes);
  }

  const fetchSellers = async () => {
    const companies = await CompanyAPI.getCompaniesUsedInCars();
    setPossibleSellers(companies);
    console.log("Fetched sellers: " + companies);
  }

  const fetchSeats = async () => {
    const seats = await CarAPI.getAllAmountOfSeatsInCars();
    setPossibleSeats(seats);
    console.log("Fetched seats: " + seats);
  }

  useEffect(() => {
    try {
      fetchCars();
      fetchManufacturers();
      fetchFuelTypes();
      fetchSellers();
      fetchSeats();
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
        <CarSearchSortSection setChosenKeyword={setChosenKeyword} cars={cars} setCars={setCars}/>
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