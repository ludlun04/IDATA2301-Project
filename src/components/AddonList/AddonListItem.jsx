import { useState } from "react";
import "./AddonListItem.css";

/**
 * 
 * @param {Object} addon - The addon object containing id, name, and price 
 * @returns AddonListItem component
 */
const AddonListItem = ({ addon }) => {
  const [selected, setSelected] = useState(false);

  const onClicked = () => { 
    console.log("Clicked on addon");
    setSelected(!selected);
  }

  return (
    <div className={"AddonListItem"} onClick={onClicked}>
      <p>{addon.getName()}</p>
      <div className={"AddonListItemRight"}>
        <p>200 kr</p>
        <input type="checkbox" checked={selected} className="AddonCheckbox" />
      </div>
    </div>
  );
}

export default AddonListItem;