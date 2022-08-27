import { useState } from "react";
import { Button, Form, Nav, Navbar } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const NavBarComponent = () => {
  const [companyCode, setCompanyCode] = useState("");
  const navigate = useNavigate();

  const searchHandler = () => {
    navigate("/SearchResult", { state: { companyCode: companyCode } });
  };

  return (
    <div>
      <Navbar expand="lg" bg="light">
        <div className="container-fluid">
          <Navbar.Brand href="#">E-Stock Market</Navbar.Brand>
          <Navbar.Toggle aria-controls="stock-navbar-nav" />
          <Navbar.Collapse id="stock-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#">Home</Nav.Link>
              <Nav.Link href="#">Add Company</Nav.Link>
              <Nav.Link href="#">Company List</Nav.Link>
              <Nav.Link href="#">Stock List</Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Enter company code"
                className="me-2"
                aria-label="search"
                value={companyCode}
                onChange={(e) => setCompanyCode(e.target.value)}
              />
              <Button variant="outline-dark" onClick={searchHandler}>
                Search
              </Button>
            </Form>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </div>
  );
};

export default NavBarComponent;
