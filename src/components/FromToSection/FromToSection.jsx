import "./FromToSection.css";

const FromToSection = () => {
  return (
    <div className={"FromToSection"}>
      <p>From</p>
      <input className={"fromToSectionInput"}/>

      <p>To</p>
      <input className={"fromToSectionInput"}/>
    </div>
  )
}

export default FromToSection;