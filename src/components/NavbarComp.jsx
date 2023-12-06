import { Navbar, Container, Image, Nav, Button } from "react-bootstrap";
import { navLinks } from "../../Mydata";
import { NavLink } from "react-router-dom";

const NavbarComp = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary fixed-top navbar-light bg-light ">
      <Container>
        <Navbar.Brand href="#home" className="fw-bold mt-1 mb-1">
          <Image src="./logo.png  " alt="Joki'U Logo" width="30" height="30" className="d-inline-block align-top mx-2" />
          Joki'U
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav ">
          <Nav className="mx-auto ">
            {navLinks.map((link) => {
              return (
                <div key={link.id}>
                  <NavLink className="mx-3 nav-item-hover" to={link.path}>
                    {link.text}
                  </NavLink>
                </div>
              );
            })}
          </Nav>
          <Button variant="outline-primary" className="btn btn-outline btn-sm" href="https://wa.me/081949427807">
            Order Sekarang
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComp;
