import "./AddonList.css";
import AddonListItem from "./AddonListItem";

const AddonList = ({ addons }) => {
  return (
    <div className={"AddonList"}>
      <h3 className={"AddonListTitle"}>Addons</h3>
      <div className={"AddonItemsContainer"}>
        {addons.map((addon) => (
          <AddonListItem key={addon.getId()} addon={addon}/>
        ))}
      </div>
    </div>
  )
}



export default AddonList;