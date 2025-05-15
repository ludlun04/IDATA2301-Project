import "./DropdownMenu.css";
import Arrow from "../../resources/icons/arrowDeprecated.svg";
import { useState } from "react";

/**
 * DropdownMenu component
 * Displays a dropdown menu with a button to toggle its visibility.
 *
 * @param {string} alwaysShownContent - The content that is always shown in the button.
 * @param {string} className - The class name to be applied to the dropdown menu.
 * @param {JSX.Element[]} children - The content of the dropdown menu.
 * @returns {JSX.Element}
 */
const DropdownMenu = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div className={props.className}>
      <section className={"DropdownMenu"}>
        <button onClick={toggleOpen} className={"dropdownMenuButton"}>
          {props.alwaysShownContent}
          <img src={Arrow} alt="Arrow" className={isOpen ? "DropdownMenuArrowOpen" : "DropdownMenuArrow"} />
        </button>

        <div className={isOpen ? "DropdownMenuListOpen" : "DropdownMenuList"}>
          {props.children}
        </div>
      </section>
    </div>
  )
}

export default DropdownMenu;