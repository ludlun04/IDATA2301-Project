import "./CarAttribute.css";

export default function CarAttribute(props) {
  return <div className="CarAttributeCard">
    <img alt="attribute" className={"CarAttributeImage"} src={props.svg}/>
    <p className="CarAttributeText">{props.name}</p>
    <p className="carAttributeValue">{props.description}</p>
  </div>
}