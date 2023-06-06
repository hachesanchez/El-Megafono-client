import { Card, Container, Col, Row, Form, Button, Modal } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './JobDetailsCard.css';
import SaveJob from '../SavedJob/SavedJob';
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



    useEffect(() => {
        getProfile();
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


    return (

        <Container>

            <Card className='p-3 m-1 JobCard'>
                <Row >
                    <Card.Text className='mx-3 mb-2 job-category-details'>{jobCategory}</Card.Text>
                </Row>
                <Row >
                    <Col xs={12} sm={12} md={8}>
                        <div style={{ display: 'inline-flex', alignItems: 'center' }}>

                            <Card.Title className='m-2'><h1>{title}</h1></Card.Title>

                            {!user ? <Loader /> : console.log(userSaved)}

                            {
                                userSaved.some(elm => elm._id === _id)
                                    ?
                                    <Button variant='link' onClick={handleDeleteJob}>
                                        {/*    <h1>ELIMINAR</h1> */}
                                        <img className='saveicon' src={saveJobImg} />
                                        {/*   <SaveJob saved={savedJob} setSaved={setSavedJob} /> */}
                                    </Button>
                                    :
                                    <Button variant='link' onClick={handleSaveJob}>

                                        {/*  <SaveJob saved={savedJob} setSaved={setSavedJob} /> */}
                                        <img className='saveicon' src={unsaveJobImg} />
                                    </Button>
                            }

                        </div>
                        <Card.Body>
                            <Card.Text className=' '>
                                <p> <strong >{owner && owner.username}</strong>  </p>
                                <p>{description}</p>
                                <ul>
                                    <li><strong className='prop-name'>Salario bruto anual:</strong> {grossSalary}€</li>
                                    <li> <strong className='prop-name'>Tipo de contrato</strong> {contract}</li>
                                    <li><strong className='prop-name'>Experiencia requerida:</strong> {yearsOfExperience} año(s)</li>
                                    <li><strong className='prop-name'>Lugar del puesto de trabajo:</strong> {location}</li>
                                    <li><strong className='prop-name'>Posibilidad de teletrabajar:</strong>  {remoteJob ? (<>Sí</>) : (<>No</>)}   </li>
                                    <li><strong className='prop-name'>Fecha de incorporación </strong> {startDate}</li>
                                    {/*  <li><strong className='prop-name'>Idiomas solicitados: </strong>   {languages.map((language, index) => (
                                        <li key={index}>
                                            {language.name} - Nivel: {language.level}
                                        </li>))}</li> */}
                                </ul>
                                <div className="mt-1"> {isFilled ? (
                                    <span className="text-danger">Este proceso ya se ha cerrado</span>
                                ) : <span className="text-success">Oferta en curso</span>}
                                </div>
                            </Card.Text>
                        </Card.Body>
                    </Col>

                    <Col xs={12} sm={12} md={4} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                        <Row>
                            <Card.Img variant="default" className='job-avatar-details rounded-circle mt-5' src={owner && owner.avatar} alt="Avatar" />
                        </Row>
                        {/* <Row className='d-flex justify-content-between'>
                            <Link to="#" className="btn btn-success" >
                                Aplicar
                            </Link>
                            onClick={handleApplyExperience} 
                        </Row> */}
                    </Col>

                </Row>
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


