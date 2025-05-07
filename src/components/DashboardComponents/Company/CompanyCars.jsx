import "./CompanyCars.css"
import {useParams} from "react-router-dom";

export default function CompanyCars() {
    const id = useParams();
    console.log(id);
  return (
    <main className={"CompanyCars"}>
        Test
    </main>
  )
}