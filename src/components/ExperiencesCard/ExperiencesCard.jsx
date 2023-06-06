import { Card, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../contexts/auth.context";
import './ExperiencesCard.css'


const ExperiencesCard = ({ _id, startDate, endDate, deleteExperience, ...otherProps }) => {


    const { user } = useContext(AuthContext)
    const formattedStartDate = new Date(startDate).toLocaleDateString("es-ES");
    const formattedEndDate = new Date(endDate).toLocaleDateString("es-ES");



    return (

        <Card className="experience-card-custom">
            <Card.Body>

                <div className="cardHeader">
                    <Card.Title>{otherProps.title}</Card.Title>
                </div>

                <Card.Subtitle className="mb-2 organization">{otherProps.organization}</Card.Subtitle>
                <Card.Subtitle className="mb-2 text-muted date">Desde {formattedStartDate} hasta {formattedEndDate}</Card.Subtitle>
                <Card.Text>
                    {otherProps.description}
                </Card.Text>

                {user && user._id === otherProps.owner._id &&
                    <>
                        <Link className='text-primary m-2' to={`/experiencia/${_id}/editar`}>
                            Editar
                        </Link>
                        <Link to="#" className="text-danger" onClick={() => deleteExperience(_id)}>
                            Eliminar
                        </Link>
                    </>}

            </Card.Body>
        </Card>
    )
}

export default ExperiencesCard