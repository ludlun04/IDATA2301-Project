import "./DashboardNavBar.css"
import { useEffect, useState } from "react";
import { UsersAPI } from "../../../util/api/UsersAPI";
import {useNavigate} from "react-router-dom";
import {CompanyAPI} from "../../../util/api/CompanyAPI";

/**
 * DashboardNavBar component
 * Displays a navigation bar for the dashboard with links to different sections based on user roles.
 *
 * @param {string} className - Additional CSS class names for styling.
 * @returns {JSX.Element}
 */
export default function DashboardNavBar({ className }) {
  const [roles, setRoles] = useState([]);
  const [companies, setCompanies] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchRoles = async () => {
      const response = await UsersAPI.getCurrentAuthenticatedUserRoles();
      setRoles(response);
    }
    fetchRoles().catch(error => {
      console.error("Error fetching roles:", error);
    });

  }, []);


  useEffect(() => {
    const fetchCompanies = async () => {
        const response = await CompanyAPI.getCurrentUserCompanies();
        setCompanies(response);
    }
    fetchCompanies().then(r => {}).catch(error => {console.log(error)});
  }, []);

  let hasUserRole = false;
  let hasAdmin = false;
  let hasCompany = false;
  try {
    hasUserRole = roles.some(role => role.name === 'USER');
    hasAdmin = roles.some(role => role.name === 'ADMIN');
    hasCompany = companies.length > 0;
  } catch (error) {
    console.error("Error checking roles:", error);
  }


  return (
    <div className={className}>
      <section className={"DashboardNavBar"}>
        {hasUserRole && (
          <div className={"UserPages"}>
          <h3>User</h3>
            <button key={"DashboardUserDetails"} onClick={() => {navigate("/dashboard/user/details")}} className={""}>Details</button>
            <button key={"DashboardUserRentals"} onClick={() => {navigate("/dashboard/user/rentals")}} className={""}>Rentals</button>
            <button key={"DashboardUserFavorites"} onClick={() => {navigate("/dashboard/user/favorites")}} className={""}>Favorites</button>
          </div>
        )}
        {hasAdmin && (
          <div className={"AdminPages"}>
          <h3>Admin</h3>
            <button key={"DashboardAdminUsers"} onClick={() => {navigate("/dashboard/admin/users")}} className={""}>Users</button>
            <button key={"DashboardAdminCompanies"} onClick={() => {navigate("/dashboard/admin/companies")}} className={""}>Companies</button>
          </div>
        )}
          {hasCompany && (
            <div className={"CompanyPages"}>
            <h3>Companies</h3>
            {companies.map((company) => (
                <button key={company.getId()} onClick={() => {navigate(`/dashboard/company/${company.getId()}/cars`)}} className={""}>{company.getName()}</button>
              ))}
            </div>
          )}
      </section>
    </div>
  )
}