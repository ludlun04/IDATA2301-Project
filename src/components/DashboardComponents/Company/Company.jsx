import "./Company.css"
import {Outlet, useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {CompanyAPI} from "../../../util/api/CompanyAPI";
import CompanyDetails from "./CompanyDetails/CompanyDetails";

/**
 * Company component
 * Displays the details of a company including name, address, and phone number.
 * Page gets company id from URL and fetches company data from API.
 *
 * @returns {JSX.Element}
 */
export default function Company() {
    const navigate = useNavigate();
    const {id} = useParams();
    const [company, setCompany] = useState(null);

    useEffect(() => {
        const fetchCompany = async () => {
            try {
                const company = await CompanyAPI.getCompanyById(id);
                setCompany(company);
            } catch (error) {
                console.error("Error fetching company data:", error);
            }
        }

        fetchCompany()
    }, [id]);
    return (
        <div className={"Company"}>
            <h1>{company && company.getName()}</h1>
            <CompanyDetails company={company} />
            <div className={"CompanyButtonBox"}>
                <button onClick={() => navigate(`/dashboard/company/${id}/cars`)}>Cars</button>
                <button onClick={() => navigate(`/dashboard/company/${id}/history`)}>History</button>
            </div>
            <Outlet />
        </div>
    )
}