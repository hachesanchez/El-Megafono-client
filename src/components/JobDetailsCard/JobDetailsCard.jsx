import { Card, Container, Col, Row, Image, Button, Modal } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './JobDetailsCard.css';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/auth.context';
import UserService from '../../services/user.services';
import unsaveJobImg from '../../../src/assets/images/save-icon1.png'
import saveJobImg from '../../../src/assets/images/save-icon2.png'
import Loader from '../../components/Loader/Loader'
import userService from '../../services/user.services';


const JobDetailsCard = ({ title, jobCategory, description, grossSalary, contract, owner, yearsOfExperience, remoteJob, startDate, location, languages, isFilled, _id, loadJob }) => {


    const { user } = useContext(AuthContext)
    const [showModal, setShowModal] = useState(false)
    const [userSaved, setUserSaved] = useState([])
    const [jobSavedBy, setJobSavedBy] = useState([])



    useEffect(() => {
        getProfile()
        getAllProfiles()

    }, [])


    const getProfile = () => {
        userService
            .getProfile(user._id)
            .then(({ data }) => {
                setUserSaved(data.savedJob);
            })
            .catch((error) => {
                console.log(error);
            });
    }


    const handleSaveJob = () => {
        UserService
            .addSavedJob(user._id, _id)
            .then(({ data }) => {
                setShowModal(true)
                getProfile()
            })
            .catch((error) => {
                console.log(error);
            });
    }


    const handleDeleteJob = () => {
        UserService
            .deleteSavedJob(user._id, _id)
            .then(({ data }) => {
                getProfile()
            })
            .catch((error) => {
                console.log(error);
            })
    }


    const getAllProfiles = () => {
        userService
            .getAllProfiles()
            .then(({ data }) => {
                console.log('la data es----', data)
                setJobSavedBy(data);
            })
            .catch((error) => {
                console.log(error);
            });

    }

    return (


        <Container>

            <Card className='p-3 m-1 JobCard'>

                <Row >
                    <Col xs={{ span: 2, offset: 10 }}>
                        <div className="m-2 is-filled-text"> {isFilled ? (
                            <span className="text-danger">Este proceso ya se ha cerrado</span>
                        ) : <span className="text-success">Oferta en curso</span>}
                        </div>
                    </Col>
                </Row >
                <Row >
                    <Card.Text className='mx-3 mb-2 job-category-details'>{jobCategory}</Card.Text>
                </Row>

                <Row >
                    <Col xs={12} sm={12} md={8}>

                        <div style={{ display: 'inline-flex', alignItems: 'center' }}>
                            <Card.Title className='m-2'><h1>{title}</h1></Card.Title>

                            {!user ? <Loader /> : console.log(userSaved)}

                            {
                                user.role !== "ORGANIZACIÓN" && (

                                    userSaved.some(elm => elm._id === _id)
                                        ?
                                        <Button variant='link' onClick={handleDeleteJob}>
                                            <img className='saveicon' src={saveJobImg} />
                                        </Button>
                                        :
                                        <Button variant='link' onClick={handleSaveJob}>
                                            <img className='saveicon' src={unsaveJobImg} />
                                        </Button>
                                )
                            }
                        </div>

                        <Card.Body>
                            <Card.Text className=' '>
                                <p> <strong >{owner && owner.username}</strong>  </p>
                                <p>{description}</p>
                                <ul>
                                    <li><strong className='prop-name'>Salario bruto anual:</strong> {grossSalary}€</li>
                                    <li><strong className='prop-name'>Tipo de contrato</strong> {contract}</li>
                                    <li><strong className='prop-name'>Experiencia requerida:</strong> {yearsOfExperience} año(s)</li>
                                    <li><strong className='prop-name'>Lugar del puesto de trabajo:</strong> {location}</li>
                                    <li><strong className='prop-name'>Posibilidad de teletrabajar:</strong>  {remoteJob ? (<>Sí</>) : (<>No</>)}   </li>
                                    <li><strong className='prop-name'>Fecha de incorporación </strong> {startDate}</li>
                                    {/*  <li><strong className='prop-name'>Idiomas solicitados: </strong>   {languages.map((language, index) => (
                                        <li key={index}>
                                            {language.name} - Nivel: {language.level}
                                        </li>))}</li> */}
                                </ul>
                            </Card.Text>
                        </Card.Body>
                    </Col>

                    <Col xs={12} sm={12} md={4} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                        <Row>
                            <Card.Img variant="default" className='job-avatar-details rounded-circle mt-5' src={owner && owner.avatar} alt="Avatar" />
                        </Row>
                    </Col>
                </Row>

                <hr></hr>

                {owner && (
                    <Row className='d-flex'>
                        {jobSavedBy
                            .filter(user => user.savedJob.includes(_id))
                            .map(user => (
                                <Col xs={5} sm={2} md={1} >
                                    <Link to={`/profesionales/${user._id}`} key={user._id} className="card-link ">
                                        <Image className="avatar-saved-job" src={user.avatar} alt="Avatar" roundedCircle />
                                    </Link>
                                </Col>
                            ))}
                    </Row>
                )}
            </Card>


            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>¡Has guardado esta oferta!</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Podrás aplicar cuando me dé tiempo a programar esto
                </Modal.Body>
            </Modal>

        </Container >

    )
}

export default JobDetailsCard



{/* <Row className='d-flex justify-content-between'>
                            <Link to="#" className="btn btn-success" >
                                Aplicar
                            </Link>
                            onClick={handleApplyExperience} 
                        </Row> */}


