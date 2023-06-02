import LoginCard from '../../components/LoginCard/LoginCard'
import WellcomeCard from '../../components/WellcomeCard/WellcomeCard'
import './WellcomePage.css'
import { Container, Row, Col } from "react-bootstrap"

const WellcomePage = () => {

    return (
        <main className='wellcome-page'>
            <Container >
                <Row>
                    <Col xs={7} >
                        <WellcomeCard />
                    </Col>
                    <Col xs={4}>
                        <LoginCard></LoginCard>
                    </Col>
                </Row>
            </Container>
        </main >
    )
}

export default WellcomePage