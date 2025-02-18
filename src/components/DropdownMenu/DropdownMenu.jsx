import "./DropdownMenu.css";
import Arrow from "../../resources/icons/arrowDeprecated.svg";
import { useState } from "react";

export default (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div className={"DropdownMenu"}>
      <button onClick={toggleOpen} className={"DropdownMenuHeader"}>
        <h3 className={"DropdownMenuTitle"}>{props.title}</h3>
        <img src={Arrow} alt="Arrow" className={isOpen ? "DropdownMenuArrowOpen" : "DropdownMenuArrow"} />
      </button>

      <div className={isOpen ? "DropdownMenuListOpen" : "DropdownMenuList"}>
        {props.children}
      </div>
    </div>
  )
}