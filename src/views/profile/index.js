import React, { useEffect } from 'react'
import { Button, Card, Container, Row, Col } from "reactstrap";
import Banner from "../../components/Banner"
import { useTextContext } from "../../context/TextContext"
const Component = () => {
    const { setShowText } = useTextContext()
    useEffect(() => {
        setShowText(false)
    },[setShowText])
    return(
        <>
        <main className="profile-page">
        <Banner />
        <section className="section">
            <Container>
              <Card className="card-profile shadow mt--300">
                <div className="px-4">
                  <Row className="justify-content-center">
                    <Col className="order-lg-2" lg="3">
                      <div className="card-profile-image">
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          <img
                            alt="..."
                            className="rounded-circle"
                            src={require("assets/img/mosque/ukhwah-potrait7.jpg")}
                            width={300}
                            height={200}
                          />
                        </a>
                      </div>
                    </Col>
                    <Col
                      className="order-lg-3 text-lg-right align-self-lg-center"
                      lg="4"
                    >
                      <div className="card-profile-actions py-4 mt-lg-0">
                        <Button
                          className="mr-4"
                          color="info"
                          href="https://api.whatsapp.com/send?phone=6282280292345"
                          target="_blank"
                          size="sm"
                        >
                          Phone
                        </Button>
                        <Button
                          className="float-right"
                          color="default"
                          href="https://api.whatsapp.com/send?phone=6282280292345"
                          size="sm"
                          target="_blank"
                        >
                          Message
                        </Button>
                      </div>
                    </Col>
                    <Col className="order-lg-1" lg="4">
                      <div className="card-profile-stats d-flex justify-content-center">
                        <div>
                          <span className="heading">22</span>
                          <span className="description">Friends</span>
                        </div>
                        <div>
                          <span className="heading">10</span>
                          <span className="description">Photos</span>
                        </div>
                        <div>
                          <span className="heading">89</span>
                          <span className="description">Comments</span>
                        </div>
                      </div>
                    </Col>
                  </Row>
                  <div className="text-center mt-5">
                    <h3>
                      Masjid{" "}
                      <span className="font-weight-light">, Ukhwah Islamiyah el Azhar</span>
                    </h3>
                    <div className="h6 font-weight-300">
                      <i className="ni location_pin mr-2" />
                      Banyumanik, Semarang
                    </div>
                    <div className="h6 mt-4">
                      <i className="ni business_briefcase-24 mr-2" />
                      Dakwah - Komunitas - Budaya
                    </div>
                  </div>
                  <div className="mt-5 py-5 border-top text-center">
                    <Row className="justify-content-center">
                      <Col lg="9">
                        <p>
                        Pembelajaran dalam Islam tidak hanya terbatas pada pemahaman tentang agama, tetapi juga mencakup pengetahuan dunia yang luas. Rasulullah SAW bersabda, "Menuntut ilmu adalah wajib bagi setiap muslim." Ini menunjukkan bahwa mencari pengetahuan adalah kewajiban bagi umat Islam, yang mencakup baik ilmu agama maupun ilmu dunia.
                        </p>
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          Show more
                        </a>
                      </Col>
                    </Row>
                  </div>
                </div>
              </Card>
            </Container>
          </section>
        </main>
        
        </>
    )
}
export default Component;