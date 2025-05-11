import "./Loader.css"

/**
 * A component that displays a loading spinner.
 * 
 * @param {string} className - The class name of the loader.
 * @returns {JSX.Element}
 */
export default function Loader(props) {
  return (
    <div className={props.className}>
      <div className="loader"></div>
    </div>
  )
}