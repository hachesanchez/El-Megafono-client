import LoginCard from '../../components/LoginCard/LoginCard'
import WellcomeCard from '../../components/WellcomeCard/WellcomeCard'
import './WellcomePage.css'
import { Container, Row, Col, Modal } from "react-bootstrap"



const WellcomePage = () => {


    return (

        < main className='wellcome-page' >

            <Container >
                <Row className='align-items-center'>
                    <WellcomeCard />
                    <Col md={{ span: 4, offset: 6 }} >
                        <LoginCard />
                    </Col>
                </Row>
            </Container >

        </main >

    )
}

export default WellcomePage
