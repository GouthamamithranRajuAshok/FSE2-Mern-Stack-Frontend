import { useEffect } from "react";
import { useState } from "react";
import { Container, Table, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { deleteCompany, getAllCompanies } from "../../services/CompanyService";

const CompanyList = () => {
  const [companyList, setCompanyList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getAllCompanyDetails();
  }, []);

  const getAllCompanyDetails = async () => {
    const response = await getAllCompanies();
    if (response != null) {
      setCompanyList(() => response);
    }
  };

  const addStockHandler = (companyCode) => {
    navigate(`/AddStock/${companyCode}`);
  };

  const deleteCompanyHandler = async (companyCode) => {
    if (window.confirm("Are you sure you want to delete the company?")) {
      const response = await deleteCompany(companyCode);
      console.log(response);
      if (response && response.companyCode === companyCode) {
        alert(`Company ${companyCode} deleted successfully!`);
        getAllCompanyDetails();
      }
    }
  };

  return (
    <div>
      <Container>
        <h2>List of Companies</h2>
        <Table striped hover>
          <thead>
            <tr>
              <th>Company Code</th>
              <th>Company Name</th>
              <th>CEO Name</th>
              <th>Turnover</th>
              <th>Stock Price</th>
              <th>Official website</th>
            </tr>
          </thead>
          <tbody>
            {companyList?.length > 0 &&
              companyList.map((item, key) => (
                <tr key={key}>
                  <td>{item.companyCode}</td>
                  <td>{item.companyName}</td>
                  <td>{item.companyCEO}</td>
                  <td>{item.turnOver}</td>
                  <td>{item.stockPrice[0]?.stockPrice}</td>
                  <td>{item.companyWebsite}</td>
                  <td>
                    <Button
                      variant="outline-dark"
                      onClick={() => addStockHandler(item.companyCode)}
                    >
                      Add Stock
                    </Button>
                  </td>
                  <td>
                    <Button
                      variant="outline-danger"
                      onClick={() => deleteCompanyHandler(item.companyCode)}
                    >
                      Delete Company
                    </Button>
                  </td>
                </tr>
              ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

export default CompanyList;
