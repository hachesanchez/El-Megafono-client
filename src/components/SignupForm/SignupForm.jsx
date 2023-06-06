import { useState } from "react"
import { Form, Button, Col, Row } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import authService from './../../services/auth.services'
import uploadServices from "../../services/uploader.services"
import './SignupForm.css'



const SignupForm = ({ closeModal }) => {

    const [signupData, setSignupData] = useState({
        username: '',
        email: '',
        password: '',
        role: '',
        avatar: '',
        description: '',
        location: ''
    })

    const navigate = useNavigate()

    const handleInputChange = e => {
        const { value, name } = e.target
        setSignupData({ ...signupData, [name]: value })
    }

    const handleSubmit = e => {
        e.preventDefault()

        authService
            .signup(signupData)
            .then(({ data }) => {
                closeModal()
            })
            .catch(err => console.log(err))
    }

    const { username, password, email, role, avatar, description, location } = signupData


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


    return (

        <Form onSubmit={handleSubmit} className="signup-form" encType="multipart/form-data">

            <Row>
                <Form.Group as={Col} className="mb-3 mt-3" controlId="email">
                    <Form.Label className="signup-label">Email</Form.Label>
                    <Form.Control type="email" value={email} onChange={handleInputChange} name="email" />
                </Form.Group>

                <Form.Group as={Col} className="mb-3 mt-3" controlId="password">
                    <Form.Label className="signup-label">Contraseña</Form.Label>
                    <Form.Control type="password" value={password} onChange={handleInputChange} name="password" />
                </Form.Group>
            </Row>

            <Form.Group className="mb-3 mt-3" controlId="username">
                <Form.Label className="signup-label">Nombre de usuario</Form.Label>
                <Form.Control type="text" value={username} onChange={handleInputChange} name="username" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="avatar">
                <Form.Label>Avatar</Form.Label>
                <Form.Control type="file" onChange={handleFileUpload} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="description">
                <Form.Label className="signup-label">Description</Form.Label>
                <Form.Control type="text" value={description} onChange={handleInputChange} name="description" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="location">
                <Form.Label className="signup-label">Ubicación</Form.Label>
                <Form.Control type="text" value={location} onChange={handleInputChange} name="location" />
            </Form.Group>

            <Form.Group>
                <Form.Label className="signup-label">Soy</Form.Label>
                <Form.Select controlId="role" value={role} onChange={handleInputChange} name="role" >
                    <option value=" ">Escoge una opción...</option>
                    <option value="PROFESIONAL">Profesional</option>
                    <option value="ORGANIZACIÓN">Organizaión</option>
                </Form.Select>
            </Form.Group>

            <div className="d-grid">
                <Button variant="dark mt-4" type="submit">Registrarme</Button>
            </div>

        </Form>
    )
}

export default SignupForm