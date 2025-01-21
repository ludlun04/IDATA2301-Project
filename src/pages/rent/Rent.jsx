import "./Rent.css"
import bmw from "./../../resources/images/bmw.jpg";

export default function Rent() {
    return (
        <div className={"Rent"}>
          <div>
            <img alt="" className={"CarImage"} src={bmw}/>
            <h1>Hello World!</h1>
            <h2>Attributes</h2>
            <section className={"Attributes"}></section>
            <h2>Description</h2>
            <p>This is a description for this car</p>
          </div>
          
          <div>
            <p>Other stuff</p>
          </div>
        </div>
    )
}