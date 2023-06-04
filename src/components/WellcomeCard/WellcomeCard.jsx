import './WellcomeCard.css';
import { Col, Container, Row, Button } from 'react-bootstrap';
import { Link } from "react-router-dom"
import logo from '../../assets/images/Logo-EM.png';


const WellcomeCard = () => {

    return (
        <div className="wellcome-card">
            <Container>
                <Row >
                    <Col >
                        <img src={logo} alt="Logo El megáfono" height="auto" className="logo mb-3" />
                    </Col>
                    <Col>
                        <div className='mb-4' >
                            <h1>Somos la única plataforma laboral que pone en contacto profesionales y organizaciones
                                del tercer sector social
                            </h1>
                        </div>

                        <Link className="" to={`/contacta`}>
                            <h1 className="saber-mas">Quiero saber más...</h1>
                        </Link>
                    </Col>
                </Row>
            </Container>
        </div >
    );
};

export default WellcomeCard;