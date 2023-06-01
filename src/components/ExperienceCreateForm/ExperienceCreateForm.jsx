import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Form, Button, Col, Row } from "react-bootstrap"
import experiencesService from "../../services/experiences.services"

const ExperienceCreateForm = () => {

    const [experienceData, setExperienceData] = useState({
        title: '',
        organization: '',
        startDate: '',
        endDate: '',
        description: ''
    })

    const navigate = useNavigate()

    const handleInputChange = e => {
        const { value, name } = e.target
        setExperienceData({ ...experienceData, [name]: value })
    }

    const handleSubmit = e => {
        e.preventDefault()

        experiencesService
            .saveExperience(experienceData)
            .then(({ data }) => navigate('/perfil'))
            .catch(err => console.log(err))
    }

    const { title, organization, startDate, endDate, description } = experienceData


    return (

        <Form onSubmit={handleSubmit} className="experience-form">

            <Form.Group className="mb-3 mt-3" controlId="title">
                <Form.Label className="signup-label">Cargo</Form.Label>
                <Form.Control type="text" value={title} onChange={handleInputChange} name="title" />
            </Form.Group>

            <Form.Group className="mb-3 mt-3" controlId="organization">
                <Form.Label className="signup-label">Organización o empresa</Form.Label>
                <Form.Control type="text" value={organization} onChange={handleInputChange} name="organization" />
            </Form.Group>

            <Row>
                <Form.Group as={Col} className="mb-3 mt-3" controlId="startDate">
                    <Form.Label className="signup-label">Fecha de inicio</Form.Label>
                    <Form.Control type="startDate" value={startDate} onChange={handleInputChange} name="startDate" />
                </Form.Group>

                <Form.Group as={Col} className="mb-3 mt-3" controlId="endDate">
                    <Form.Label className="signup-label">Fecha de fin</Form.Label>
                    <Form.Control type="endDate" value={endDate} onChange={handleInputChange} name="endDate" />
                </Form.Group>
            </Row>

            <Form.Group className="mb-3 mt-3" controlId="description">
                <Form.Label className="signup-label">Descripción del puesto</Form.Label>
                <Form.Control type="text" value={description} onChange={handleInputChange} name="description" />
            </Form.Group>


            <div className="d-grid">
                <Button variant="dark mt-4" type="submit">Añade experiencia</Button>
            </div>

        </Form>



    )
}

export default ExperienceCreateForm
