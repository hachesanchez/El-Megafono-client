import { Link } from 'react-router-dom';
import './LoginPage.css';
import { Col, Container, Row } from 'react-bootstrap';
import LoginForm from '../../components/LoginForm/LoginForm';
import logo from '../../assets/images/Logo-EM.png';

const LoginPage = () => {
    return (
        <body className="login-page">
            <Container>
                <Row>
                    <Col md={{ offset: 3, span: 6 }} className="text-center">
                        <img src={logo} alt="Logo El megáfono" width="350" height="auto" className="logo mb-5" />
                    </Col>
                    <Col md={{ offset: 3, span: 6 }} className="text-center">
                        <LoginForm />
                    </Col>
                </Row>
            </Container>
        </body>
    );
};

export default LoginPage;
