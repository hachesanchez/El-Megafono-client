import { Container } from 'react-bootstrap'
import './CandidateDetailsPage.css'
import CandidateCardDetails from '../../components/CandidateCardDetails/CandidateCardDetails'
import userService from '../../services/user.services'
import { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'



const CandidateDetailsPage = () => {
    const { id } = useParams()
    const [user, setUser] = useState()

    useEffect(() => {
        loadUser()
    }, [])

    const loadUser = () => {
        userService
            .getProfile(id)
            .then(({ data }) => setUser(data))
            .catch(err => console.log(err))
    }

    return (
        <Container>
            {user && <CandidateCardDetails user={user} />}
        </Container>

    )
}

export default CandidateDetailsPage