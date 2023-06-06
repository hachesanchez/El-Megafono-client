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
                    ¡Bienvenido a nuestra plataforma de conexión profesional! Somos una comunidad en línea diseñada para unir
                    a profesionales de diversos campos con organizaciones
                    y entidades del tercer sector que buscan personas con una sensibilidad especial.
                </p>
            </section>
            <section className='what-section'>
                <p className='what-text'>
                    Creemos en el poder de la colaboración y la sinergia entre profesionales y organizaciones comprometidas
                    con un impacto positivo en la sociedad. Únete a nuestra comunidad hoy mismo y descubre nuevas
                    oportunidades, conexiones significativas y proyectos inspiradores. Juntos, podemos marcar la diferencia
                    y construir un mundo mejor.
                    <br />
                    <br />
                    Aquí podrás encontrar una amplia gama de profesionales calificados, desde expertos en desarrollo comunitario
                    hasta especialistas en educación inclusiva, pasando por profesionales de la salud, servicios sociales, medio ambiente
                    y mucho más. Nuestro objetivo es crear un espacio donde los talentos y las pasiones se combinen con las necesidades
                    y las misiones de las organizaciones del tercer sector.
                    <br />
                    <br />
                    Para los profesionales, ofrecemos una plataforma fácil de usar que te permitirá mostrar tu experiencia,
                    habilidades y logros destacados. Podrás crear un perfil completo, destacar tus áreas de especialización y
                    conectarte con organizaciones que compartan tus valores y objetivos. Ya sea que busques una oportunidad laboral a tiempo
                    completo, un proyecto a corto plazo o voluntariado, aquí encontrarás un espacio para hacer brillar tu talento y contribuir
                    a causas significativas.
                    <br />
                    <br />
                    Para las organizaciones y entidades del tercer sector, ofrecemos un directorio integral de profesionales con una
                    sensibilidad especial en una amplia gama de áreas. Podrás buscar perfiles basados en criterios específicos, como habilidades,
                    experiencia, ubicación y afinidad con tu misión. Nuestra plataforma te brindará acceso a una red de profesionales comprometidos
                    y apasionados que pueden fortalecer tu equipo y ayudarte a lograr tus objetivos sociales.
                </p>

            </section>

        </div >
    );
};

export default HomeCard;