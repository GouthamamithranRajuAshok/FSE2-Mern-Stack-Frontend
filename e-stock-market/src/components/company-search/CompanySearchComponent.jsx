import { useEffect } from "react";
import { useState } from "react";
import { Container, Table } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import "./CompanySearchComponent.css";

const CompanySearch = () => {
  const [searchedCompany, setSearchedCompany] = useState({});
  const location = useLocation();

  useEffect(() => {
    console.log(location);
  });

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
              <th>Stock</th>
            </tr>
          </thead>
          <tbody>
            {searchedCompany?.length > 0 &&
              searchedCompany.map((item, key) => (
                <tr key={key}>
                  <td>{item.companyCode}</td>
                  <td>{item.companyName}</td>
                  <td>{item.companyCEO}</td>
                  <td>{item.turnOver}</td>
                  <td>{item.companyWebsite}</td>
                  <td>{item.stock}</td>
                </tr>
              ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

export default CompanySearch;
