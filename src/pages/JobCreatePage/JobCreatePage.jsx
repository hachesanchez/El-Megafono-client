import JobCreateForm from '../../components/JobCreateForm/JobCreateForm'
import { Container, Col } from "react-bootstrap"
import './JobCreatePage.css'


const JobCreatePage = () => {

    return (

        <Container>
            <Col className='offset-2 p-1' md={8} >
                <h2 className="mb-5">Crea una oferta de trabajo</h2>
                <JobCreateForm />
            </Col>
        </Container>
    )
}

export default JobCreatePage


