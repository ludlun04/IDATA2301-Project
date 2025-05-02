import "./CarFilterToggle.css"
import React, {useEffect, useState} from "react";

const CarFilterToggle = ({value, active, onClick, className}) => {

  const [isActive, setIsActive] = useState(active);

  useEffect(() => {
    setIsActive(active);
  }, [active]);

  return (
    <div className={className}>
      <div className={"CarFilterToggle"}>
        <button onClick={() => onClick(value, !isActive)}>
          <div className={"carFilterToggleButtonContent"}>
            <p>{value}</p>
            <input
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