import { Container, Row, Col, Image } from "react-bootstrap";
import hPic from '../../assets/images/H_perfil_BAJA-54.jpg';
import { Link } from "react-router-dom";
import { CONTACT_ARRAY } from "../../consts/info-consts";
import './ContactCard.css';

const ContactCard = () => {

    return (

        <Container>

            <Row className="align-items-center">
                <Col xs={12} sm={12} md={6} lg={3} className="offset-lg-1">
                    <Image className="hPic" src={hPic} alt="Avatar" roundedCircle />
                </Col>
                <Col xs={12} sm={12} md={6} lg={7} className="offset-lg-1">
                    {CONTACT_ARRAY}
                </Col>
            </Row>
            <Row className="mt-5">
                <Link className="" to={`/inicio`}>
                    <h1 className="volver">volver</h1>
                </Link>
            </Row>

        </Container>
    );
};

export default ContactCard;
