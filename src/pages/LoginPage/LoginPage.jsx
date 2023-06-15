import { useNavigate } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';
import LoginForm from '../../components/LoginForm/LoginForm';
import logo from '../../assets/images/Logo-EM.png';
import { AuthContext } from "../../contexts/auth.context";
import './LoginPage.css'; import { useContext } from "react";

const LoginPage = () => {

    const navigate = useNavigate();
    const { user } = useContext(AuthContext);

    user && navigate('/inicio');

    return (

        <div className="login-page">
            <Container>
                <Row>
                    <Col md={{ offset: 3, span: 6 }} className="text-center">
                        <img src={logo} alt="Logo El megáfono" width="350" height="auto" className="logo mb-5" />
                    </Col>
                    <Col md={{ offset: 3, span: 6 }} className="text-left">
                        <LoginForm />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default LoginPage;
