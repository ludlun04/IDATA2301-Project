import DatePicker from "react-datepicker"
import "./DatePickerField.css"

export default function DatePickerField(props) {
  return (
    <div className="DatePickerField">
      <p>{props.title}</p>
      <DatePicker className={"DatePickerFieldInput"} />
    </div>
  )
}