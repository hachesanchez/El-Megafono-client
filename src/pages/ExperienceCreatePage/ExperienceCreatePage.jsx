import ExperienceCreateForm from '../../components/ExperienceCreateForm/ExperienceCreateForm'
import { Container, Col } from "react-bootstrap"
import './ExperienceCreatePage.css'



const ExperienceCreatePage = () => {

    return (

        <Container>
            <Col>
                <h1 className="estas-editando" >Crea una nueva experiencia para tu CV</h1>
                <ExperienceCreateForm />
            </Col>
        </Container>
    )
}

export default ExperienceCreatePage

