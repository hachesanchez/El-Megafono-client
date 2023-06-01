import ExperienceCreateForm from '../../components/ExperienceCreateForm/ExperienceCreateForm'
import './ExperienceCreatePage.css'
import { Link } from "react-router-dom"
import { Container, Button, Row, Col } from "react-bootstrap"
const ExperienceCreatePage = () => {

    return (
        <Container>
            <ExperienceCreateForm />
        </Container>
    )
}

export default ExperienceCreatePage

