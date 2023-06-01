import { Card, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import experiencesService from "../../services/experiences.services"
import './ExperiencesCard.css'


const ExperiencesCard = ({ _id, startDate, endDate, ...otherProps }) => {

    const formattedStartDate = new Date(startDate).toLocaleDateString("es-ES");
    const formattedEndDate = new Date(endDate).toLocaleDateString("es-ES");

    const navigate = useNavigate();

    const handleDeleteExperience = () => {

        const experienceId = _id

        experiencesService
            .deleteExperience(experienceId)
            .then((response) => {
                navigate("/perfil");
            })
            .catch((error) => {
                console.log(error);
            });
    };



    return (

        <Container>
            <Card >
                <Card.Body>
                    <div className="cardHeader">
                        <Card.Title>{otherProps.title}</Card.Title>
                        <Link className="" to={`/experiencia/${_id}/editar`}>
                            <Button variant="link">Editar</Button>
                        </Link>

                        <Link to="#" className="text-danger" onClick={handleDeleteExperience}>
                            Borrar Experiencia
                        </Link>

                    </div>
                    <Card.Subtitle className="mb-2 text-muted">{otherProps.organization}</Card.Subtitle>
                    <Card.Subtitle className="mb-2 text-muted">Desde {formattedStartDate} hasta {formattedEndDate}</Card.Subtitle>
                    <Card.Text>
                        {otherProps.description}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Container >
    )
}

export default ExperiencesCard