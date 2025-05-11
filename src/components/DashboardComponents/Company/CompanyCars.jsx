import "./CompanyCars.css"
import {useParams} from "react-router-dom";
import CarDetailsTable from "./CarDetailsTable/CarDetailsTable";
import {CompanyAPI} from "../../../api/CompanyAPI";
import {useEffect, useState} from "react";

/**
 * CompanyCars component
 * Displays a list of cars belonging to a specific company.
 * The company ID is obtained from the URL parameters.
 *
 * @returns {JSX.Element}
 */
export default function CompanyCars() {
    const idParam = useParams();

    const [cars, setCars] = useState([]);

  useEffect(() => {
    const getCarsFromApi = async () => {
      const cars = await CompanyAPI.getCarsBelongingToCompany(idParam.id);
      setCars(cars);
    }
    getCarsFromApi();
  }, [idParam.id]);


  return (
    <main className={"CompanyCars"}>
        <CarDetailsTable
          cars={cars}
        />
    </main>
  )
}