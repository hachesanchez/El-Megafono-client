import { Card, Container, Image, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './CandidateCardDetails.css'
import ExperiencesCard from '../ExperiencesCard/ExperiencesCard'


const CandidateCardDetails = ({ users }) => {

    return (

        <Container>

            <Row>
                <Col /* md={{ span: 3 }} */ >
                    <Image className='avatar' src={users.avatar} alt="Avatar" roundedCircle />
                </Col>
                <Col /* md={{ span: 8, offset: 4 }} */>
                    <h1>Bienvenidx al perfil de {users.username}</h1>
                    <h4>{users.jobCategory}</h4>
                    {users.description}
                </Col>
            </Row>

            <Row className='mt-5'>
                <Col>
                    <div>
                        {users.availability ? (
                            <p>Disponible</p>
                        ) : (
                            <p>No disponible</p>
                        )}
                    </div>
                    <div>
                        {users.location}
                        {users.availability ? (
                            <p>(me puedo desplazar)</p>
                        ) : (
                            <p>(no me desplazo)</p>
                        )}
                    </div>
                    <p>Tarifa diaria: {users.dailyRate}€</p>
                    <p>Años de experiencia: {users.yearsOfExperience}</p>
                </Col>

                <Col>
                    <div>
                        <p>Skills:</p>
                        <ul>
                            {users.skills.map((skill, index) => (
                                skill.split(',').map((subSkill, subIndex) => (
                                    <li key={`${index}-${subIndex}`}> {subSkill.trim()}</li>
                                ))
                            ))}
                        </ul>

                    </div>
                    <div>
                        <p>Idiomas:</p>
                        <ul>
                            {users.languages.map((language, index) => (
                                <li key={index}>
                                    {language.name} - Nivel: {language.level}
                                </li>))}
                        </ul>
                    </div>
                </Col>
                <Col>
                    <p>Experiencias (array) +encapsularlas</p> {users.experience}
                    <ExperiencesCard></ExperiencesCard>
                </Col>

            </Row>


        </Container >

    )
}

export default CandidateCardDetails