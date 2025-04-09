import "./Portal.css";
import CarCard from "../../components/CarCard/CarCard";
import CarSearchSortSection from "../../components/CarSearchSortSection/CarSearchSortSection";
import FiltersSection from "../../components/FilterSection/FiltersSection";
import {useState} from "react";
import {Car} from "../../model/Car.js";

export default function Portal() {

  const [centerFiltersDisplayed, setCenterFiltersDisplayed] = useState(false);

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

          <CarCard car={Car.getSampleCars()[1]}/>
          <CarCard car={Car.getSampleCars()[0]}/>
        </div>

      </div>

    </div>
  )
}