import { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { addNewCompany } from "../../services/CompanyService";
import "./CreateCompany.css";

const CreateCompany = () => {
  const [companyInputs, setCompanyInputs] = useState({
    companyName: "",
    companyCode: "",
    companyCEO: "",
    turnOver: 0,
    companyWebsite: "",
    stockExchange: "",
  });

  const inputChangeHandler = (e) => {
    const { name, value } = e.target;
    setCompanyInputs((previousCompanyInputs) => ({
      ...previousCompanyInputs,
      [name]: value,
    }));
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const response = await addNewCompany(companyInputs);
    console.log(response);
  };

  return (
    <div>
      <Container>
        <h2>Create new Company</h2>
        <Form>
          <Row>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Company Code</Form.Label>
                <Form.Control
                  type="text"
                  name="companyCode"
                  value={companyInputs.companyCode}
                  onChange={inputChangeHandler}
                  placeholder="Enter company code"
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Company Name</Form.Label>
                <Form.Control
                  type="text"
                  name="companyName"
                  value={companyInputs.companyName}
                  onChange={inputChangeHandler}
                  placeholder="Enter company name"
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>CEO of the Company</Form.Label>
                <Form.Control
                  type="text"
                  name="companyCEO"
                  value={companyInputs.companyCEO}
                  onChange={inputChangeHandler}
                  placeholder="Enter CEO name"
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Turnover</Form.Label>
                <Form.Control
                  type="number"
                  name="turnOver"
                  value={companyInputs.turnOver}
                  onChange={inputChangeHandler}
                  placeholder="Enter Turnover"
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col lg="6">
              <Form.Group className="mb-3">
                <Form.Label>Company Website</Form.Label>
                <Form.Control
                  type="text"
                  name="companyWebsite"
                  value={companyInputs.companyWebsite}
                  onChange={inputChangeHandler}
                  placeholder="Enter company website"
                />
              </Form.Group>
            </Col>
            <Col lg="6">
              <Form.Label>Stock Exchange</Form.Label>
              <Form.Select name="stockExchange" onChange={inputChangeHandler}>
                <option value="BSE">BSE</option>
                <option value="NSE">NSE</option>
                <option value="NYSE">NYSE</option>
                <option value="MSE">MSE</option>
              </Form.Select>
            </Col>
          </Row>
          <Row>
            <Col xs="text-right">
              <Form.Group className="mb-3">
                <Button
                  className="create"
                  type="submit"
                  variant="dark"
                  onClick={submitHandler}
                >
                  Create
                </Button>
              </Form.Group>
            </Col>
          </Row>
        </Form>
      </Container>
    </div>
  );
};

export default CreateCompany;
