import { useEffect } from "react";
import { useState } from "react";
import { Col, Container, Form, Row, Button, Table } from "react-bootstrap";
import { getAllCompanies } from "../../services/CompanyService";
import "./StockDetails.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { getStockPrices } from "../../services/StockService";

const StockDetails = () => {
  const [companyList, setCompanyList] = useState([]);
  const [companyCode, setCompanyCode] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [stockPriceList, setStockPriceList] = useState([]);

  useEffect(() => {
    const getCompanyList = async () => {
      const response = await getAllCompanies();
      if (response != null) {
        setCompanyList(response);
      }
    };
    getCompanyList();
  }, []);

  const companyChangeHandler = (e) => {
    console.log(e.target.value);
    setCompanyCode(e.target.value);
  };

  const startDateChangeHandler = (selectedDate) => {
    const date = new Date(selectedDate);
    setStartDate(date);
  };

  const endDateChangeHandler = (selectedDate) => {
    const date = new Date(selectedDate);
    setEndDate(date);
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    if (!companyCode) {
      alert("Please select valid company code");
      return;
    }
    const response = await getStockPrices(
      companyCode,
      startDate.toLocaleDateString("en-CA"),
      endDate.toLocaleDateString("en-CA")
    );
    console.log(response);
    setStockPriceList(response);
    if (response.length === 0) {
      alert("No data available");
    }
  };

  return (
    <div>
      <Container>
        <h2>Stock Details</h2>
        <Row>
          <Col sm="3">
            <Form.Group>
              <Form.Label>Select Company code:</Form.Label>
              <Form.Select defaultValue="" onChange={companyChangeHandler}>
                <option value="">Select</option>
                {companyList?.length > 0 &&
                  companyList.map((item, key) => (
                    <option key={key}>{item.companyCode}</option>
                  ))}
              </Form.Select>
            </Form.Group>
          </Col>
          <Col sm="3">
            <Form.Group>
              <Form.Label>Select Start Date:</Form.Label>
              <DatePicker
                className="form-control"
                selected={startDate}
                onChange={startDateChangeHandler}
                value={startDate}
                maxDate={new Date()}
              ></DatePicker>
            </Form.Group>
          </Col>
          <Col sm="3">
            <Form.Group>
              <Form.Label>Select End Date:</Form.Label>
              <DatePicker
                className="form-control"
                selected={endDate}
                onChange={endDateChangeHandler}
                value={endDate}
                minDate={startDate}
                maxDate={new Date()}
              ></DatePicker>
            </Form.Group>
          </Col>
          <Col sm="3">
            <Button
              variant="dark"
              className="button-proceed"
              onClick={onSubmitHandler}
            >
              Proceed
            </Button>
          </Col>
        </Row>
      </Container>
      <br />
      <Container>
        <Table striped hover>
          <thead>
            <tr>
              <th>Company Code</th>
              <th>Company Name</th>
              <th>Stock Price</th>
              <th>Date</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {stockPriceList?.length > 0 &&
              stockPriceList.map((item, key) => (
                <tr key={key}>
                  <td>{item.company.companyCode}</td>
                  <td>{item.company.companyName}</td>
                  <td>{item.stockPrice}</td>
                  <td>{new Date(item.date).toLocaleDateString("en-CA")}</td>
                  <td>{new Date(item.date).toLocaleTimeString()}</td>
                </tr>
              ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

export default StockDetails;
