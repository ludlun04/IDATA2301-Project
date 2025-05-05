import "./DashboardNavBar.css"
import { useEffect, useState } from "react";
import { UsersAPI } from "../../../api/UsersAPI";

export default function DashboardNavBar({ className, pages, setCurrentPage }) {
  const [roles, setRoles] = useState([]);
  const [selectedPage, setSelectedPage] = useState(null);

  let onClick = (page) => {
    return () => {
      setCurrentPage(page);
      setSelectedPage(page);
    }
  }

  useEffect(() => {
    const fetchRoles = async () => {
      const response = await UsersAPI.getCurrentAuthenticatedUserRoles();
      setRoles(response);
    }
    fetchRoles().catch(error => {
      console.error("Error fetching roles:", error);
    });

  }, []);

  console.log(roles);

  const pagesToShow = [];
  pagesToShow.push(pages[0]);
  if (roles) {
    if (roles.some(role => role.name === 'USER')) {
      pagesToShow.push("Rentals", "Favorites");
    }
    if (roles.some(role => role.name === 'ADMIN')) {
      pagesToShow.push("Users", "Companies");
    }
  }



  return (
    <div className={className}>
      <div className={"DashboardNavBar"}>
        {
          pagesToShow.map((page) => (
            <button key={page} onClick={onClick(page)} className={selectedPage === page ? "selected" : ""}>
              {page}
            </button>
          ))
        }
      </div>
    </div>
  )
}