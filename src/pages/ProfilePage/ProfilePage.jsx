import { useContext } from "react"
import { AuthContext } from './../../contexts/auth.context'
import { Container } from 'react-bootstrap'
import './ProfilePage.css'

const ProfilePage = () => {

    const { user } = useContext(AuthContext)
    return (
        <Container>
            <h1>Hola {user.username}</h1>
            <img src={user.avatar}></img>
            <p>{user.description}</p>
            <p>{user.email}</p>
            <p>{user.location}</p>
            <p>{user.role}</p>

        </Container>
    )
}

export default ProfilePage
