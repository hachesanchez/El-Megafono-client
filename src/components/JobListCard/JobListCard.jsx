import { Card, Button, Col, Row, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useContext } from "react"
import { AuthContext } from "../../contexts/auth.context"
import locationIcon from '../../assets/images/ICON-5.png'
import { formatDate } from '../../utils/date-utils'
import './JobListCard.css'


const JobListCard = ({ title, startDate, location, owner, _id, handleDeleteJob }) => {

    const { user } = useContext(AuthContext)


    return (

        <Card className='p-3 m-1 JobCard'>
            <Row>
                <Col xs={9}>
                    <div style={{ display: 'inline-flex', alignItems: 'center' }}>
                        <Link to={`/empleo/${_id}`}>
                            <Card.Title className='m-3'><h3>{title}</h3></Card.Title>
                        </Link>
                    </div>

                    <Card.Body>
                        <Card.Text>
                            <p> Publicado por: <strong>{owner && owner.username}</strong></p>
                            <p> Fecha de inicio <strong>{formatDate(startDate)}</strong></p>
                            <div className="languages-icon">
                                <Image className="location-icon" src={locationIcon} />
                                {location}
                            </div>
                        </Card.Text>

                        {user && (user._id === owner._id || user.role === 'ADMIN' || user._id === _id) && (
                            <div>
                                <Link className='text-primary m-2' to={`/empleo/${_id}/editar`}>
                                    Editar
                                </Link>
                                <Link to="#" className="text-primary m-2" onClick={() => handleDeleteJob(_id)}>
                                    Eliminar
                                </Link>
                            </div>
                        )}
                    </Card.Body>
                </Col>
                <Col xs={3} className="job-avatar-container">
                    <Row>
                        <div className="d-flex align-items-center justify-content-center">
                            <Card.Img variant className='job-avatar rounded-circle' src={owner && owner.avatar} alt="Avatar" />
                        </div>
                    </Row>
                    <Row>
                        <Link to={`/empleo/${_id}`} className='d-flex align-items-center justify-content-center'>
                            <Button variant="outline-success" size="sm">
                                Detalles de la oferta
                            </Button>
                        </Link>
                    </Row>
                </Col>
            </Row>
        </Card>

    )
}

export default JobListCard
