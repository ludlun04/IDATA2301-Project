import "./Portal.css";
import CarCard from "../../components/CarCard/CarCard";
import CarSearchSortSection from "../../components/CarSearchSortSection/CarSearchSortSection";
import FilterSection from "../../components/FilterSection/FilterSection";
import axios from "axios";

axios.defaults.headers.post['Content-Type'] = 'application/json';


export default function Portal() {
    const handleUserChoice = async (searchItem, filterItem) => {
        console.log(searchItem);
        console.log(filterItem);
        try {
            const response = await axios.get('http://localhost:8080/company');
            const data = response.data;
            console.log(data);
        } catch (e) {
            console.log(e.message);
        }
    }
    return (
        <div className={"Portal"}>
            <CarSearchSortSection onChange={handleUserChoice}/>
            <FilterSection />
            <div className={"CarList"}>
                <CarCard price={5234} availability={false} seats={2} year={2002} name={"BMW M3"} company={"Kacper Rentals AS"} />
                <CarCard price={4325} availability={true} seats={4} year={2021} name={"Mazda CX3"} company={"Steike Rentals"} />
            </div>
        </div>
    )
}