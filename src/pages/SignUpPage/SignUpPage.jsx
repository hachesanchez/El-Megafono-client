import SignupForm from '../../components/SignupForm/SignupForm'
import { Container, Row, Col } from "react-bootstrap"
import './SignUpPage.css'

const SignUpPage = () => {

    return (

        <Container>
            <Row>
                <Col md={{ offset: 3, span: 6 }}>
                    <h1>Registro</h1>
                    <hr />
                    <SignupForm />
                </Col>
            </Row>
        </Container>
    )
}

export default SignUpPage
