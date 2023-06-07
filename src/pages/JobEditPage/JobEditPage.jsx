import { Container, Col } from "react-bootstrap"
import JobEditForm from "../../components/JobEditForm/JobEditForm"
import './JobEditPage.css'


//TODO: SECURIZAR EL FORMULARIO ROLE === ORGANIZACIÓN o ADMIN

const JobEditPage = () => {

    return (
        <Container>
            <Col className='offset-2 p-1' md={8}>
                <JobEditForm />
            </Col>
        </Container >
    )
}

export default JobEditPage
