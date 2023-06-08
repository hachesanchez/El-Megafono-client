import { Container, Button, Image, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import userService from '../../services/user.services';
import { useContext, } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom"
import { AuthContext } from './../../contexts/auth.context';
import './CandidateCardDetails.css';



const CandidateCardDetails = ({ user: profileUser }) => {

    const { id } = useParams();
    const { logout, user } = useContext(AuthContext);
    const navigate = useNavigate()


    const handleDeleteUser = () => {

        const { _id: userId } = profileUser

        userService
            .deleteProfile(userId)
            .then(() => {
                logout();
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const handleEditProfile = () => {
        if (id === user?._id || user.role === 'ADMIN') {
            navigate(`/editar/${profileUser._id}`);
        } else {
            navigate(`/perfil`);
        }
    };



    return (

        <Container>

            <div className="candidate-card-details">

                <Row className="align-items-center">

                    <Col xs={12} sm={12} md={3} className="avatar-col">
                        <Image className="avatar" src={profileUser.avatar} alt="Avatar" roundedCircle />
                    </Col>

                    <Col xs={12} sm={12} md={9} className="profile-col">
                        <h1 className="justify-text-center mt-1">Bienvenidx al perfil de {profileUser.username}</h1>
                        <h4 className="job-category mt-1">{profileUser.jobCategory}</h4>
                        <p className="description m-3">{profileUser.description}</p>

                        <Row className="align-items-center text-center mt-4">
                            <Col>
                                {(id === user?._id || user.role === 'ADMIN') && (
                                    <div className="profile-actions">
                                        <Button variant="outline-dark" size="sm" onClick={handleEditProfile}>
                                            Completar mi perfil
                                        </Button>
                                        <Button className="delete-profile-button" variant="outline-danger" size="sm" onClick={handleDeleteUser}>
                                            Borrar mi perfil
                                        </Button>
                                    </div>
                                )}
                            </Col>
                            {/*  <Col md={1}>
                                <FavouriteCandidate />
                            </Col> */}

                        </Row>
                    </Col>

                </Row>

            </div>


        </Container >

    )
}

export default CandidateCardDetails