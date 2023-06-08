import { Container, Row, Col, Image } from "react-bootstrap";
import hPic from '../../assets/images/H_perfil_BAJA-54.jpg';
import { Link } from "react-router-dom";
import './ContactCard.css';
import gitIcon from '../../assets/images/icon.png'
import igIcon from '../../assets/images/icon-ig.png'
import webIcon from '../../assets/images/icon-web.png'
import linIcon from '../../assets/images/icon-LinkedIn.png'

const ContactCard = () => {

    return (

        <Container>

            <Row className="align-items-center">
                <Col xs={12} sm={12} md={6} lg={3} className="offset-lg-1">
                    <Image className="hPic" src={hPic} alt="Avatar" roundedCircle />
                </Col>
                <Col xs={12} sm={12} md={6} lg={7} className="offset-lg-1">
                    <div>
                        <h1 className='h1-contact justify-content-left'>hola!</h1>
                        <p className='contact-text'>Me llamo Helena y hace poco decidí embarcarme en una emocionante aventura de reinvención profesional:
                            estoy en proceso de convertirme en una desarrolladora web full stack MERN y este es mi proyecto final de IronHack,
                            una aplicación web en la que he tratado de poner en práctica todas las tecnologías aprendidas durante el bootcamp:
                            HTML, CSS, Bootstrap, JavaScript, Node, Express, MongoDB y ReactJS. </p>
                        <p className='contact-text'>
                            Periodista de base, me he dedicado a la fotografía y a la creación de vídeo durante 8 años.
                            Soy una persona creativa, versátil, en constante aprendizaje, con gran capacidad resolutiva y experiencia en editorial,
                            periodismo y tercer sector social.</p>
                        <h5 className="h5-contact">podéis contactarme a través de hola@helenasanchez.es</h5>
                        <p className='contact-text'>o cotillear mis redes:</p>
                    </div>
                    <Col xs={12} sm={12} md={6} lg={4} style={{ justifyContent: "space-between" }}>
                        <div className="social-media rounded-pill d-flex justify-content-between">
                            <a href="http://estudio-h.es" target="_blank" rel="noopener noreferrer">
                                <Image className="contact-icon" src={webIcon} alt="web-icon" />
                            </a>
                            <a href="https://www.instagram.com/elestudio_h/" target="_blank" rel="noopener noreferrer">
                                <Image className="contact-icon" src={igIcon} alt="ig-icon" />
                            </a>
                            <a href="https://www.linkedin.com/in/helena-garcia-webdev/" target="_blank" rel="noopener noreferrer">
                                <Image className="linkedin-icon" src={linIcon} alt="linkedin-icon" />
                            </a>
                            <a href="https://github.com/hachesanchez?tab=repositories" target="_blank" rel="noopener noreferrer">
                                <Image className="contact-icon" src={gitIcon} alt="git-icon" />
                            </a>
                        </div>
                    </Col>
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
