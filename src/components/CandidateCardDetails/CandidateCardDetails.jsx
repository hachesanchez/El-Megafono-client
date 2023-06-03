import { Card, Container, Button, Image, Row, Col } from 'react-bootstrap'
import { Link } from "react-router-dom"
import userService from "../../services/user.services"
import { useContext, useEffect, useState } from "react"
import { useParams } from 'react-router-dom'

import { AuthContext } from './../../contexts/auth.context'
import './CandidateCardDetails.css'



const CandidateCardDetails = ({ user }) => {

    const { id } = useParams()
    const { logout } = useContext(AuthContext)

    const handleDeleteUser = () => {
        const userId = user._id
        userService
            .deleteProfile(userId)
            .then((response) => {
                logout()
            })
            .catch((error) => {
                console.log(error);
            });
    };

    console.log('params------', id)
    console.log('Y EL USER ID----', { id })

    return (

        <Container>

            <Row className="d-flexjustify-content-center align-items-center">
                <Col  >
                    <Image className='avatar' src={user.avatar} alt="Avatar" roundedCircle />
                </Col>
                <Col  >
                    <h1>Bienvenidx al perfil de {user.username}</h1>
                    <h4>{user.jobCategory}</h4>
                    {user.description}

                    {user && id === user?._id && (
                        <div className="mt-4 align-items-center display-inline">
                            <Link className="" to={`/editar/${user._id}`}>
                                <Button variant="outline-dark" className="" size="sm">
                                    Completar mi perfil
                                </Button>
                            </Link>
                            <Button
                                className=""
                                variant="outline-danger"
                                size="sm"
                                onClick={handleDeleteUser}
                            >
                                Borrar mi perfil
                            </Button>
                        </div>
                    )}



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
            </Row>

        </Container >

    )
}

export default CandidateCardDetails