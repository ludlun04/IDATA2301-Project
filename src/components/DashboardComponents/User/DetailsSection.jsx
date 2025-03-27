import "./DetailsSection.css"
export default function DetailsSection(props) {
    const details = [
        ["Company", "AB Rentals"],
        ["Name", "Username"],
        ["Email", "U***e@gmail.com"],
        ["Phone Number", "91902345"],
        ["First Name", "John"],
        ["Last Name", "Doe"],
        ["Address", "Borgundvegen"],
        ["Birthdate", "12.02.1994"]
    ];
  return (
    <div className={props.className} style={props.style}>
      <h1>Details</h1>
      <div className="DetailsSection">
        {details.map((row, index) => (
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