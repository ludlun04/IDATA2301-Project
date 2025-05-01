import "./FromToSection.css";
import {useState} from "react";

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
      <div className={"FromToSection"}>
        <p>From</p>
        <input className={"fromToSectionInput"} value={fromValue} onChange={handleFromValueChange}/>

        <p>To</p>
        <input className={"fromToSectionInput"} value={toValue} onChange={handleToValueChange}/>
      </div>
    </div>
  )
}

export default FromToSection;