import { useState, useEffect } from "react";
import { Form, Button, Col, Row } from "react-bootstrap";
import userService from "./../../services/user.services"
import { useNavigate, useParams } from "react-router-dom";
import "./EditProfessionalForm.css";
import { useContext } from "react"


const EditProfessionalForm = () => {

    let { id: userId } = useParams()
    console.log(userId)

    const [signupData, setSignupData] = useState({
        jobCategory: '',
        yearsOfExperience: '',
        availability: false,
        travelAvailability: false,
        languages: [
            {
                name: "",
                level: "",
            }
        ],
        skills: [''],
        dailyRate: '',
        grossSalary: ''

    });

    const navigate = useNavigate;

    //useEffect(() => { }, []);
    /*  useEffect(() => {
         getProfile(userId)
     }, [userId]) */



    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setSignupData({ ...signupData, [name]: value });
    };

    /*    const getProfile = () => {
           userService
               .getProfile(userId)
               .then(({ data }) => setSignupData(data))
               .catch(error =>
                   console.log(error));
       } */

    const handleSubmit = (e) => {
        e.preventDefault();

        userService
            .editProfile(userId, signupData)
            .then((response) => {
                navigate("/perfil");
                console.log(response)
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

    const {
        username,
        jobCategory,
        yearsOfExperience,
        availability,
        travelAvailability,
        languages,
        skills,
        dailyRate,
        grossSalary
    } = signupData;




    return (

        <Form onSubmit={handleSubmit} className="edit-professional-form">

            <Form.Group className="mb-3 mt-3" controlId="username">
                <Form.Label className="signup-label">Nombre de usuario</Form.Label>
                <Form.Control type="text" value={signupData.username} onChange={handleInputChange} name="username" />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label className="mb-3">Categoría laboral</Form.Label>
                <Form.Select controlId="jobCategory" value={jobCategory} onChange={handleInputChange} name="jobCategory" >
                    <option value="Administración y finanzas">Administración y finanzas</option>
                    <option value="Comunicación y Marketing">Comunicación y Marketing</option>
                    <option value="Cooperación">Cooperación</option>
                    <option value="Dirección y coordinación">Dirección y coordinación</option>
                    <option value="Gestión de proyectos">Gestión de proyectos</option>
                    <option value="Legal">Legal</option>
                    <option value="Diseño">Diseño</option>
                    <option value="Arquitectura">Arquitectura</option>
                    <option value="Ciencias de la salud">Ciencias de la salud</option>
                    <option value="Recursos humanos">Recursos humanos</option>
                    <option value="Imagen y sonido">Imagen y sonido</option>
                    <option value="Tecnologías de la información (IT)">Tecnologías de la información (IT)</option>
                    <option value="Traducción e interpretación">Traducción e interpretación</option>
                </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3" controlId="yearsOfExperience">
                <Form.Label>Años de experiencia</Form.Label>
                <Form.Control
                    type="number"
                    value={yearsOfExperience}
                    onChange={handleInputChange}
                    name="yearsOfExperience"
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="availability">
                <Form.Check
                    type="checkbox"
                    label='Estoy disponible para empezar a trabajar'
                    checked={availability}
                    onChange={e =>
                        setSignupData({ ...signupData, availability: e.target.checked })
                    }
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="travelAvailability">
                <Form.Check
                    type='checkbox'
                    label='Estoy dispuesta a viajar por trabajo'
                    checked={travelAvailability}
                    onChange={e =>
                        setSignupData({ ...signupData, travelAvailability: e.target.checked })
                    }
                />
            </Form.Group>

            <Form.Group controlId="languages">
                {
                    languages.map((elm, idx) => {
                        return (
                            <Row key={idx}>
                                <Form.Group as={Col} className="mb-3 mt-3" controlId="languages.name">
                                    <Form.Label >Idioma</Form.Label>
                                    <Form.Control type="languages.name" value={elm.name} onChange={(e) => handleLanguagesChange(e, idx)} name="name" />
                                </Form.Group>
                                <Form.Group as={Col} className="mb-3 mt-3" controlId="languages.value">
                                    <Form.Label >Nivel</Form.Label>
                                    <Form.Select controlId="languages.value" value={elm.level} onChange={(e) => handleLanguagesChange(e, idx)} name="level" >
                                        <option value="Principiante">Principiante</option>
                                        <option value="Básico profesional">Básico profesional</option>
                                        <option value="Avanzado">Avanzado</option>
                                        <option value="Bilingüe o nativo">Bilingüe o nativo</option>
                                    </Form.Select>
                                </Form.Group>
                            </Row>
                        )
                    })
                }

            </Form.Group>

            <Form.Group className="mb-3" controlId="skills">
                <Form.Label>Habilidades</Form.Label>
                <Form.Control
                    type="text"
                    value={skills}
                    onChange={handleInputChange}
                    name="skills"
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="dailyRate">
                <Form.Label>Tarifa diaria</Form.Label>
                <Form.Control
                    type="number"
                    value={dailyRate}
                    onChange={handleInputChange}
                    name="dailyRate"
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="grossSalary">
                <Form.Label>Salario bruto deseado</Form.Label>
                <Form.Control
                    type="number"
                    value={grossSalary}
                    onChange={handleInputChange}
                    name="grossSalary"
                />
            </Form.Group>

            <div className="d-grid">
                <Button variant="dark mt-4 mb-4" type="submit">
                    Guardar cambios
                </Button>
            </div>
        </Form >
    );
};



export default EditProfessionalForm


