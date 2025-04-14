import "./CarAttribute.css";

export default function CarAttribute(props) {
  return <div className="CarAttributeCard">
    <div className="CarAttributeImage"></div>
    <p className="CarAttributeText">{props.name}</p>
  </div>
}