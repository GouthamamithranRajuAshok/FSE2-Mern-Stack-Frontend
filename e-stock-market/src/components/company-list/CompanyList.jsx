import { useEffect } from "react";
import { useState } from "react";
import { Container, Table } from "react-bootstrap";
import { getAllCompanies } from "../../services/CompanyService";

const CompanyList = () => {
  const [companyList, setCompanyList] = useState([]);

  useEffect(() => {
    const getAllCompanyDetails = async () => {
      const response = await getAllCompanies();
      if (response != null) {
        setCompanyList(() => response);
      }
    };
    getAllCompanyDetails();
  }, []);

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
                  <td>{item.companyWebsite}</td>
                </tr>
              ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

export default CompanyList;
