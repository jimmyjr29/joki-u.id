import { Container, Row, Col, Button, Card } from "react-bootstrap";
import TutorPage from "./TutorPage";
import FaqPage from "./FaqPage";
import PromoPage from "./PromoPage";

const homepage = () => {
  return (
    <>
      {/* HERO SECTION */}
      <section>
        <Container>
          <Row className="align-items-center pt-5 mt-5">
            {/* Bagian Teks di Sebelah Kiri */}
            <Col lg={6} md={12} className="text-left">
              <p className="mb-0 display-6">Selamat datang</p>
              <h1 className="hero-text display-1 fw-bold mb-0">Di Joki'U.iD</h1>
              <p className="hero-subtext">
                Tempat terpercaya untuk membantu Anda menyelesaikan tugas akademis dan proyek kreatif. Kami menyediakan layanan joki dengan kualitas terbaik dan harga terjangkau untuk skripsi, tugas, presentasi, jurnal, artikel, makalah,
                dan desain.
              </p>
              <Button variant="primary" size="lg" className="me-2" href="/paket">
                Lihat Paket Joki
              </Button>
              <Button variant="outline-primary" size="lg" className="btn btn-outline" href="https://wa.me/081949427807">
                Order Sekarang
              </Button>
            </Col>

            {/* Bagian Gambar di Sebelah Kanan */}
            <Col lg={6} md={12} className="text-center z-1">
              <img src="../assets/img/myhero.png" alt="Hero Image" className="img-fluid" style={{ width: "100%" }} />
            </Col>
          </Row>
        </Container>
      </section>
      {/* HERO END */}

      {/* PAKE SECTION */}
      <section className="bg-primary ">
        <Container>
          <Row className="text-center ">
            <h1 className="text-center fw-bold text-light mt-lg-3 mb-3 ">Pilihan Paket</h1>
            <p className="text-center text-light mb-3">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus id modi necessitatibus consectetur ipsum fugiat, ratione vel, libero reprehenderit nostrum nulla cum autem, est eius.
            </p>
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
          <Col className="text-center mt-3 mb-5 pb-5">
            <Button variant="link" size="lg" className="text-light " href="/paket">
              Lihat Paket Joki
            </Button>
          </Col>
        </Container>
      </section>
      {/* PAKET END */}

      {/* CARA ORDER */}
      <TutorPage />
      {/* CARA ORDER END */}

      {/* FAQ PAGE */}
      <FaqPage />
      {/* FAQ PAGE END */}

      {/* Promo Page */}
      <PromoPage />
      {/* Promo Page end */}
    </>
  );
};

export default homepage;
