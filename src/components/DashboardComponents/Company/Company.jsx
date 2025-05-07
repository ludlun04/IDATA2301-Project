import {Outlet, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {CompanyAPI} from "../../../api/CompanyAPI";

export default function Company() {
    const {id} = useParams();
    console.log(id);
    const [company, setCompany] = useState(null);

    useEffect(() => {
        const fetchCompany = async () => {
            try {
                const company = await CompanyAPI.getCompanyById(id);
                setCompany(company);
                console.log("company: ", company);
            } catch (error) {
                console.error("Error fetching company data:", error);
            }
        }

        fetchCompany()
    }, [id]);
    return (
        <div>Company
            <Outlet />
        </div>
    )
}