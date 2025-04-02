import "./Portal.css";
import CarCard from "../../components/CarCard/CarCard";
import CarSearchSortSection from "../../components/CarSearchSortSection/CarSearchSortSection";
import FiltersSection from "../../components/FilterSection/FiltersSection";
import {useState} from "react";

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

          <CarCard price={5234} availability={false} seats={2} year={2002} name={"BMW M3"}
                   company={"Kacper Rentals AS"} isFavorite={false}/>
          <CarCard price={4325} availability={true} seats={4} year={2021} name={"Mazda CX3"}
                   company={"Steike Rentals"} isFavorite={true}/>
        </div>

      </div>

    </div>
  )
}