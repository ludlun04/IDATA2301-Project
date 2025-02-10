import "./DatePickerField.css"


export default function DatePickerField(props) {
  return (
    <div>
      <p className="">{props.title}</p>
      <input className="DatePickerFieldInput" type="date" name="RentFrom" id="Rent-From" />
    </div>
  )
}