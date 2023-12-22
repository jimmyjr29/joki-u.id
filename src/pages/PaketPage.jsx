import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { paket } from "../../Mydata";

const PaketPage = () => {
  return (
    <section className="bg-primary ">
      <Container className="mt-5 pt-5">
        <Row className="text-center ">
          <h1 className="text-center fw-bold text-light mt-lg-3 mb-3 ">Pilihan Paket</h1>
          <p className="text-center text-light mb-3">
            Kami adalah tim profesional di Joki'U yang berkomitmen untuk menyediakan solusi terbaik bagi Anda. Dengan pengalaman dan keahlian kami, kami siap membantu mengoptimalkan waktu dan usaha Anda dalam menyelesaikan pekerjaan
            akademis dan kreatif.
          </p>

          {/* card */}
          {paket.map((data) => {
            return (
              <Col md={6} key={data.id}>
                <Card className="mb-3 shadow">
                  <Row className="g-0 ">
                    <Col md={4}>
                      <Card.Img src={data.image} className="img-fluid rounded-start" alt="..." />
                    </Col>
                    <Col md={8}>
                      <Card.Body>
                        <Card.Title className="fw-bold ">{data.title}</Card.Title>
                        <Card.Text className="text-start">{data.text}</Card.Text>
                      </Card.Body>
                      <div className="mb-2">
                        <Button variant="outline-primary">Konsultasi</Button>
                        <Button variant="primary" className="ms-2">
                          Order Sekarang
                        </Button>
                      </div>
                    </Col>
                  </Row>
                </Card>
                ;
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
};

export default PaketPage;
