import "./Portal.css";
import CarCard from "../../components/CarCard/CarCard";
import CarSearchSortSection from "../../components/CarSearchSortSection/CarSearchSortSection";
import FiltersSection from "../../components/FilterSection/FiltersSection";
import ErrorFetchingDataMessage
  from "../../components/ErrorFetchingDataMessage/ErrorFetchingDataMessage";
import {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
import {CarAPI} from "../../api/CarAPI";
import {CompanyAPI} from "../../api/CompanyAPI";
import {CarBrandAPI} from "../../api/CarBrandAPI";
import {FuelTypeAPI} from "../../api/FuelTypeAPI";
import {FiltersContext} from "../../context/FiltersContext";
import {ImageAPI} from "../../api/ImageAPI";

export default function Portal() {

  const [centerFiltersDisplayed, setCenterFiltersDisplayed] = useState(false);

  const [cars, setCars] = useState([]);
  const [tempImage, setTempImage] = useState(null);

  const [loading, setLoading] = useState(true);
  const [errorMessageActive, setErrorMessageActive] = useState(false);

  // all the possible choices the user can make
  const [possibleBrands, setPossibleBrands] = useState([]);
  const [possibleFuelTypes, setPossibleFuelTypes] = useState([]);
  const [possibleSellers, setPossibleSellers] = useState([]);
  const [possibleSeats, setPossibleSeats] = useState([]);

  // the choices the user has made
  const [chosenBrands, setChosenBrands] = useState([]);
  const [chosenFuelTypes, setChosenFuelTypes] = useState([]);
  const [chosenSellers, setChosenSellers] = useState([]);
  const [chosenSeats, setChosenSeats] = useState([]);
  const [chosenFromTime, setChosenFromTime] = useState(null);
  const [chosenToTime, setChosenToTime] = useState(null);
  const [chosenFromPrice, setChosenFromPrice] = useState(null);
  const [chosenToPrice, setChosenToPrice] = useState(null);
  const [chosenKeyword, setChosenKeyword] = useState("");

  // the filters object that will be sent to the API
  const filters = {
    brands: chosenBrands,
    fuelTypes: chosenFuelTypes,
    sellers: chosenSellers,
    seats: chosenSeats,
    fromTime: chosenFromTime,
    toTime: chosenToTime,
    fromPrice: chosenFromPrice,
    toPrice: chosenToPrice,
    keyword: chosenKeyword
  }

  // search part of the URL, for maintaining state on refresh
  const searchParams = useLocation().search;
  const urlParams = new URLSearchParams(searchParams);

  const getDateFromUrl = (dateString) => {
    const separatedDate = dateString.split("-");
    const year = Number(separatedDate[0]);
    const month = Number(separatedDate[1]) - 1; // months are 0-indexed
    const day = Number(separatedDate[2]);
    return new Date(year, month, day);
  }

  const updateChoicesFromSearchParams = () => {
    const brandsString = urlParams.get("brand");
    const fuelTypesString = urlParams.get("fuel_type");
    const sellersString = urlParams.get("seller");
    const seatsString = urlParams.get("seats");
    const betweenTimesString = urlParams.get("between_times");
    const fromTime = urlParams.get("from_time");
    const fromPrice = urlParams.get("from_price");
    const toPrice = urlParams.get("to_price");
    const keyword = urlParams.get("keyword");

    if (brandsString) {
      const brands = brandsString.split(",")
      setChosenBrands(brands);
    }
    if (fuelTypesString) {
      const fuelTypes = fuelTypesString.split(",");
      setChosenFuelTypes(fuelTypes);
    }
    if (sellersString) {
      const sellers = sellersString.split(",");
      setChosenSellers(sellers);
    }
    if (seatsString) {
      const seats = seatsString.split(",");
      // convert the string array to a number array
      setChosenSeats(seats.map(seat => {
        return Number(seat);
      }));
    }
    if (betweenTimesString) {
      const betweenTimes = betweenTimesString.split(",");
      setChosenFromTime(getDateFromUrl(betweenTimes[0]));
      setChosenToTime(getDateFromUrl(betweenTimes[1]));
    }
    if (fromTime) {
      setChosenFromTime(getDateFromUrl(fromTime));
    }
    if (fromPrice) {
      setChosenFromPrice(Number(fromPrice));
    }
    if (toPrice) {
      setChosenToPrice(Number(toPrice));
    }
    if (keyword) {
      setChosenKeyword(keyword);
    }
  }

  const toggleFiltersDisplayed = () => {
    setCenterFiltersDisplayed(!centerFiltersDisplayed);
  }

  const fetchCars = async (filters) => {
    const cars = await CarAPI.getAllCars(filters);
    setCars(cars);
    setLoading(false);
    console.log("Fetched cars: " + cars);
  };

  const fetchManufacturers = async () => {
    const manufacturers = await CarBrandAPI.getBrandsUsedInCars();
    setPossibleBrands(manufacturers);
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
    if (searchParams) {
      updateChoicesFromSearchParams();
    }
  }, [searchParams]);

  useEffect(() => {
    fetchCars(filters);
  }, [
    chosenBrands,
    chosenFuelTypes,
    chosenSellers,
    chosenSeats,
    chosenFromTime,
    chosenToTime,
    chosenFromPrice,
    chosenToPrice,
    chosenKeyword
  ]);

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

  const filtersSectionInContext = !loading && (
    <FiltersContext.Provider value={{
      possibleBrands,
      possibleFuelTypes,
      possibleSellers,
      possibleSeats,
      chosenBrands,
      setChosenBrands,
      chosenFuelTypes,
      setChosenFuelTypes,
      chosenSellers,
      setChosenSellers,
      chosenSeats,
      setChosenSeats,
      chosenFromTime,
      setChosenFromTime,
      chosenToTime,
      setChosenToTime,
      chosenFromPrice,
      setChosenFromPrice,
      chosenToPrice,
      setChosenToPrice
    }}>
      <FiltersSection/>
    </FiltersContext.Provider>
  );

  return (
    <div className={"Portal"}>
      <div className={"portalLeftFilters"}>
        {filtersSectionInContext}
      </div>
      <div className={"portalVerticalSection"}>
        {!loading &&
          <CarSearchSortSection
            chosenKeyword={chosenKeyword}
            setChosenKeyword={setChosenKeyword}
            cars={cars}
            setCars={setCars}
          />
        }
        <div className={`portalVerticalSectionFilters ${centerFiltersDisplayed ? " active" : ""}`}>
          {filtersSectionInContext}
        </div>


        <button className={`portalVerticalSectionButton ${centerFiltersDisplayed ? "" : " active"}`}
                onClick={toggleFiltersDisplayed}>Filters
        </button>
        {errorMessageActive ?
          <ErrorFetchingDataMessage/>
          :
          <div className={`portalCarCards ${centerFiltersDisplayed ? "" : " active"}`}>
            {loading ? <p>Loading...</p> : cars.map((car) => (
              <CarCard key={car.getId()} car={car} img={tempImage}/>
            ))}
          </div>
        }

      </div>

    </div>
  )
}