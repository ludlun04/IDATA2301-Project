import "./DashboardNavBar.css"

export default function DashboardNavBar({className, pages, setCurrentPage}) {

  let onClick = (page) => {
    return () => {
      setCurrentPage(page);
    }
  }

  return (
    <div className={className}>
      <div className={"DashboardNavBar"}>
        {
          pages.map((page) => (
            <button key={page} onClick={onClick(page)}>
              {page}
            </button>
          ))
        }
      </div>
    </div>
  )
}