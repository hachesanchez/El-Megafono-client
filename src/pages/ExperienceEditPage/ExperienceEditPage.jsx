import { Container, Col } from "react-bootstrap"
import ExperienceEditForm from "../../components/ExperienceEditForm/ExperienceEditForm"
import './ExperienceEditPage.css'


//TODO: SECURIZAR EL FORMULARIO ROLE === PROFESIONAL o ADMIN

const ExperienceEditPage = () => {

    return (
        <Container>
            <Col className='offset-2 p-1' md={8}>
                <ExperienceEditForm />
            </Col>
        </Container>
    )
}

export default ExperienceEditPage
