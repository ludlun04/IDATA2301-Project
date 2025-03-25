import "./SelectMenu.css";
import Select from "react-select";
import { ReactComponent as DropIcon } from "../../resources/icons/arrow-filter.svg"

export default function SelectMenu(props) {
	const customComponents = {
		DropdownIndicator: () => {
			return (
				<DropIcon className="SvgIcon" />
			)
		}

	};
	return (
		<Select classNamePrefix="react-select" components={customComponents} options={props.options} value={props.value} onChange={props.onChange} />
	)
}
