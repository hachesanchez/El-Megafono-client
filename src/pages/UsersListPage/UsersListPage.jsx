import { useContext, useEffect, useState } from 'react'
import { Container, Row, Col } from "react-bootstrap"
import { AuthContext } from "../../contexts/auth.context"
import userService from '../../services/user.services'
import { useNavigate } from "react-router-dom"
import Loader from '../../components/Loader/Loader'
import UsersList from '../../components/UsersList/UsersList'
import './UsersListPage.css'


const UsersListPage = () => {

    const [users, setUsers] = useState()
    const { user, role } = useContext(AuthContext)
    const navigate = useNavigate()


    useEffect(() => {
        if (user.role !== 'ADMIN') {
            navigate('/perfil')
        } else {
            loadUsers()
        }
    }, [])



    const loadUsers = () => {

        userService
            .getAllProfiles()
            .then(({ data }) => {
                setUsers(data)
            })
            .catch(err => console.log(err))
    }


    return (

        <Container>

            <h1>Todas las ususarias</h1>
            <hr />

            <Row>
                <Col lg={12} md={9} xs={12} >
                    <Row>
                        {!users ? <Loader /> : <UsersList users={users} />}
                    </Row>
                </Col>
            </Row>

        </Container>
    )
}

export default UsersListPage
