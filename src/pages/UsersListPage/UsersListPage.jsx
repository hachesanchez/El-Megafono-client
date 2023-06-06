import { useContext, useEffect, useState } from 'react'
import userService from '../../services/user.services'
import { Container, Row, Col } from "react-bootstrap"
import { AuthContext } from "../../contexts/auth.context"
import './UsersListPage.css'
import Loader from '../../components/Loader/Loader'
import UsersList from '../../components/UsersList/UsersList'


const UsersListPage = () => {

    const [users, setUsers] = useState()
    const { user, role } = useContext(AuthContext)

    useEffect(() => {
        loadUsers()
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
            <h1>Todos los usuarios</h1>
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
