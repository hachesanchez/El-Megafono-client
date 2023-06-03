import { Card, Container, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './JobDetailsCard.css';
import SaveJob from '../SavedJob/SavedJob';



const JobDetailsCard = ({ title, description, grossSalary, contract, owner, yearsOfExperience, remoteJob, startDate, location, languages, _id }) => {

    return (

        <Container>
            <Card className='p-3 m-1 JobCard'>
                <Row>
                    <Col xs={8}>
                        <div style={{ display: 'inline-flex', alignItems: 'center' }}>
                            <Card.Title className='m-2'><h1>{title}</h1></Card.Title>
                            <SaveJob />
                        </div>
                        <Card.Body>
                            <Card.Text className=' '>
                                <p> <strong >{owner && owner.username}</strong>  </p>
                                <p>{description}</p>
                                <ul>
                                    <li><strong className='prop-name'>Salario bruto anual:</strong> {grossSalary}</li>
                                    <li> <strong className='prop-name'>Tipo de contrato</strong> {contract}</li>
                                    <li><strong className='prop-name'>Experiencia requerida</strong> {yearsOfExperience} años</li>
                                    <li><strong className='prop-name'>Lugar del puesto de trabajo</strong> {location}</li>
                                    <li><strong className='prop-name'>Posibilidad de teletrabajo:</strong>  {remoteJob ? (<p>Sí</p>) : (<p>No</p>)}   </li>
                                    <li><strong className='prop-name'>Fecha de incorporación(mes y año)</strong> {startDate}</li>
                                    <li><strong className='prop-name'>Idiomas solicitados: </strong>   {languages.map((language, index) => (
                                        <li key={index}>
                                            {language.name} - Nivel: {language.level}
                                        </li>))}</li>
                                </ul>
                            </Card.Text>
                        </Card.Body>
                    </Col>

                    <Col xs={4} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                        <Row>
                            <Card.Img variant="default" className='job-avatar-details rounded-circle mt-5' src={owner && owner.avatar} alt="Avatar" />
                        </Row>
                        <Row className='d-flex justify-content-between'>
                            <Link to="#" className="btn btn-success" /* onClick={handleDeleteExperience} */>
                                Aplicar
                            </Link>
                        </Row>
                    </Col>

                </Row>
            </Card>
        </Container >

    )
}

export default JobDetailsCard


