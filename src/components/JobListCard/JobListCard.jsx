import { Card, Button, Container, Col, Row, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import jobService from "../../services/job.services"
import { AuthContext } from "../../contexts/auth.context";
import SaveJob from '../SavedJob/SavedJob';
import locationIcon from '../../assets/images/ICON-5.png'


import './JobListCard.css'


const JobListCard = ({ title, description, grossSalary, contract, location, owner, _id }) => {

    const { user } = useContext(AuthContext)
    const navigate = useNavigate();
    const [deletedJobId, setDeletedJobId] = useState(null)

    const handleDeleteJob = () => {
        const jobId = _id;

        jobService
            .deleteJob(jobId)
            .then((response) => {
                setDeletedJobId(jobId);
                navigate("/empleos");
            })
            .catch((error) => {
                console.log(error);
            });
    }


    return (

        <Container>

            <Card className='p-3 m-1 JobCard'>
                <Row >
                    <Col xs={9}>
                        <div style={{ display: 'inline-flex', alignItems: 'center' }}>
                            <Link to={`/empleo/${_id}`}>
                                <Card.Title className='m-3'><h3>{title}</h3></Card.Title>
                            </Link>
                            {/*  <SaveJob /> */}
                        </div>

                        <Card.Body>
                            <Card.Text className=''>
                                <p> Publicado por: <strong>{owner && owner.username}</strong></p>
                                <div className="languages-icon mt-3" style={{ display: 'flex', alignItems: 'center' }}>
                                    <Image className="location-icon md-2 mr-1" src={locationIcon} />
                                    {location}
                                </div>
                            </Card.Text>

                            {user && (user._id === owner._id || user.role === 'ADMIN' || user._id === _id) && (
                                <div>
                                    <Link className='text-primary m-2' to={`/empleo/${_id}/editar`}>
                                        Editar
                                    </Link>
                                    <Link to="#" className="text-primary m-2" onClick={handleDeleteJob}>
                                        Eliminar
                                    </Link>
                                </div>
                            )}

                        </Card.Body>
                    </Col>
                    <Col xs={3} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                        <Row>
                            <div className="d-flex align-items-center justify-content-center">
                                <Card.Img variant className='job-avatar rounded-circle' src={owner && owner.avatar} alt="Avatar" />
                            </div>
                        </Row>
                        <Row >
                            <Link to={`/empleo/${_id}`} className='d-flex align-items-center justify-content-center'>
                                <Button variant="outline-success" size="sm">
                                    Detalles de la oferta
                                </Button>
                            </Link>

                        </Row>
                    </Col>
                </Row>
            </Card >


        </Container >
    )
}


export default JobListCard