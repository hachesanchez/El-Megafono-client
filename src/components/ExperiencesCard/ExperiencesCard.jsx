import { Card, Container } from "react-bootstrap"
import './ExperiencesCard.css'


const ExperiencesCard = ({ startDate, endDate, ...otherProps }) => {

    const formattedStartDate = new Date(startDate).toLocaleDateString("es-ES");
    const formattedEndDate = new Date(endDate).toLocaleDateString("es-ES");

    return (

        <Container>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>{otherProps.title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{otherProps.organization}</Card.Subtitle>
                    <Card.Subtitle className="mb-2 text-muted">Desde {formattedStartDate} hasta {formattedEndDate}</Card.Subtitle>
                    <Card.Text>
                        {otherProps.description}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Container>
    )
}

export default ExperiencesCard