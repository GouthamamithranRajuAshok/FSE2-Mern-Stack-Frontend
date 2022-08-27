import { useEffect } from "react";
import { useState } from "react";
import { Container, Table } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { getCompanyByCompanyCode } from "../../services/CompanyService";
import "./CompanySearchComponent.css";

const CompanySearch = () => {
  const [searchedCompany, setSearchedCompany] = useState({});
  const location = useLocation();

  useEffect(() => {
    const getCompanyDetails = async () => {
      const response = await getCompanyByCompanyCode(
        location.state.companyCode
      );
      console.log(response);
      if (response != null) {
        setSearchedCompany(() => response);
      } else {
        setSearchedCompany(() => {});
        alert("Company is not available");
      }
    };
    getCompanyDetails();
  }, [location.state.companyCode]);

  return (
    <div>
      <Container>
        <h2>Company Details</h2>
        <Table striped hover>
          <thead>
            <tr>
              <th>Company Code</th>
              <th>Company Name</th>
              <th>CEO Name</th>
              <th>Turnover</th>
              <th>Official website</th>
            </tr>
          </thead>
          <tbody>
            {searchedCompany != null && (
              <tr>
                <td>{searchedCompany.companyCode}</td>
                <td>{searchedCompany.companyName}</td>
                <td>{searchedCompany.companyCEO}</td>
                <td>{searchedCompany.turnOver}</td>
                <td>{searchedCompany.companyWebsite}</td>
              </tr>
            )}
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

export default CompanySearch;
