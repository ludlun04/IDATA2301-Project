import "./FromToSection.css";
import {useState} from "react";

/**
 * FromToSection component
 * Displays two input fields for specifying a range of values.
 * The first input field is for the "From" value and the second is for the "To" value.
 *
 * @param {string} fromValue - The initial value for the "From" input field.
 * @param {function} setFromValue - Function to set the "From" value.
 * @param {string} toValue - The initial value for the "To" input field.
 * @param {function} setToValue - Function to set the "To" value.
 * @param {string} className - Additional class name for styling.
 * @returns {JSX.Element}
 */
const FromToSection = (props) => {

  const [fromValue, setFromValue] = useState(props.fromValue || undefined);
  const [toValue, setToValue] = useState(props.toValue || undefined);

  const handleFromValueChange = (event) => {
    const value = event.target.value;
    if (!isNaN(value) || value === "") {
      setFromValue(value);
      props.setFromValue(value);
    }
  }

  const handleToValueChange = (event) => {
    const value = event.target.value;
    if (!isNaN(value) || value === "") {
      setToValue(value);
      props.setToValue(value);
    }
  }

  return (
    <div className={props.className}>
      <section className={"FromToSection"}>
        <p>From</p>
        <input className={"fromToSectionInput"} value={fromValue} onChange={handleFromValueChange}/>

        <p>To</p>
        <input className={"fromToSectionInput"} value={toValue} onChange={handleToValueChange}/>
      </section>
    </div>
  )
}

export default FromToSection;