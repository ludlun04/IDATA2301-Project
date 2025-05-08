import "./CompanyCars.css"
import {useParams} from "react-router-dom";
import CarDetailsTable from "./CarDetailsTable/CarDetailsTable";
import {CarAPI} from "../../../api/CarAPI";
import {CompanyAPI} from "../../../api/CompanyAPI";
import {useEffect, useState} from "react";

export default function CompanyCars() {
    const idParam = useParams();

    const [cars, setCars] = useState([]);

  useEffect(() => {
    const getCarsFromApi = async () => {
      const cars = await CompanyAPI.getCarsBelongingToCompany(idParam.id);
      setCars(cars);
    }
    getCarsFromApi();
  }, []);


  return (
    <main className={"CompanyCars"}>
        <CarDetailsTable
          cars={cars}
        />
    </main>
  )
}