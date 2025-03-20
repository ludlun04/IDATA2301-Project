import "./Portal.css";
import CarCard from "../../components/CarCard/CarCard";
import CarSearchSortSection from "../../components/CarSearchSortSection/CarSearchSortSection";
import FiltersSection from "../../components/FilterSection/FiltersSection";
import axios from "axios";

axios.defaults.headers.post['Content-Type'] = 'application/json';


export default function Portal() {
    const handleUserChoice = async (searchItem, filterItem) => {
        console.log(searchItem);
        console.log(filterItem);
        try {
            const response = await axios.post('http://localhost:8080/authenticate', {username: "user", password: "password"});
            const token = response.data;
            const cars = await axios.get('http://localhost:8080/cars', { headers: {"Authorization" : `Bearer ${token}`}});
            console.log(token);
            console.log(cars)
        } catch (e) {
            console.log(e.message);
        }
    }
    return (
        <div className={"Portal"}>
            <FiltersSection />
            <div>
                <CarSearchSortSection onChange={handleUserChoice}/>
                <div className={"portalCarCards"}>

                    <CarCard price={5234} availability={false} seats={2} year={2002} name={"BMW M3"} company={"Kacper Rentals AS"} />
                    <CarCard price={4325} availability={true} seats={4} year={2021} name={"Mazda CX3"} company={"Steike Rentals"} />
                </div>
            </div>

        </div>
    )
}