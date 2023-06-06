import { Card, Button, Container, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import jobService from "../../services/job.services"
import { AuthContext } from "../../contexts/auth.context";
import SaveJob from '../SavedJob/SavedJob';

import './JobListCard.css'


const JobListCard = ({ title, description, grossSalary, contract, owner, _id }) => {

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
                    <Col xs={8}>
                        <div style={{ display: 'inline-flex', alignItems: 'center' }}>
                            <Link to={`/empleo/${_id}`}>
                                <Card.Title className='m-3'><h3>{title}</h3></Card.Title>
                            </Link>
                            {/*  <SaveJob /> */}
                        </div>

                        <Card.Body>
                            <Card.Text className=''>
                                <p> Publicado por:  {owner && owner.username}</p>
                                {description}
                                <p>Salario bruto anual : {grossSalary}</p>
                            </Card.Text>

                            {user && owner && user._id === owner._id && (
                                <div >
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
                    <Col xs={4} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
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