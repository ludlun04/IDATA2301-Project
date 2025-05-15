import "./AddonList.css";
import AddonListItem from "./AddonListItem";

/**
 * A component that displays a list of addons.
 * 
 * @param {addon[]} addons 
 * @param {function} onAddonSelected - A function that is called when an addon is selected.
 * @returns {JSX.Element}
 */
const AddonList = ({ addons, onAddonSelected}) => {
  return (
    <section className={"AddonList"}>
      <h3 className={"AddonListTitle"}>Addons</h3>
      <div className={"AddonItemsContainer"}>
        {addons.map((addon) => (
          <AddonListItem key={addon.getId()} addon={addon} onAddonSelected={onAddonSelected}/>
        ))}
      </div>
    </section>
  )
}



export default AddonList;