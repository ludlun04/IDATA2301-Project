import "./CarAttribute.css";
import Loader from "../loader/Loader";

export default function CarAttribute(props) {
  return <div className="CarAttributeCard">
    <img className={"CarAttributeImage"} src={props.svg}/>
    <h3 className="CarAttributeText">{props.name}</h3>
    <p className="carAttributeValue">{props.description}</p>
  </div>
}