import { Card, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import experiencesService from "../../services/experiences.services"
import { AuthContext } from "../../contexts/auth.context";
import './ExperiencesCard.css'


const ExperiencesCard = ({ _id, startDate, endDate, ...otherProps }) => {

    const formattedStartDate = new Date(startDate).toLocaleDateString("es-ES");
    const formattedEndDate = new Date(endDate).toLocaleDateString("es-ES");
    const { user } = useContext(AuthContext)
    const navigate = useNavigate();
    const [deletedExperienceId, setDeletedExperienceId] = useState(null)

    const handleDeleteExperience = () => {
        const experienceId = _id;

        experiencesService
            .deleteExperience(experienceId)
            .then((response) => {
                setDeletedExperienceId(experienceId);
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
                    </div>

                    <Card.Subtitle className="mb-2 text-muted">{otherProps.organization}</Card.Subtitle>
                    <Card.Subtitle className="mb-2 text-muted">Desde {formattedStartDate} hasta {formattedEndDate}</Card.Subtitle>
                    <Card.Text>
                        {otherProps.description}
                    </Card.Text>

                    {user._id === otherProps.owner._id &&
                        <>
                            <Link className='text-primary m-2' to={`/experiencia/${_id}/editar`}>
                                Editar
                            </Link>
                            <Link to="#" className="text-danger" onClick={handleDeleteExperience}>
                                Eliminar
                            </Link>
                        </>}

                </Card.Body>
            </Card>
        </Container >
    )
}

export default ExperiencesCard