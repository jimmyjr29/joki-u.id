import { Container, Row, Col, Button, Card } from "react-bootstrap";

const homepage = () => {
  return (
    <>
      {/* HERO SECTION */}
      <section>
        <Container>
          <Row className="align-items-center pt-5 mt-5">
            {/* Bagian Teks di Sebelah Kiri */}
            <Col lg={6} md={12} className="text-left">
              <p className="mb-0">Ketika tugas menumpuk dan deadline mendekat, jangan panik! Kami</p>
              <h1 className="hero-text display-1 fw-bold mb-0">Di Joki'U.iD</h1>
              <p className="hero-subtext">
                hadir sebagai penyelamat akademis Anda. Dengan tim berdedikasi yang siap menyongsong tantangan, kami menawarkan solusi terbaik untuk mengatasi tekanan waktu dan menghasilkan karya akademis yang gemilang. Mari bersama-sama
                menghadapi tantangan dan menjadikan setiap batas waktu sebagai kesempatan baru untuk sukses. <span className="fw-bold"> Joki'U.iD</span> - Mitra Terpercaya di Setiap Perjalanan Akademis Anda!
              </p>
              <Button variant="primary" size="lg" className="me-2">
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
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" style={{ width: "100%", height: "auto", marginTop: "-100px" }}>
          <path
            fill="#0d6efd"
            fillOpacity="1"
            d="M0,64L60,58.7C120,53,240,43,360,53.3C480,64,600,96,720,138.7C840,181,960,235,1080,234.7C1200,235,1320,181,1380,154.7L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
      </section>
      {/* HERO END */}

      {/* PAKE SECTION */}
      <section className="bg-primary ">
        <Container>
          <Row className="text-center mb-5 pb-5">
            <h1 className="text-center fw-bold text-light mt-lg-3 mb-3 ">Pilihan Paket</h1>
            <p className="text-center text-light mb-3">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus id modi necessitatibus consectetur ipsum fugiat, ratione vel, libero reprehenderit nostrum nulla cum autem, est eius.
            </p>

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
                      <Card.Text>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</Card.Text>
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
            <Col className="text-center mt-3">
              <Button variant="link" size="lg" className="text-light me-2" href="/paket">
                Lihat Paket Joki
              </Button>
            </Col>
          </Row>
        </Container>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#ffffff"
            fill-opacity="10"
            d="M0,96L60,85.3C120,75,240,53,360,42.7C480,32,600,32,720,58.7C840,85,960,139,1080,160C1200,181,1320,171,1380,165.3L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
      </section>
      {/* PAKET END */}
    </>
  );
};

export default homepage;
