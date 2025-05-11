import "./CompaniesSection.css";
import CompanyRow from "./CompanyRow";
import {useEffect, useState} from "react";
import {CompanyAPI} from "../../../api/CompanyAPI";

/**
  * CompaniesSection component
  * Displays a list of companies in a table format.
  *
  * @returns {JSX.Element}
  */
export default function CompaniesSection() {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const companies = await CompanyAPI.getCompanies();
        setCompanies(companies);
      } catch (error) {
        console.error("Error fetching companies:", error);
      }
    };

    fetchCompanies();
  }, []);

  console.log(companies);

  const createCompanyRows = () => {
    if (companies.length > 0) {
      return companies.map(company => {
        return <CompanyRow key={company.getId()} company={company} />
      })
    }
  }

  return (
    <main className="companiesSectionMain">
      <h1>Companies</h1>
        <table className="companiesTable">
          <thead>
            <tr>
              <th><p>Id</p></th>
              <th><p>Name</p></th>
              <th><p>Address</p></th>
              <th><p></p></th>
            </tr>
          </thead>
          <tbody>
            {createCompanyRows()}
          </tbody>
        </table>
      </main>
  )
}