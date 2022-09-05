import { useEffect } from "react";
import { useState } from "react";
import { Col, Container, Form, Row, Button } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { getCompanyByCompanyCode } from "../../services/CompanyService";
import { addStockByCompanyCode } from "../../services/StockService";

const AddStockPrice = () => {
  const { companyCode } = useParams();
  const [company, setCompany] = useState({
    companyName: "",
    companyCode: "",
  });
  const [stockPrice, setStockPrice] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const getCompany = async (code) => {
      const response = await getCompanyByCompanyCode(code);
      if (!response) {
        alert("Invalid company code");
        navigate("/CompanyList");
      }
      setCompany(response);
    };
    getCompany(companyCode);
  }, [companyCode, navigate]);

  const stockPriceChangedHandler = (e) => {
    const stockValue = e.target.value;
    if (isNaN(parseFloat(stockValue))) {
      //TODO: Validation
      return;
    }
    setStockPrice(stockValue);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const validStockPrice = parseFloat(stockPrice).toFixed(3);
    setStockPrice(validStockPrice);
    const response = await addStockByCompanyCode(company.companyCode, {
      stockPrice,
    });
    console.log(response);
  };

  return (
    <div>
      <Container>
        <h2>Add New Stock</h2>
        <Form>
          <Row>
            <Col sm="4">
              <Form.Group className="mb-3">
                <Form.Label>Company Code:</Form.Label>
                <Form.Control
                  type="text"
                  name="companyCode"
                  value={company.companyCode}
                  disabled
                  placeholder="Enter company code"
                />
              </Form.Group>
            </Col>
            <Col sm="4">
              <Form.Group className="mb-3">
                <Form.Label>Company Name:</Form.Label>
                <Form.Control
                  type="text"
                  name="companyCode"
                  value={company.companyName}
                  disabled
                  placeholder="Enter company name"
                />
              </Form.Group>
            </Col>
            <Col sm="4">
              <Form.Group className="mb-3">
                <Form.Label>Stock Price (in decimals):</Form.Label>
                <Form.Control
                  type="text"
                  name="stockPrice"
                  value={stockPrice}
                  onChange={stockPriceChangedHandler}
                  placeholder="Enter stock price"
                />
              </Form.Group>
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

export default AddStockPrice;
