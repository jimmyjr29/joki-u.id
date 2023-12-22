import { useState, useEffect } from "react";
import { Navbar, Container, Image, Nav, Button } from "react-bootstrap";
import { navLinks } from "../../Mydata";
import { NavLink } from "react-router-dom";

const NavbarComp = () => {
  const [changeColor, setChangeColor] = useState(false);

  const changeBackgroundColor = () => {
    if (window.scrollY > 10) {
      setChangeColor(true);
    } else {
      setChangeColor(false);
    }
  };

  useEffect(() => {
    changeBackgroundColor();

    window.addEventListener("scroll", changeBackgroundColor);
  });

  const whatsappLink = "https://wa.me/081949427807";

  return (
    <Navbar expand="lg" className={changeColor ? "bg-body-tertiary color-active fixed-top " : ""}>
      <Container>
        <Navbar.Brand href="#home" className="fw-bold mt-1 mb-1">
          <Image src="./logo.png  " alt="Joki'U Logo" width="30" height="30" className="d-inline-block align-top mx-2" />
          Joki'U
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav ">
          <Nav className="mx-auto text-center">
            {navLinks.map((link) => {
              return (
                <div className="nav-link" key={link.id}>
                  <NavLink className="mx-3" to={link.path}>
                    {link.text}
                  </NavLink>
                </div>
              );
            })}
          </Nav>
          <div className="text-center">
            <Button variant="outline-primary" className="btn btn-outline btn-sm" href={whatsappLink}>
              Order Sekarang
            </Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComp;
