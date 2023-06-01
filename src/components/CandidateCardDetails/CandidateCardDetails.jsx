import { Card, Container, Image, Row, Col } from 'react-bootstrap'
import './CandidateCardDetails.css'
import ExperiencesCard from '../ExperiencesCard/ExperiencesCard'


const CandidateCardDetails = ({ user }) => {

    return (

        <Container>

            <Row className="d-flexjustify-content-center align-items-center">
                <Col /* md={{ span: 3 }} */ >
                    <Image className='avatar' src={user.avatar} alt="Avatar" roundedCircle />
                </Col>
                <Col /* md={{ span: 8, offset: 4 }} */>
                    <h1>Bienvenidx al perfil de {user.username}</h1>
                    <h4>{user.jobCategory}</h4>
                    {user.description}
                </Col>
            </Row>

            <Row className='mt-5'>
                <Col>
                    <div>
                        {user.availability ? (
                            <p>Disponible</p>
                        ) : (
                            <p>No disponible</p>
                        )}
                    </div>
                    <div>
                        {user.location}
                        {user.availability ? (
                            <p>(me puedo desplazar)</p>
                        ) : (
                            <p>(no me desplazo)</p>
                        )}
                    </div>
                    <p>Tarifa diaria: {user.dailyRate}€</p>
                    <p>Años de experiencia: {user.yearsOfExperience}</p>
                </Col>

                <Col>
                    <div>
                        <p>Skills:</p>
                        <ul>
                            {user.skills.map((skill, index) => (
                                skill.split(',').map((subSkill, subIndex) => (
                                    <li key={`${index}-${subIndex}`}> {subSkill.trim()}</li>
                                ))
                            ))}
                        </ul>

                    </div>
                    <div>
                        <p>Idiomas:</p>
                        <ul>
                            {user.languages.map((language, index) => (
                                <li key={index}>
                                    {language.name} - Nivel: {language.level}
                                </li>))}
                        </ul>
                    </div>
                </Col>
                <Col>
                    <p>Experiencias (array) +encapsularlas</p> {user.experience}
                    <ExperiencesCard></ExperiencesCard>
                </Col>

            </Row>


        </Container >

    )
}

export default CandidateCardDetails