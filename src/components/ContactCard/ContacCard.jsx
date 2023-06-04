
import { Container, Row, Col, Image } from "react-bootstrap"
import hPic from '../../assets/images/H_perfil_BAJA-54.jpg'
import './ContactCard.css'
import { Link } from "react-router-dom"



const ContactCard = () => {

    return (

        <Container >
            <Row className="align-items-center">
                <Col xs={12} sm={12} md={4} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    <Image className='hPic' src={hPic} alt="Avatar" roundedCircle />
                </Col>
                <Col xs={12} sm={12} md={7} style={{ display: 'flex', flexDirection: 'column', alignItems: ' ', justifyContent: 'left' }} >
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
                </Col>
            </Row>
            <Row className="mt-5">
                <Link className="" to={`/inicio`}>
                    <h1 className="volver">volver</h1>
                </Link>
            </Row>
        </Container >

    )
}

export default ContactCard
