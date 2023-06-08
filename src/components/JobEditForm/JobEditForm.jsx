import { Form, Button, Col, Row } from "react-bootstrap"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import jobService from "../../services/job.services"
import { JOB_CATEGORIES_ARRAY } from '../../consts/jobs-consts'
import './JobEditForm.css'


const JobEditForm = ({ onJobTitleChange }) => {

    let { id: jobId } = useParams()

    const [jobData, setJobData] = useState({

        title: '',
        description: '',
        jobCategory: '',
        yearsOfExperience: '',
        grossSalary: '',
        location: '',
        travelAvailability: false,
        remoteJob: false,
        isFilled: false,
        startDate: '',
        contract: '',
        languages: [
            {
                name: "",
                level: "",
            }
        ],
    })

    const navigate = useNavigate()


    useEffect(() => {
        loadJob()
    }, [jobId])


    const loadJob = () => {

        jobService
            .getOneJob(jobId)
            .then(({ data }) => {
                setJobData(data)
                onJobTitleChange(data.title)
            })
            .catch((error) => {
                console.log(error)
            })
    }


    const handleInputChange = (e) => {
        const { name, value } = e.target
        value && setJobData({ ...jobData, [name]: value })
    }


    const handleSubmit = (e) => {
        e.preventDefault();

        jobService
            .editJob(jobId, jobData)
            .then((response) => {
                navigate(`/empleo/${jobId}`)
            })
            .catch((error) => {
                console.log(error)
            })
    }


    const handleLanguagesChange = (e, idx) => {

        const { name, value } = e.target
        const languagesCopy = [...jobData.languages]

        languagesCopy[idx] = { ...languagesCopy[idx], [name]: value }

        setJobData({ ...jobData, languages: languagesCopy })
    }


    const {
        title,
        description,
        jobCategory,
        yearsOfExperience,
        grossSalary,
        location,
        travelAvailability,
        remoteJob,
        startDate,
        contract,
        languages,
        isFilled,
    } = jobData;



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

            <Form.Group className="mb-3" controlId="description">
                <Form.Label className="signup-label">Descripción del puesto</Form.Label>
                <Form.Control
                    type="text"
                    defaultValue={description}
                    onChange={handleInputChange}
                    name="description"
                />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label className="mb-3">Categoría laboral</Form.Label>
                <Form.Select controlid="jobCategory" value={jobCategory} onChange={handleInputChange} name="jobCategory" >
                    <option value="">Escoge una opción...</option>
                    {
                        JOB_CATEGORIES_ARRAY.map(elm => <option key={elm} value={elm}>{elm}</option>)
                    }
                </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3 mt-3" controlId="yearsOfExperience">
                <Form.Label className="job-label">Años de experiencia requeridos</Form.Label>
                <Form.Control type="text" value={yearsOfExperience} onChange={handleInputChange} name="yearsOfExperience" />
            </Form.Group>

            <Form.Group className="mb-3 mt-3" controlId="grossSalary">
                <Form.Label className="job-label">Salario bruto anual</Form.Label>
                <Form.Control type="text" value={grossSalary} onChange={handleInputChange} name="grossSalary" />
            </Form.Group>

            <Form.Group className="mb-3 mt-3" controlId="location">
                <Form.Label className="job-label">Ubicación del puesto de trabajo</Form.Label>
                <Form.Control type="text" value={location} onChange={handleInputChange} name="location" />
            </Form.Group>

            <Form.Group className="mb-3 mt-3" controlId="travelAvailability">
                <Form.Label className="job-label">Disponibilidad para viajar</Form.Label>
                <Form.Select value={travelAvailability} onChange={handleInputChange} name="travelAvailability">
                    <option value={true}>Sí</option>
                    <option value={false}>No</option>
                </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3 mt-3" controlId="remoteJob">
                <Form.Label className="job-label">Posibilidad de teletrabajar</Form.Label>
                <Form.Select value={remoteJob} onChange={handleInputChange} name="remoteJob">
                    <option value={true}>Sí</option>
                    <option value={false}>No</option>
                </Form.Select>
            </Form.Group>

            {/* //TODO: NO CAMBIA LA FECHA. Formato */}
            <Form.Group className="mb-3 mt-3" controlId="startDate">
                <Form.Label className="job-label">Fecha de inicio</Form.Label>
                <Form.Control type="text" value={startDate} onChange={handleInputChange} name="startDate" />
            </Form.Group>

            <Form.Group className="mb-3 mt-3" controlId="contract">
                <Form.Label className="job-label">Tipo de contrato</Form.Label>
                <Form.Select value={contract} onChange={handleInputChange} name="contract">
                    <option value="">Escoge una opción</option>
                    <option value="Indefinido">Indefinido</option>
                    <option value="Por obra y servicio">Por obra y servicio</option>
                    <option value="Autónoma/o">Autónoma/o</option>
                </Form.Select>
            </Form.Group>

            <Form.Group controlid="languages">
                {
                    languages.length ? languages.map((elm, idx) => {
                        return (
                            <Row key={idx}>
                                <Form.Group as={Col} className="mb-3 mt-3" controlid="languages.name">
                                    <Form.Label >Idioma</Form.Label>
                                    <Form.Control type="languages.name" value={elm.name} onChange={(e) => handleLanguagesChange(e, idx)} name="name" />
                                </Form.Group>
                                <Form.Group as={Col} className="mb-3 mt-3" controlid="languages.value">
                                    <Form.Label >Nivel</Form.Label>
                                    <Form.Select controlid="languages.value" value={elm.level} onChange={(e) => handleLanguagesChange(e, idx)} name="level" >
                                        <option value="">Escoge una opción...</option>
                                        <option value="Principiante">Principiante</option>
                                        <option value="Básico profesional">Básico profesional</option>
                                        <option value="Avanzado">Avanzado</option>
                                        <option value="Bilingüe o nativo">Bilingüe o nativo</option>
                                    </Form.Select>
                                </Form.Group>
                            </Row>
                        )
                    })
                        :

                        <Row>
                            <Form.Group as={Col} className="mb-3 mt-3" controlid="languages.name">
                                <Form.Label >Idioma</Form.Label>
                                <Form.Control type="languages.name" onChange={(e) => handleLanguagesChange(e, 0)} name="name" />
                            </Form.Group>
                            <Form.Group as={Col} className="mb-3 mt-3" controlid="languages.value">
                                <Form.Label >Nivel</Form.Label>
                                <Form.Select controlid="languages.value" onChange={(e) => handleLanguagesChange(e, 0)} name="level" >
                                    <option value="">Escoge una opción...</option>
                                    <option value="Principiante">Principiante</option>
                                    <option value="Básico profesional">Básico profesional</option>
                                    <option value="Avanzado">Avanzado</option>
                                    <option value="Bilingüe o nativo">Bilingüe o nativo</option>
                                </Form.Select>
                            </Form.Group>
                        </Row>
                }
            </Form.Group>

            <Form.Group className="mb-3 mt-3" controlId="isFilled">
                <Form.Label className="job-label">¿Se ha cerrado este proceso?</Form.Label>
                <Form.Select value={isFilled} onChange={handleInputChange} name="isFilled">
                    <option value={true}>Sí</option>
                    <option value={false}>No</option>
                </Form.Select>
            </Form.Group>

            <div className="d-grid">
                <Button variant="dark mt-4" type="submit">Guardar edición</Button>
            </div>

        </Form>
    )
}


export default JobEditForm