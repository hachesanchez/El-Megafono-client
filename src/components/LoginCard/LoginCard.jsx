import './LoginCard.css';
import { Link } from 'react-router-dom';
import { Col, Container, Row, Modal } from 'react-bootstrap';
import { useState } from "react"
import LoginForm from '../../components/LoginForm/LoginForm';
import SignupForm from '../SignupForm/SignupForm';


const LoginCard = () => {

    const [showModal, setShowModal] = useState(false)


    return (

        <div className="login-card">
            <Container>
                <Row>
                    <Col className="text-left">
                        <LoginForm />
                        <Link to=" " className="text-center" onClick={() => setShowModal(true)}  >
                            <h1 className='link-register'>o regístrate</h1>
                        </Link>
                    </Col>
                </Row>
            </Container>

            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Registro</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <SignupForm closeModal={() => setShowModal(false)} />
                </Modal.Body>
            </Modal>

        </div>

    );
};

export default LoginCard;