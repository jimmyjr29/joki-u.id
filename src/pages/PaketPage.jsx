import { Container, Row, Col, Card, Button } from "react-bootstrap";

const PaketPage = () => {
  return (
    <section className="bg-primary ">
      <Container>
        <Row className="text-center ">
          <h1 className="text-center fw-bold text-light mt-lg-3 mb-3 ">Pilihan Paket</h1>
          <p className="text-center text-light mb-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus id modi necessitatibus consectetur ipsum fugiat, ratione vel, libero reprehenderit nostrum nulla cum autem, est eius.</p>
          {/* card */}
          <Col md={6}>
            <Card className="mb-3 shadow">
              <Row className="g-0 ">
                <Col md={4}>
                  <Card.Img src="../assets/img/skripsi.png" className="img-fluid rounded-start" alt="..." />
                </Col>
                <Col md={8}>
                  <Card.Body>
                    <Card.Title>Skripsi</Card.Title>
                    <Card.Text className="text-start">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</Card.Text>
                    <Card.Text>
                      <small className="text-body-secondary">Last updated 3 mins ago</small>
                    </Card.Text>
                  </Card.Body>
                  <div className=" mb-3">
                    <Button variant="outline-primary">Order Sekarang</Button>
                  </div>
                </Col>
              </Row>
            </Card>
          </Col>
          <Col md={6}>
            <Card className="mb-3 shadow">
              <Row className="g-0 ">
                <Col md={4}>
                  <Card.Img src="../assets/img/skripsi.png" className="img-fluid rounded-start" alt="..." />
                </Col>
                <Col md={8}>
                  <Card.Body>
                    <Card.Title>Skripsi</Card.Title>
                    <Card.Text className="text-start">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</Card.Text>
                    <Card.Text>
                      <small className="text-body-secondary">Last updated 3 mins ago</small>
                    </Card.Text>
                  </Card.Body>
                  <div className=" mb-3">
                    <Button variant="outline-primary">Order Sekarang</Button>
                  </div>
                </Col>
              </Row>
            </Card>
          </Col>
          {/* card end */}
        </Row>
        <Col className="text-center ">
          <Button variant="link" size="lg" className="text-light mt-3 mb-5 pb-5" href="/paket">
            Lihat Paket Joki
          </Button>
        </Col>
      </Container>
    </section>
  );
};

export default PaketPage;
