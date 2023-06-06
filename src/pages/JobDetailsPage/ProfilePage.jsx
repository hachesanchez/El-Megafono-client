import { useContext, useEffect, useState } from "react"
import { AuthContext } from './../../contexts/auth.context'
import './ProfilePage.css'
import { Link } from "react-router-dom"
import { Container, Button, Row, Col, Modal } from "react-bootstrap"
import userService from "../../services/user.services"
import ProfileCardDetails from "../../components/ProfileCardDetails/ProfileCardDetails"
import experiencesService from "../../services/experiences.services"
import ExperienceList from "../ExperienceListPage/ExperienceListPage"
import ExperienceCreateForm from "../../components/ExperienceCreateForm/ExperienceCreateForm"
import SavedJobsPage from "../SavedJobsPage/SavedJobsPage"



const ProfilePage = () => {

    const { user, logout } = useContext(AuthContext)

    const [profileUser, setProfileUser] = useState(null)
    const [experiences, setExperiences] = useState()
    const [deletedExperienceId, setDeletedExperienceId] = useState(null);
    const [showModal, setShowModal] = useState(false)
    /* const [showModalProfile, setShowModalProfile] = useState(false) */



    useEffect(() => {

        loadUser()
        updateExperiences()
        /* deleteExperience() */
    }, [user._id, deletedExperienceId])



    const loadUser = () => {
        userService
            .getProfile(user._id)
            .then(({ data }) => {
                setProfileUser(data);
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


    const updateExperiences = () => {
        experiencesService
            .getAllExperiences()
            .then(({ data }) => {
                const ownerExperience = data.filter((data) => data.owner?._id === user._id && data._id !== deletedExperienceId);
                setExperiences(ownerExperience);
            })
            .catch((error) => {
                console.log(error);
            });
    }



    /*     const deleteExperience = () => {
            experiencesService
                .deleteExperience
                .then(({ data }) => {
                    const ownerExperience = data.filter((data) => data.owner?._id === user._id && data._id !== deletedExperienceId);
                    setDeletedExperienceId(ownerExperience);
                })
                .catch((error) => {
                    console.log(error);
                });
        }
     */




    return (

        <Container>

            <Row className="mb-5" >
                <Col xs={9}>
                    {profileUser && <ProfileCardDetails user={profileUser} />}
                </Col>
                <Col xs={3} md={3} className="d-flex justify-content-center align-items-center">
                    <div className="d-grid gap-1 align-items-center">
                        <Link className="w-100" to={`/profesionales/${user?._id}`}>
                            <Button variant="outline-dark" className="w-100" size="sm" >Ver mi perfil público</Button>
                        </Link>
                        <Link className="" to={`/editar/${user?._id}`}>
                            <Button variant="outline-dark" className="w-100" size="sm" >Completar mi pperfil</Button>
                        </Link>
                        {/*    <Button variant="outline-dark" 
                        className="w-100" 
                        size="sm" 
                        onClick={() => setShowModalProfile(true)} >Completar mi perfil
                        </Button> */}

                        <Button className="w-100" variant="danger" size="sm" onClick={handleDeleteUser}>
                            Borrar mi perfil
                        </Button>
                    </div>
                </Col>
            </Row>

            <Row>
                <Col className="offset-md-1" xs={4}>
                    <Col>
                        <SavedJobsPage savedJobs={profileUser?.savedJob} /* owner={profileUser} */ />
                    </Col>
                    {/* <Col>
                        <p> 2. COMPONENTE CARD DE OFERTAS APLICADAS</p>
                    </Col> */}
                </Col>
                <Col className="md-1" xs={6}>
                    <Button variant="dark" className="w-100" size="sm" onClick={() => setShowModal(true)} >Añade experiencia</Button>
                    <ExperienceList experiences={experiences} />
                </Col>
            </Row>



            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Nueva experiencia</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ExperienceCreateForm closeModal={() => setShowModal(false)} updateExperiences={updateExperiences} />
                </Modal.Body>
            </Modal>

            {/* TODO: ESTA MODAL NO FUNCIONA, NO CARGA LOS DATOS YA INTRODUCIDOS, NI DESPLIEGA OPCIONES DE PROFESIONAL */}
            {/*   <Modal show={showModalProfile} onHide={() => setShowModalProfile(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Completar mi perfil</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <EditCandidateForm closeModal={() => setShowModalProfile(false)} />
                </Modal.Body>
            </Modal> */}


        </Container>
    )
}





export default ProfilePage

