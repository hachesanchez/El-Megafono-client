import LoginCard from '../../components/LoginCard/LoginCard'
import WellcomeCard from '../../components/WellcomeCard/WellcomeCard'
import { Container, Row, Col } from "react-bootstrap"
import './WellcomePage.css'



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
