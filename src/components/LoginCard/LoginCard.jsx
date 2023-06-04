import './LoginCard.css';
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';
import LoginForm from '../../components/LoginForm/LoginForm';


const LoginCard = () => {

    return (
        <div className="login-card">
            <Container>
                <Row>
                    <Col className="text-left">
                        <LoginForm />
                        <Link to="/registro" className="text-center">
                            <h1 className='link-register'>o regístrate</h1>
                        </Link>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default LoginCard;