import LoginCard from '../../components/LoginCard/LoginCard'
import WellcomeCard from '../../components/WellcomeCard/WellcomeCard'
import './WellcomePage.css'
import { Container, Row, Col } from "react-bootstrap"

const WellcomePage = () => {

    return (


        <main className='wellcome-page'>
            <Container >
                <Row className='align-items-center'>
                    <WellcomeCard />
                    <Col md={{ span: 4, offset: 6 }} >
                        <LoginCard />
                    </Col>
                </Row>
            </Container >
        </main >


        /*   <main className='wellcome-page'>
              <Container >
                  <Row className='align-items-center'>
                      <Col md={{ span: 10, offset: 1 }} sm={{ span: 10, offset: 1 }}>
                          <Row className='align-items-center'>
                              <Col xs={12} sm={12} md={7} className='text-center'>
                                  <WellcomeCard />
                              </Col>
                              <Col xs={12} sm={12} md={5} className='align-items-center' >
                                  <LoginCard />
                              </Col>
                          </Row>
                      </Col>
                  </Row>
              </Container >
          </main > */
    )
}

export default WellcomePage
