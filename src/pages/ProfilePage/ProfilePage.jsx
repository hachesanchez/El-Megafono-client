import { useContext, useEffect, useState } from "react"
import { AuthContext } from './../../contexts/auth.context'
import './ProfilePage.css'
import { Link } from "react-router-dom"
import { Container, Button, Row, Col } from "react-bootstrap"
import userService from "../../services/user.services"
import ProfileCardDetails from "../../components/ProfileCardDetails/ProfileCardDetails"
import experiencesService from "../../services/experiences.services"
import ExperienceList from "../ExperienceListPage/ExperienceListPage"




const ProfilePage = () => {

    const { user, logout } = useContext(AuthContext)

    const [profileUser, setProfileUser] = useState(null)
    const [experiences, setExperiences] = useState()


    useEffect(() => {
        loadUser()
    }, [user._id])


    const loadUser = () => {
        userService
            .getProfile(user._id)
            .then(({ data }) => {
                setProfileUser(data);
            })
            .catch((error) => {
                console.log(error);
            });

        experiencesService
            .getAllExperiences()
            .then(({ data }) => {
                const ownerExperience = data.filter(data => data.owner?._id == user._id)
                setExperiences(ownerExperience);
            })
            .catch((error) => {
                console.log(error);
            });
    }


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

            <Row className="mb-5" >
                <Col xs={9}>
                    {profileUser && <ProfileCardDetails user={profileUser} />}
                </Col>
                <Col xs={3} md={3} className="d-flex justify-content-center align-items-center">
                    <div className="d-grid gap-1 align-items-center">
                        <Link className="w-100" to={`/profesionales/${user?._id}`}>
                            <Button variant="outline-secondary" className="w-100" size="sm" >Ver mi perfil público</Button>
                        </Link>
                        <Link className="" to={`/edit/${user?._id}`}>
                            <Button variant="outline-secondary" className="w-100" size="sm" >Completar mi perfil</Button>
                        </Link>
                        <Button className="w-100" variant="danger" size="sm" onClick={handleDeleteUser}>
                            Borrar mi perfil
                        </Button>
                    </div>
                </Col>
            </Row>

            <Row>
                <Col>
                    <Col>
                        <p> 1. COMPONENTE CARD DE OFERTAS GUARDADAS</p>
                    </Col>
                    <Col>
                        <p> 2. COMPONENTE CARD DE OFERTAS APLICADAS</p>
                    </Col>
                </Col>
                <Col>
                    <Link className="" to={`/crear-experiencia`}>
                        <Button variant="outline-secondary" className="w-100" size="sm" >Añade experiencia</Button>
                    </Link>
                    <ExperienceList className=' d-grid' experiences={experiences} />
                </Col>
            </Row>

        </Container>
    )
}





export default ProfilePage


