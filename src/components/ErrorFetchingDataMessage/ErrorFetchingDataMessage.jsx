import "./ErrorFetchingDataMessage.css"

/**
 * A component that displays an error message when data cannot be retrieved.
 * 
 * @returns {JSX.Element}
 */
export default function ErrorFetchingDataMessage() {
  return (
      <p className={"ErrorFetchingDataMessageDescription"}>Could not retrieve data. Try refreshing the page.</p>
  )
}