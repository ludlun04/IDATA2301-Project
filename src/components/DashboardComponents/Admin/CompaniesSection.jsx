import "./CompaniesSection.css";
import { Company } from "../../../model/Company";
import CompanyRow from "./CompanyRow";

export default function CompaniesSection() {
  const companies = [
    new Company(1, "Company 1", "Yes land", "companyOld@companyOld.no"),
    new Company(2, "Company 2", "Yes land", "companyOld@companyOld.no"),
    new Company(3, "Company 3", "Yes land", "companyOld@companyOld.no")
  ]

  const createCompanyRows = () => {
    return companies.map(company => {
      return <CompanyRow key={company.getId()} company={company} />
    })
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
              <th><p>Email</p></th>
            </tr>
          </thead>
          <tbody>
            {createCompanyRows()}
          </tbody>
        </table>
      </main>
  )
}