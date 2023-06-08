import { Link } from 'react-router-dom';
import { Col, Container, Row, Image, Card } from 'react-bootstrap';
import {
    HOMEPAGE_WEARE_SECTION_ARRAY,
    HOMEPAGE_WHAT_SECTION_ARRAY,
    HOMEPAGE_INTRO_SECTION_ARRAY
}
    from '../../consts/info-consts';
import headerImg from '../../assets/images/Header-3.jpg'
import './HomeCard.css';


const HomeCard = () => {

    return (

        <div className="home-card" style={{ backgroundColor: '', paddingBottom: '50px' }}>
            <Image
                src={headerImg}
                style={{ width: '100%', maxHeight: '800px', objectFit: 'cover', marginBottom: '30px', }}
            />
            <Container>
                <Row className='align-items-center justify-content-center'>
                    <Col md={4}>
                        <Card className="text-center c1 mb-2" style={{ border: 'none', padding: '30px' }}>
                            <Card.Body>
                                <Card.Text className='home-text'>
                                    {HOMEPAGE_INTRO_SECTION_ARRAY}
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
                {HOMEPAGE_WEARE_SECTION_ARRAY}
            </section>
            <section className='what-section'>
                {HOMEPAGE_WHAT_SECTION_ARRAY}
            </section>

        </div >
    );
};

export default HomeCard;