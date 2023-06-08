import { Container, Col } from "react-bootstrap"
import ExperienceEditForm from "../../components/ExperienceEditForm/ExperienceEditForm"
import './ExperienceEditPage.css'
import { useState } from "react"


const ExperienceEditPage = () => {


    const [experienceTitle, setExperienceTitle] = useState()

    const handleExperienceTitleChange = (title) => {
        setExperienceTitle(title)
    }


    return (

        <Container>

            <Col className='offset-2 p-1' md={8}>
                <h1 className="estas-editando" >Estás editando en tu CV:</h1>
                <h4 className="mb-5 mx-5"> {experienceTitle}</h4>
                <ExperienceEditForm onExperienceTitleChange={handleExperienceTitleChange} />
            </Col>

        </Container>
    )
}

export default ExperienceEditPage
