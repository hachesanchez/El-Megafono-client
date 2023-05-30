import { Form, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { useContext, useState } from "react"
import authService from './../../services/auth.services'
import { AuthContext } from "../../contexts/auth.context"
import './LoginForm.css'



const LoginForm = () => {

    const [loginData, setLoginData] = useState({
        email: '',
        password: ''
    })

    const navigate = useNavigate()

    const { authenticateUser, storeToken } = useContext(AuthContext)

    const handleInputChange = e => {
        const { value, name } = e.target
        setLoginData({ ...loginData, [name]: value })
    }

    const handleSubmit = e => {

        e.preventDefault()

        authService
            .login(loginData)
            .then(({ data }) => {
                storeToken(data.authToken)
                authenticateUser()
                navigate('/inicio')
            })
            .catch(err => console.log(err))
    }

    const { password, email } = loginData


    return (

        <div className='login'>

            <Form onSubmit={handleSubmit} className="custom-form">

                <Form.Group className='mb-3' controlId='email'>
                    <Form.Label className='login-label'>Email</Form.Label>
                    <Form.Control type='email' value={email} onChange={handleInputChange} name='email' />
                </Form.Group>

                <Form.Group className="mb-3" controlId="password">
                    <Form.Label className='login-label'>Contraseña</Form.Label>
                    <Form.Control type="password" value={password} onChange={handleInputChange} name="password" />
                </Form.Group>

                <div className="d-grid">
                    <Button className=" bg-custom " type="submit">entra</Button>
                </div>

            </Form>
        </div>
    )
}


export default LoginForm
