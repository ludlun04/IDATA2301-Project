import "./CarAttribute.css";

/**
 * A component that displays a car attribute.
 * 
 * @param {string} name - The name of the attribute.
 * @param {string} description - The description of the attribute.
 * @param {string} svg - The svg image of the attribute.
 * @returns {JSX.Element}
 */
export default function CarAttribute(props) {
  return <div className="CarAttributeCard">
    <img alt="attribute" className={"CarAttributeImage"} src={props.svg}/>
    <p className="CarAttributeText">{props.name}</p>
    <p className="carAttributeValue">{props.description}</p>
  </div>
}