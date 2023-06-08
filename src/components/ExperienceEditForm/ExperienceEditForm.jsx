import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { Form, Button } from "react-bootstrap"
import experiencesService from "../../services/experiences.services"
import FormError from "../FormError/FormError"


const ExperienceEditForm = ({ onExperienceTitleChange }) => {

    let { id: experienceId } = useParams()

    const [errors, setErrors] = useState([])

    const [experienceData, setExperienceData] = useState({
        title: "",
        organization: "",
        startDate: "",
        endDate: "",
        description: "",
    })

    const navigate = useNavigate()

    useEffect(() => {
        loadExperience()
    }, [experienceId])

    const loadExperience = () => {
        experiencesService
            .getOneExperience(experienceId)
            .then(({ data }) => {
                setExperienceData(data)
                onExperienceTitleChange(data.title)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target
        value && setExperienceData({ ...experienceData, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        experiencesService
            .editExperience(experienceId, experienceData)
            .then((response) => {
                navigate("/perfil")
            })
            .catch(err => {
                console.log(err.response.data)
                setErrors(err.response.data.errorMessages)
            })
    }

    const { title, organization, startDate, endDate, description } = experienceData

    const formattedStartDate = new Date(startDate).toLocaleDateString("es-ES")
    const formattedEndDate = new Date(endDate).toLocaleDateString("es-ES")


    return (

        <Form onSubmit={handleSubmit} className="edit-experience-form">
            <Form.Group className="mb-3" controlId="title">
                <Form.Label className="signup-label">Puesto</Form.Label>
                <Form.Control
                    type="text"
                    defaultValue={title}
                    onChange={handleInputChange}
                    name="title"
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="organization">
                <Form.Label className="signup-label">Organización o empresa</Form.Label>
                <Form.Control
                    type="text"
                    defaultValue={organization}
                    onChange={handleInputChange}
                    name="organization"
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="startDate">
                <Form.Label className="signup-label">Fecha de inicio</Form.Label>
                <Form.Control
                    type="text"
                    /* defaultValue={formattedStartDate} */
                    onChange={handleInputChange}
                    name="startDate"
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="endDate">
                <Form.Label className="signup-label">Fecha fin</Form.Label>
                <Form.Control
                    type="text"
                    /* defaultValue={formattedEndDate} */
                    onChange={handleInputChange}
                    name="endDate"
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="description">
                <Form.Label className="signup-label">Descripción</Form.Label>
                <Form.Control
                    type="text"
                    defaultValue={description}
                    onChange={handleInputChange}
                    name="description"
                />
            </Form.Group>

            {errors.length > 0 && <FormError>{errors.map((elm, i) => <p key={i}>{elm}</p>)}</FormError>}

            <div className="d-grid">
                <Button variant="dark mt-4 mb-4" type="submit">
                    Guardar cambios
                </Button>
            </div>
        </Form>
    )
}

export default ExperienceEditForm
