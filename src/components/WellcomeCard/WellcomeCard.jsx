import './WellcomeCard.css';
import { Col, Container, Row, Button } from 'react-bootstrap';
import { Link } from "react-router-dom"
import logo from '../../assets/images/Logo-EM.png';

const WellcomeCard = () => {

    return (
        <body className="wellcome-card">
            <Container>
                <Row >
                    <img src={logo} alt="Logo El megáfono" width="150" height="auto" className="logo mb-5" />
                    <div >
                        <h1>Somos la única plataforma laboral que pone en contacto profesionales y organizaciones
                            del tercer sector social
                        </h1>
                    </div>

                    <Link className="" to={`/contacta`}>
                        <Button variant="outline-dark" className="w-100" size="smlg" >Saber más</Button>
                    </Link>
                </Row>
            </Container>
        </body >
    );
};

export default WellcomeCard;