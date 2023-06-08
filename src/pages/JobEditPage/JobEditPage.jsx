import { Container, Col } from "react-bootstrap"
import JobEditForm from "../../components/JobEditForm/JobEditForm"
import { useState } from "react"
import './JobEditPage.css'



const JobEditPage = () => {

    const [jobTitle, setJobTitle] = useState('')

    const handleJobTitleChange = (title) => {
        setJobTitle(title)
    }

    return (
        <Container>
            <Col className='offset-2 p-1' md={8}>
                <h1 className="estas-editando" >Estás editando el puesto:</h1>
                <h4 className="mb-5 mx-5"> <em>{jobTitle}</em></h4>
                <JobEditForm onJobTitleChange={handleJobTitleChange} />
            </Col>
        </Container >
    )
}

export default JobEditPage
