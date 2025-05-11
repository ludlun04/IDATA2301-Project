import { useState } from "react";
import "./AddonListItem.css";
import { Addon } from "../../model/Addon";

/**
 * 
 * @param {Addon} addon - The addon object containing id, name, and price 
 * @param {function} onAddonSelected - A function that is called when an addon is selected.
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
        <input type="checkbox" checked={selected} className="AddonCheckbox" onChange={(e) => e.stopPropagation()} />
      </div>
    </div>
  );
}

export default AddonListItem;