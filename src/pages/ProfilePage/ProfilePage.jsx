import { useContext } from "react"
import { AuthContext } from './../../contexts/auth.context'
import './ProfilePage.css'
import CandidateCardDetails from "../../components/CandidateCardDetails/CandidateCardDetails"
import { Link } from "react-router-dom"
import { Container, Button, Row, Col } from "react-bootstrap"
import userService from "../../services/user.services"
import { useParams } from "react-router-dom";






const ProfilePage = () => {

    const { user, logout } = useContext(AuthContext)


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

    return (

        <Container>
            <h1>Hola {user.username}</h1>
            {
                user && <img className="profilePic" src={user.avatar}></img>
            }

            <p>{user.description}</p>
            <p>{user.email}</p>
            <p>{user.location}</p>
            <p>{user.role}</p>

            <Row md={{ span: 2 }}>
                <Col>
                    <Link to={`/edit/${user?._id}`}>
                        <Button variant="dark">Completar mi perfil</Button>
                    </Link>
                </Col>
                <Col>
                    <Button variant="danger" onClick={handleDeleteUser}>
                        Borrar mi perfil
                    </Button>
                </Col>
            </Row>


        </Container>
    )
}

export default ProfilePage
