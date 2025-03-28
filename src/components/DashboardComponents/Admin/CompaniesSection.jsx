import "./CompaniesSection.css";
import { Company } from "../../../model/Company";
import CompanyRow from "./CompanyRow";

export default function CompaniesSection() {
  return (
    <main className="companiesSectionMain">
        <h1>Companies</h1>
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Email</th>
              <th>First Name</th>

            </tr>
          </thead>
          <tbody>
            <CompanyRow company={new Company(1, "Company 1", "Yes land", "companyOld@companyOld.no")}/>
            <CompanyRow company={new Company(2, "Company 2", "Yes land", "companyOld@company2.no")}/>
          </tbody>
        </table>
      </main>
  )
}