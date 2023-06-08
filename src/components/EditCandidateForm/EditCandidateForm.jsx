import { useState, useEffect } from "react";
import { Form, Button, Col, Row } from "react-bootstrap";
import userService from "../../services/user.services"
import { useNavigate, useParams } from "react-router-dom";
import "./EditCandidateForm.css";
import uploadServices from "../../services/uploader.services"
import { JOB_CATEGORIES_ARRAY } from '../../consts/jobs-consts'



// TODO OPCIONAL: GRANULARIZAR COMPONENTE


const EditCandidateForm = ({ }) => {

    let { id: userId } = useParams()

    const [signupData, setSignupData] = useState({
        username: '',
        email: '',
        avatar: '',
        description: '',
        location: '',
        jobCategory: '',
        role: '',
        yearsOfExperience: 0,
        availability: false,
        travelAvailability: false,
        languages: [
            {
                name: "",
                level: "",
            }
        ],
        skills: [''],
        dailyRate: 0,
        grossSalary: 0

    });


    const navigate = useNavigate();

    useEffect(() => {
        getProfile();
    }, [userId]);


    const getProfile = () => {
        userService
            .getProfile(userId)
            .then(({ data }) => {
                setSignupData(data);
            })
            .catch((error) => {
                console.log(error);
            });
    };


    const handleInputChange = (e) => {
        const { name, value } = e.target;
        value && setSignupData({ ...signupData, [name]: value });
    };


    const handleSubmit = (e) => {
        e.preventDefault();

        userService
            .editProfile(userId, signupData)
            .then(() => {
                /*  closeModal() */
                navigate("/perfil");

            })
            .catch((error) => {
                console.log(error);
            });
    }


    const handleLanguagesChange = (e, idx) => {

        const { name, value } = e.target
        const languagesCopy = [...signupData.languages]

        languagesCopy[idx] = { ...languagesCopy[idx], [name]: value }

        setSignupData({ ...signupData, languages: languagesCopy })
    }


    const handleFileUpload = e => {

        const formData = new FormData()
        formData.append('imageData', e.target.files[0])

        uploadServices
            .uploadimage(formData)
            .then(({ data }) => {
                setSignupData({ ...signupData, avatar: data.cloudinary_url })
            })
            .catch(err => console.log(err))
    }

    const {
        username,
        avatar,
        description,
        location,
        email,
        jobCategory,
        role: signupRole,
        yearsOfExperience,
        availability,
        travelAvailability,
        languages,
        skills,
        dailyRate,
        grossSalary
    } = signupData;



    return (


        <Form onSubmit={handleSubmit} className="edit-Candidate-form">

            <Row>
                <Form.Group as={Col} className="mb-3 mt-3" controlid="username">
                    <Form.Label className="signup-label">Nombre de usuario</Form.Label>
                    <Form.Control type="text" defaultValue={username} onChange={handleInputChange} name="username" />
                </Form.Group>
                <Form.Group as={Col} className="mb-3 mt-3" controlid="email">
                    <Form.Label className="signup-label">Email</Form.Label>
                    <Form.Control type="email" defaultValue={email} onChange={handleInputChange} name="email" />
                </Form.Group>
            </Row>

            <Form.Group className="mb-3" controlId="avatar">
                <Form.Label>Avatar</Form.Label>
                <Form.Control type="file" onChange={handleFileUpload} />
            </Form.Group>

            <Form.Group className="mb-3" controlid="description">
                <Form.Label className="signup-label">Description</Form.Label>
                <Form.Control type="text" defaultValue={description} onChange={handleInputChange} name="description" />
            </Form.Group>

            <Form.Group className="mb-3" controlid="location">
                <Form.Label className="signup-label">Ubicación</Form.Label>
                <Form.Control type="text" defaultValue={location} onChange={handleInputChange} name="location" />
            </Form.Group>



            {signupRole === "PROFESIONAL" || signupRole === "ADMIN" ? (
                <>
                    <Form.Group className="mb-3">
                        <Form.Label className="mb-3">Categoría laboral</Form.Label>
                        <Form.Select
                            controlid="jobCategory"
                            value={jobCategory}
                            onChange={handleInputChange}
                            name="jobCategory"
                        >
                            <option value="">Escoge una opción...</option>
                            {
                                JOB_CATEGORIES_ARRAY.map(elm => <option key={elm} value={elm}>{elm}</option>)
                            }
                        </Form.Select>
                    </Form.Group>

                    <Form.Group className="mb-3" controlid="yearsOfExperience">
                        <Form.Label>Años de experiencia</Form.Label>
                        <Form.Control
                            type="number"
                            value={yearsOfExperience}
                            onChange={handleInputChange}
                            name="yearsOfExperience"
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlid="availability">
                        <Form.Check
                            type="checkbox"
                            label='Estoy disponible para empezar a trabajar'
                            checked={availability}
                            onChange={e =>
                                setSignupData({ ...signupData, availability: e.target.checked })
                            }
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlid="travelAvailability">
                        <Form.Check
                            type='checkbox'
                            label='Estoy dispuesta a viajar por trabajo'
                            checked={travelAvailability}
                            onChange={e =>
                                setSignupData({ ...signupData, travelAvailability: e.target.checked })
                            }
                        />
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

                    <Form.Group className="mb-3" controlid="skills">
                        <Form.Label>Habilidades</Form.Label>
                        <Form.Control
                            type="text"
                            value={skills}
                            onChange={handleInputChange}
                            name="skills"
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlid="dailyRate">
                        <Form.Label>Tarifa diaria</Form.Label>
                        <Form.Control
                            type="number"
                            value={dailyRate}
                            onChange={handleInputChange}
                            name="dailyRate"
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlid="grossSalary">
                        <Form.Label>Salario bruto deseado</Form.Label>
                        <Form.Control
                            type="number"
                            value={grossSalary}
                            onChange={handleInputChange}
                            name="grossSalary"
                        />
                    </Form.Group>

                </>
            ) : null}

            <div className="d-grid">
                <Button variant="dark mt-4 mb-4" type="submit">
                    Guardar cambios
                </Button>
            </div>
        </Form >
    );
};



export default EditCandidateForm


