import "./CarAttribute.css";

export default function CarAttribute(props) {
  return <div className="CarAttributeCard">
    <img alt="attribute" className={"CarAttributeImage"} src={props.svg}/>
    <h3 className="CarAttributeText">{props.name}</h3>
    <p className="carAttributeValue">{props.description}</p>
  </div>
}