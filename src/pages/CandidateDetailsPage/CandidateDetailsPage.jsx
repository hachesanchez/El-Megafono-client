import { Container } from 'react-bootstrap'
import './CandidateDetailsPage.css'
import CandidateCardDetails from '../../components/CandidateCardDetails/CandidateCardDetails'
import userService from '../../services/user.services'
import experiencesService from '../../services/experiences.services'
import { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ExperienceList from '../ExperienceListPage/ExperienceListPage'



const CandidateDetailsPage = () => {


    const { id } = useParams()
    const [user, setUser] = useState()
    const [experiences, setExperiences] = useState()


    useEffect(() => {
        loadUser()
    }, [])


    const loadUser = () => {
        userService
            .getProfile(id)
            .then(({ data }) => {
                setUser(data)

                experiencesService
                    .getAllExperiences()
                    .then(({ data }) => {
                        const candidateExperiences = data.filter((experience) => experience.owner?._id === id)
                        setExperiences(candidateExperiences);
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            })
            .catch((err) => {
                console.log(err)
            })
    }

    return (

        <Container>

            {user && <CandidateCardDetails user={user} />}
            <ExperienceList experiences={experiences} />

        </Container>

    )
}

export default CandidateDetailsPage
