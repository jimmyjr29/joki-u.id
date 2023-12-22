import { Container, Card, Row, Col } from "react-bootstrap";

const TutorPage = () => {
  return (
    <section>
      <Container className="Tutor">
        <h1 className="text-center fw-bold mb-3">Bagaimana Cara Order?</h1>
        <Card className="border shadow ">
          <Row className="m-5 align-items-center ">
            <Col lg={6} className="text-center">
              <img src="../assets/img/myhero.png" alt="Hero Image" className="img-fluid" style={{ width: "90%" }} />
            </Col>
            <Col lg={6}>
              <h1 className="fw-bold ">Cara Order</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, voluptates.</p>
              <ul>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, cupiditate.</li>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, cupiditate.</li>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, cupiditate.</li>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, cupiditate.</li>
              </ul>
            </Col>
          </Row>
        </Card>
      </Container>
      {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" style={{ width: "100%", height: "auto", marginTop: "-100px" }}>
        <path
          fill="#0d6efd"
          fillOpacity="1"
          d="M0,64L60,58.7C120,53,240,43,360,53.3C480,64,600,96,720,138.7C840,181,960,235,1080,234.7C1200,235,1320,181,1380,154.7L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        ></path>
      </svg> */}
    </section>
  );
};

export default TutorPage;
