import { useState } from "react";
import "./AddonListItem.css";

/**
 * 
 * @param {Object} addon - The addon object containing id, name, and price 
 * @returns AddonListItem component
 */
const AddonListItem = ({ addon, onAddonSelected }) => {
  const [selected, setSelected] = useState(false);

  const onClicked = () => { 
    console.log("Clicked on addon");
    setSelected(!selected);
    onAddonSelected(addon, !selected);
  }

  return (
    <div className={"AddonListItem"} onClick={onClicked}>
      <p>{addon.getName()}</p>
      <div className={"AddonListItemRight"}>
        <p>{addon.getPrice()} kr</p>
        <input type="checkbox" checked={selected} className="AddonCheckbox" />
      </div>
    </div>
  );
}

export default AddonListItem;