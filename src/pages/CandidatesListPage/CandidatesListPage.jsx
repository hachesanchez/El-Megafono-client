import { useContext, useEffect, useState } from 'react'
import CandidatesList from '../../components/CadidatesList/CandidatesList'
import userService from '../../services/user.services'
import './CandidatesListPage.css'
import { Col, Container, Row } from "react-bootstrap"
import Loader from '../../components/Loader/Loader'
import { AuthContext } from "../../contexts/auth.context"


const CandidatesListPage = () => {


    const [users, setUsers] = useState()
    const { user, role } = useContext(AuthContext)

    useEffect(() => {
        loadUsers()
    }, [])


    const loadUsers = () => {

        userService

            .getCandidateUsers()
            .then(({ data }) => {

                setUsers(data)
                console.log(data)
            })
            .catch(err => console.log(err))
    }


    return (

        <Container>

            <h1>Todos los candidatos</h1>
            <hr />

            <Row>
                <Col lg={2} md={3} xs={12}>
                    <h1>Aquí irá un buscador con filtros</h1>
                </Col>

                <Col lg={9} md={9} xs={12} >
                    <Row>
                        {!users ? <Loader /> : <CandidatesList users={users} />}
                    </Row>
                </Col>
            </Row>

        </Container>


    )
}

export default CandidatesListPage
