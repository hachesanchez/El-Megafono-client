import { Link, useNavigate } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';
import LoginForm from '../../components/LoginForm/LoginForm';
import logo from '../../assets/images/Logo-EM.png';
import './LoginPage.css'; import { useContext } from "react";
import { AuthContext } from "../../contexts/auth.context";

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
                        {/* <Link to="/registro" className="text-center">
                            <h1>o regístrate</h1>
                        </Link> */} {/* //TODO: SACAR LA MODAL */}
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default LoginPage;
