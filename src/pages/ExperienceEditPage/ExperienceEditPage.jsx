import { Container } from "react-bootstrap"
import './ExperienceEditPage.css'
import ExperienceEditForm from "../../components/ExperienceEditForm/ExperienceEditForm"

const ExperienceEditPage = () => {

    return (
        <Container>
            <h1>Editar experiencia</h1>
            <ExperienceEditForm />
        </Container>
    )
}

export default ExperienceEditPage
