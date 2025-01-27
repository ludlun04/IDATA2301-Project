import "./DatePickerField.css"


export default function Portal(props) {
  return (
    <div>
      <p>{props.title}</p>
      <input type="date" name="RentFrom" id="Rent-From" />
    </div>
  )
}