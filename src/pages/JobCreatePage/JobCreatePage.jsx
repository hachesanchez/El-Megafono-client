import JobCreateForm from '../../components/JobCreateForm/JobCreateForm'
import { Container, Col } from "react-bootstrap"
import './JobCreatePage.css'


//TODO: SECURIZAR EL FORMULARIO ROLE === ORGANIZACIÓN o ADMIN
const JobCreatePage = () => {

    return (
        <Container>
            <Col className='offset-2 p-1' md={8}>
                <JobCreateForm />
            </Col>
        </Container>
    )
}

export default JobCreatePage


