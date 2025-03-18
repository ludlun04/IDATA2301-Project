import "./DropdownMenu.css";
import Arrow from "../../resources/icons/arrowDeprecated.svg";
import { useState } from "react";

const DropdownMenu = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div className={"DropdownMenu"}>
      <button onClick={toggleOpen} className={"DropdownMenuHeader"}>
        <h2 className={"DropdownMenuTitle"}>{props.title}</h2>
        <img src={Arrow} alt="Arrow" className={isOpen ? "DropdownMenuArrowOpen" : "DropdownMenuArrow"} />
      </button>

      <div className={isOpen ? "DropdownMenuListOpen" : "DropdownMenuList"}>
        {props.children}
      </div>
    </div>
  )
}

export default DropdownMenu;