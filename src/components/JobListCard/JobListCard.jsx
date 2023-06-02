import { Card, Button, Container, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './JobListCard.css'


const JobListCard = ({ title, description, grossSalary, contract, owner, _id }) => {


    return (

        <Container>

            <Card className='p-3 m-1 JobCard'>
                <Row>
                    <Col xs={8}>

                        <Link to={`/empleos/${_id}`}>
                            <Card.Title className='m-3'><h3>{title}</h3></Card.Title>
                        </Link>

                        <Card.Body>
                            <Card.Text className=''>
                                <p> Publicado por:  {owner && owner.username}</p>
                                {description}
                                <p>Salario bruto anual : {grossSalary}</p>
                            </Card.Text>

                        </Card.Body>
                    </Col>
                    <Col xs={4}>
                        <Card.Img variant className='job-avatar rounded-circle' src={owner && owner.avatar} alt="Avatar" />
                        <Link to={`/empleos/${_id}`}>
                            <Button variant="outline-success" size="sm">
                                Detalles de la oferta
                            </Button>
                        </Link>
                        <Button variant="danger" size="sm">LIKE</Button>
                    </Col>
                </Row>
            </Card>


        </Container>
    )
}

export default JobListCard