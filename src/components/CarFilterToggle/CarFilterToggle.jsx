import "./CarFilterToggle.css"
import React, {useEffect, useState} from "react";

/**
 * CarFilterToggle component
 * Displays a toggle button for filtering cars based on a specific value.
 * 
 * @param {string} value - The value to be displayed on the toggle button.
 * @param {boolean} active - Indicates whether the toggle is active or not.
 * @param {function} onClick - Function to be called when the toggle is clicked.
 * @param {string} className - Additional class name for styling.
 * @returns {JSX.Element}
 */
const CarFilterToggle = ({value, active, onClick, className, id}) => {

  const [isActive, setIsActive] = useState(active);

  useEffect(() => {
    setIsActive(active);
  }, [active]);

  return (
    <div className={className}>
      <div className={"CarFilterToggle"}>
        <button onClick={() => onClick(value, !isActive)}>
          <div className={"carFilterToggleButtonContent"}>
            <label htmlFor={id}>{value}</label>
            <input
              id={id}
              type="checkbox"
              checked={isActive}
              onChange={(event) => event.stopPropagation()}
            />
          </div>

        </button>
      </div>
    </div>

  )
}

export default CarFilterToggle;