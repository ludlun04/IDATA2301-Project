import {Outlet, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {CompanyAPI} from "../../../api/CompanyAPI";
import CompanyRow from "../Admin/CompanyRow";
import CompanyDetails from "./CompanyDetails/CompanyDetails";

export default function Company() {
    const {id} = useParams();
    console.log(id);
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
        <div>
            <CompanyDetails company={company} />
            <Outlet />
        </div>
    )
}