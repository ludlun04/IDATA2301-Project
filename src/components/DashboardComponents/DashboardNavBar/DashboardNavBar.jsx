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


  const userPages = ["Details", "Rentals", "Favorites"];
  const adminPages = ["Users", "Companies"];
  const hasUserRole = roles.some(role => role.name === 'USER');
  const hasAdmin = roles.some(role => role.name === 'ADMIN');

  return (
    <div className={className}>
      <div className={"DashboardNavBar"}>
        <div className={"UserPages"}>
        <h3>User</h3>
        <div>
        {hasUserRole ? (
            userPages.map((page) => (
                <button key={page} onClick={onClick(page)} className={selectedPage === page ? "selected" : ""}>
                  {page}
                </button>
            ))
            ) : null
        }
        </div>
        </div>
        <div className={"AdminPages"}>
        <h3>Admin</h3>
        <div>
          {hasAdmin ? (
            adminPages.map((page) => (
              <button key={page} onClick={onClick(page)} className={selectedPage === page ? "selected" : ""}>
                {page}
              </button>
            ))
          ) : null
          }
        </div>
        </div>
      </div>
    </div>
  )
}