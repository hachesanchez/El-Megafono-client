import { useContext, useEffect, useState } from "react"
import { AuthContext } from './../../contexts/auth.context'
import { Link } from "react-router-dom"
import { Container, Button, Row, Col, Modal } from "react-bootstrap"
import userService from "../../services/user.services"
import jobService from "../../services/job.services"
import ProfileCardDetails from "../../components/ProfileCardDetails/ProfileCardDetails"
import experiencesService from "../../services/experiences.services"
import ExperienceList from "../ExperienceListPage/ExperienceListPage"
import ExperienceCreateForm from "../../components/ExperienceCreateForm/ExperienceCreateForm"
import SavedJobsPage from "../SavedJobsPage/SavedJobsPage"
import './ProfilePage.css'
import JobOwnedList from "../JobOwnedList/JobOwnedList"



const ProfilePage = () => {

    const { user, logout } = useContext(AuthContext)

    const [profileUser, setProfileUser] = useState(null)
    const [experiences, setExperiences] = useState()
    const [deletedExperienceId, setDeletedExperienceId] = useState(null);
    const [showModal, setShowModal] = useState(false)
    const [ownedJobs, setOwnedJobs] = useState()
    const [deletedOwnJobId, setDeletedOwnJob] = useState(null);
    /* const [showModalProfile, setShowModalProfile] = useState(false) */


    useEffect(() => {

        loadUser()
        updateExperiences()
        handleOwnedJobs()


    }, [deletedExperienceId, deletedOwnJobId])


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


    const deleteExperience = (id) => {
        experiencesService
            .deleteExperience(id)
            .then(({ data }) => {
                setDeletedExperienceId(data._id)
            })
            .catch((error) => {
                console.log(error);
            });
    }


    const handleOwnedJobs = () => {
        jobService
            .getAllJobs()
            .then(({ data }) => {
                const ownerJobs = data.filter((job) => job.owner?._id === user._id && data._id !== deletedOwnJobId)
                setOwnedJobs(ownerJobs)
            })
            .catch((error) => {
                console.log(error)
            })
    }


    const deletedOwnJob = (jobId) => {

        jobService
            .deleteJob(jobId)
            .then(({ data }) => {
                setDeletedOwnJob(jobId);
            })
            .catch((error) => {
                console.log(error);
            });
    };




    return (

        <Container>

            <Row className="mb-4" >
                <Col xs={9}>
                    {profileUser && <ProfileCardDetails user={profileUser} />}
                </Col>
                <Col xs={3} md={3} className="d-flex justify-content-center align-items-center">
                    <div className="d-grid gap-1 align-items-center">

                        {
                            user && (user.role === 'PROFESIONAL' || user.role === 'ADMIN') &&
                            <>
                                <Link className="w-100" to={`/profesionales/${user?._id}`}>
                                    <Button variant="outline-dark" className="w-100" size="sm" >Ver mi perfil público</Button>
                                </Link>
                            </>
                        }

                        <>
                            <Link className="" to={`/editar/${user?._id}`}>
                                <Button variant="outline-dark" className="w-100" size="sm" >Completar mi perfil</Button>
                            </Link>
                            <Button className="w-100" variant="danger" size="sm" onClick={handleDeleteUser}>
                                Borrar mi perfil
                            </Button>
                        </>


                    </div>
                </Col>
            </Row>

            {
                user && (user.role === 'ORGANIZACIÓN' || user.role === 'ADMIN') ? (
                    <>
                        <Row md={9} className="mb-4">
                            <h3>Mis ofertas publicadas</h3>
                            <JobOwnedList jobs={ownedJobs} deleteJob={deletedOwnJob} />
                        </Row>
                    </>
                ) : ((null))
            }


            {
                user && (user.role === 'PROFESIONAL' || user.role === 'ADMIN') ? (
                    <>
                        <Row>
                            <Col xs={6}>
                                <Button variant="dark" className="w-100" size="sm" onClick={() => setShowModal(true)} >Añade experiencia</Button>
                                <ExperienceList experiences={experiences} deleteExperience={deleteExperience} />
                            </Col>
                            <Col className="justify-items-center" xs={4}>
                                <h4 className="mx-3"> Mis ofertas guardadas</h4>
                                <SavedJobsPage savedJobs={profileUser?.savedJob} />
                            </Col>
                            {/* <Col><p> 2. COMPONENTE CARD DE OFERTAS APLICADAS</p> </Col> */}
                        </Row>
                    </>
                ) : ((null))
            }


            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Nueva experiencia</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ExperienceCreateForm closeModal={() => setShowModal(false)} updateExperiences={updateExperiences} />
                </Modal.Body>
            </Modal>



        </Container >
    )
}


export default ProfilePage


{/* TODO: ESTA MODAL NO FUNCIONA, NO CARGA LOS DATOS YA INTRODUCIDOS, NI DESPLIEGA OPCIONES DE PROFESIONAL */ }
{/*   <Modal show={showModalProfile} onHide={() => setShowModalProfile(false)}>
    <Modal.Header closeButton>
        <Modal.Title>Completar mi perfil</Modal.Title>
    </Modal.Header>
    <Modal.Body>
        <EditCandidateForm closeModal={() => setShowModalProfile(false)} />
    </Modal.Body>
</Modal> */}

{/*    <Button variant="outline-dark" 
            className="w-100" 
            size="sm" 
            onClick={() => setShowModalProfile(true)} >Completar mi perfil
            </Button> */}