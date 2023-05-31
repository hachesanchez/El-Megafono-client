import { Card, Container } from "react-bootstrap"
import './ExperiencesCard.css'


const ExperiencesCard = () => {

    return (

        <Container>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>title</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">organization</Card.Subtitle>
                    <Card.Subtitle className="mb-2 text-muted">startDate-endDate</Card.Subtitle>
                    <Card.Text>
                        description
                    </Card.Text>
                </Card.Body>
            </Card>
        </Container>
    )
}

export default ExperiencesCard