import "./DetailsSection.css"

export default function DetailsSection(props) {
  return (
    <div className={props.className}>
      <h1>Details</h1>
      <div className="DetailsSection">
        {props.info.map((row, index) => (
          <div key={index} className="detailsSectionRow">
            <p className={"detailsSectionDescriptor"}>{row[0]}</p>
            <p>{row[1]}</p>
          </div>
        ))}
        <div className={"detailsSectionButtonContainer"}>
          <button className={"FormSubmitButton detailsSectionButton"} onClick={props.onEdit}>Edit</button>
          <button className={"FormSubmitButton detailsSectionButton"} onClick={props.onResetPassword}>Reset Password</button>
        </div>
      </div>
    </div>

  );
}