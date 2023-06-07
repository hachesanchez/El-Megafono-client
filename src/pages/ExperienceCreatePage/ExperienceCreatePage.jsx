import ExperienceCreateForm from '../../components/ExperienceCreateForm/ExperienceCreateForm'
import { Container } from "react-bootstrap"
import './ExperienceCreatePage.css'


//TODO: SECURIZAR EL FORMULARIO ROLE === PROFESIONAL o ADMIN

const ExperienceCreatePage = () => {

    return (
        <Container>
            <ExperienceCreateForm />
        </Container>
    )
}

export default ExperienceCreatePage

