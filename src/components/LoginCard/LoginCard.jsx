import './LoginCard.css';
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';
import LoginForm from '../../components/LoginForm/LoginForm';

import logo from '../../assets/images/Logo-EM.png';

const LoginCard = () => {

    return (
        <body className="login-card">
            <Container>
                <Row>
                    <Col className="text-left">
                        <LoginForm />
                        <Link to="/registro" className="text-center">
                            <h1>o regístrate</h1>
                        </Link>
                    </Col>
                </Row>
            </Container>
        </body>
    );
};

export default LoginCard;