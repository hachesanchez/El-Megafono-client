import { Card, Container, Button, Image, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import userService from '../../services/user.services';
import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AuthContext } from './../../contexts/auth.context';
import './CandidateCardDetails.css';
import FavouriteCandidate from '../FavouriteCandidate/FavouriteCandidate';



const CandidateCardDetails = ({ user: profileUser }) => {

    const { id } = useParams();
    const { logout, user } = useContext(AuthContext);

    const handleDeleteUser = () => {
        const userId = profileUser._id;
        userService
            .deleteProfile(userId)
            .then((response) => {
                logout();
            })
            .catch((error) => {
                console.log(error);
            });
    };



    return (

        <Container>

            <div className="candidate-card-details">

                <Row className="align-items-center">

                    <Col xs={12} sm={12} md={3} className="avatar-col">
                        <Image className="avatar" src={profileUser.avatar} alt="Avatar" roundedCircle />
                    </Col>

                    <Col xs={12} sm={12} md={9} className="profile-col">
                        <h1>Bienvenidx al perfil de {profileUser.username}</h1>
                        <h4 className="job-category">{profileUser.jobCategory}</h4>
                        <p className="description">{profileUser.description}</p>

                        {/*  //TODO: NO OCULTA LOS BOTONES Y SE PUEDE ACCEDER POR PARAMS Y EDITAR LO DE OTRA PERSONA*/}
                        <Row className="align-items-center text-center mt-4">
                            <Col>

                                {id === user?._id || user.role === "ADMIN" && (
                                    <div className="profile-actions">
                                        <Link className="edit-link" to={`/editar/${profileUser._id}`}>
                                            <Button variant="outline-dark" size="sm">
                                                Completar mi perfil
                                            </Button>
                                        </Link>
                                        <Button
                                            className="delete-profile-button"
                                            variant="outline-danger"
                                            size="sm"
                                            onClick={handleDeleteUser}
                                        > Borrar mi perfil
                                        </Button>
                                    </div>
                                )}
                            </Col>
                            <Col md={1}>
                                <FavouriteCandidate />
                            </Col>

                        </Row>
                    </Col>

                </Row>

            </div>


        </Container >

    )
}

export default CandidateCardDetails