import { Nav, Navbar } from "react-bootstrap";

const NavBarComponent = () => {
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
          </Navbar.Collapse>
        </div>
      </Navbar>
    </div>
  );
};

export default NavBarComponent;
