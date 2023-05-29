import { Link } from 'react-router-dom'
import './LoginPage.css'
import { Col, Container, Row } from "react-bootstrap"

const LoginPage = () => {

    return (
        <body className='login-page'>
            <Container >
                <Row>
                    <Col md={{ offset: 3, span: 6 }} style={{ justifyContent: 'center' }}>
                        <Link to="/inicio">
                            <h1>Entra</h1>
                        </Link>
                    </Col>
                </Row>
            </Container>
        </body>
    )
}

export default LoginPage
