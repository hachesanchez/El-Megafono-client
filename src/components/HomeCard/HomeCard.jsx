import { Link } from 'react-router-dom';
import { Col, Container, Row, Image, Card } from 'react-bootstrap';
import './HomeCard.css';
import headerImg from '../../assets/images/Header-3.jpg'


const HomeCard = () => {

    return (
        <div className="home-card" style={{ backgroundColor: '', paddingBottom: '50px' }}>
            <Image
                src={headerImg}
                style={{ width: '100%', maxHeight: '300px', objectFit: 'cover', marginBottom: '30px', }}
            />
            <Container>
                <Row className='align-items-center justify-content-center'>
                    <Col md={4}>
                        <Card className="text-center c1 mb-2" style={{ border: 'none', padding: '30px' }}>
                            <Card.Body>
                                <Card.Text>
                                    <p className='home-text'> Ya hemos puesto en contacto a más de 3000 profesionales con
                                        organizaciones
                                    </p>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={5}>
                        <Card className="text-center c2 mb-2" style={{ border: 'none', padding: '10px', backgroundColor: '#7fc6a6' }}>
                            <Card.Body>
                                <Card.Text>
                                    <Link to="/profesionales" className="text-center">
                                        <h5 className='link-register'>Visita nuesto panel de colaboradoras</h5>
                                    </Link>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className="text-center c3" style={{ border: 'none', padding: '10px', backgroundColor: '#7fc6a6' }}>
                            <Card.Body>
                                <Card.Text>
                                    <Link to="/perfil" className="text-center">
                                        <h5 className='link-register'>Entra en tu perfil</h5>
                                    </Link>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                </Row>
            </Container >

            <section className='weAre-section'>
                <p className='weAre-text'>
                    Somos un colectivo de profesionales y activistas de la comunicación para el cambio social
                    ¿Cómo podemos ayudarnos?
                </p>
            </section>
            <section className='what-section'>
                <p className='what-text'>
                    Si trabajas en una ONG, una fundación, una institución pública, o una empresa con RSC y tienes en mente
                    realizar una campaña de comunicación, un vídeo, un evento, hagámoslo juntas.
                    En lugar de contratar a una agencia de publicidad o a una especialista externa, cuenta con nosotras.
                    Además de aportar nuestra capacidad creativa y artística, te acompañaremos en todo el proceso para
                    lograr materiales verdaderamente transformadores y valiosos para la ciudadanía.
                </p>

            </section>

        </div >
    );
};

export default HomeCard;