import { useEffect } from "react";
import { useState } from "react";
import { Button, Container, Table } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import { getCompanyByCompanyCode } from "../../services/CompanyService";
import "./CompanySearchComponent.css";

const CompanySearch = () => {
  const [searchedCompany, setSearchedCompany] = useState({});
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const getCompanyDetails = async () => {
      const response = await getCompanyByCompanyCode(
        location.state.companyCode
      );
      if (response != null) {
        setSearchedCompany(() => response);
      } else {
        setSearchedCompany(() => {});
        alert("Company data not available");
      }
    };
    getCompanyDetails();
  }, [location.state.companyCode]);

  const addStockHandler = () => {
    navigate(`/AddStock/${searchedCompany.companyCode}`);
  };

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
                <td>
                  <Button
                    variant="outline-dark"
                    onClick={() => addStockHandler(searchedCompany.companyCode)}
                  >
                    Add Stock
                  </Button>
                </td>
              </tr>
            )}
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

export default CompanySearch;
