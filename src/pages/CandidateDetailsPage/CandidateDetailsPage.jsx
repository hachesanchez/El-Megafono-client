import { Container } from 'react-bootstrap'
import './CandidateDetailsPage.css'
import CandidateCardDetails from '../../components/CandidateCardDetails/CandidateCardDetails'
import userService from '../../services/user.services'
import { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'



const CandidateDetailsPage = () => {
    const { id } = useParams()
    const [users, setUsers] = useState()
    //const { user } = useContext(AuthContext)

    useEffect(() => {
        loadUsers()
    }, [])

    const loadUsers = () => {
        userService
            .getProfile(id)
            .then(({ data }) => setUsers(data))
            .catch(err => console.log(err))
    }

    return (
        <Container>
            {users && <CandidateCardDetails users={users} />}
        </Container>

    )
}

export default CandidateDetailsPage