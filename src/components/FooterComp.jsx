import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { navLinks } from "../../Mydata";
import { NavLink } from "react-router-dom";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { GoGlobe } from "react-icons/go";

const FooterComp = () => {
  const instagramLink = "https://www.instagram.com/joki.u.id";
  const whatsappLink = "https://wa.me/081949427807";

  return (
    <footer className="border-top">
      {/* <hr style={{ padding: "none" }} /> */}
      <Container className="pt-5">
        <Row className="justify-content-between">
          <Col lg={8} className="text-start">
            <h1 className="fw-bold ">Joki'U.iD</h1>
            <p className="me-3 ">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio est sed rem? A, suscipit cum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, cumque consequuntur quia fugiat vero reprehenderit!
            </p>
          </Col>
          <Col lg={2} className="text-start">
            <h3 className="fw-bold ">Menu</h3>
            {navLinks.map((link) => (
              <div key={link.id}>
                <NavLink className="mx-0 nav-item-hover " to={link.path}>
                  {link.text}
                </NavLink>
              </div>
            ))}
          </Col>
          <Col lg={2} className="text-start">
            <h3 className="fw-bold ">Contact</h3>
            <div>
              <a href={whatsappLink} className="text-dark text-decoration-none d-flex align-items-center">
                <FaWhatsapp className="me-2" />
                <span>Whatsapp</span>
              </a>
            </div>
            <div>
              <a href={instagramLink} className="text-dark text-decoration-none d-flex align-items-center">
                <FaInstagram className="me-2" />
                <span>Instagram</span>
              </a>
            </div>
            <div>
              <a href="/" className="text-dark text-decoration-none d-flex align-items-center">
                <GoGlobe className="me-2 " />
                <span>Website</span>
              </a>
            </div>
          </Col>
        </Row>
        <Row>
          <Col className="text-center m-2 ">
            <p className="text-muted ">&copy; 2023 Joki'U.iD. All Rights Reserved.</p>
            {/* Create with ❤️ by{" "}
            <a href={instagramLink} target="_blank" rel="noopener noreferrer" className="text-dark text-decoration-none">
              Jimmy
            </a> */}
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default FooterComp;
