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
import JobOwnedList from "../JobOwnedList/JobOwnedList"
import SwitchAvailability from "../../components/SwitchAvailability/SwitchAvailability"
import './ProfilePage.css'


const ProfilePage = () => {

    const { user, logout } = useContext(AuthContext)

    const [profileUser, setProfileUser] = useState(null)
    const [experiences, setExperiences] = useState([])
    const [deletedExperienceId, setDeletedExperienceId] = useState(null)
    const [showModal, setShowModal] = useState(false)
    const [ownedJobs, setOwnedJobs] = useState()
    const [deletedOwnJobId, setDeletedOwnJob] = useState(null)
    const [availability, setAvailability] = useState(false)



    useEffect(() => {

        loadUser()
        updateExperiences()
        handleOwnedJobs()

    }, [deletedExperienceId, deletedOwnJobId])



    const loadUser = () => {
        userService
            .getProfile(user._id)
            .then(({ data }) => {
                setProfileUser(data)
                setAvailability(data.availability)
            })
            .catch((error) => {
                console.log(error)
            })
    }


    const handleDeleteUser = () => {
        const userId = user._id
        userService
            .deleteProfile(userId)
            .then((response) => {
                logout()
            })
            .catch((error) => {
                console.log(error)
            })
    }


    // TODO: enganchar a nuevo servicio getuserexperiences
    const updateExperiences = () => {
        experiencesService
            .getAllExperiences()
            .then(({ data }) => {
                const ownerExperience = data.filter((data) => data.owner?._id === user._id && data._id !== deletedExperienceId)
                setExperiences(ownerExperience)
            })
            .catch((error) => {
                console.log(error)
            })
    }


    const deleteExperience = (id) => {
        experiencesService
            .deleteExperience(id)
            .then(({ data }) => {
                setDeletedExperienceId(data._id)
            })
            .catch((error) => {
                console.log(error)
            })
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
                setDeletedOwnJob(jobId)
            })
            .catch((error) => {
                console.log(error)
            })
    }


    const handleAvailabilityToggle = () => {
        const userId = user._id;
        const updatedData = { availability: !availability };

        userService
            .editProfile(userId, updatedData)
            .then(response => {
                setAvailability(response.data.availability);
            })
            .catch(error => {
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
                            (user.role === 'PROFESIONAL' || user.role === 'ADMIN') &&
                            <>
                                <SwitchAvailability availability={availability} setAvailability={setAvailability} />
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
                (user.role === 'ORGANIZACIÓN' || user.role === 'ADMIN') ? (
                    <>
                        <Row md={9} >
                            <h4 className="mb-4 mx-4 ofertas-tilte">Mis ofertas publicadas</h4>
                            <Link className="w-50 m-2" to={`/crear-oferta`}>
                                <Button variant="warning btn-crear" className="w-50 mx-5" size="sm" >Añadir oferta de trabajo</Button>
                            </Link>
                            <JobOwnedList jobs={ownedJobs} deleteJob={deletedOwnJob} />
                        </Row>
                    </>
                ) : ((null))
            }

            {
                (user.role === 'PROFESIONAL' || user.role === 'ADMIN') ? (
                    <>
                        <Row>
                            <Col xs={6}>
                                <Button variant="btn-custom btn-crear" className="w-100" size="sm" onClick={() => setShowModal(true)} >Añade experiencia</Button>
                                <ExperienceList experiences={experiences} deleteExperience={deleteExperience} />
                            </Col>
                            <Col className="justify-items-center" xs={4}>
                                <h4 className="mb-4 mx-4 ofertas-tilte">Mis ofertas guardadas</h4>
                                <hr />
                                <SavedJobsPage savedJobs={profileUser?.savedJob} />
                            </Col>
                        </Row>
                    </>
                ) : ((null))
            }


            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Nueva experiencia para tu CV</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ExperienceCreateForm closeModal={() => setShowModal(false)} updateExperiences={updateExperiences} />
                </Modal.Body>
            </Modal>

        </Container >
    )
}


export default ProfilePage


{/* TODO: <Col><p> 2. COMPONENTE CARD DE OFERTAS APLICADAS</p> </Col> */ }

/* const [showModalProfile, setShowModalProfile] = useState(false) */
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