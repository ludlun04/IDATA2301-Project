import "./FromToSection.css";

const FromToSection = (props) => {
  return (
    <div className={props.className}>
      <div className={"FromToSection"}>
        <p>From</p>
        <input className={"fromToSectionInput"}/>

        <p>To</p>
        <input className={"fromToSectionInput"}/>
      </div>
    </div>
  )
}

export default FromToSection;