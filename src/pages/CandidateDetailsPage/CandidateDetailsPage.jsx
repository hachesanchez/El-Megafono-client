import { Container, Row, Col } from 'react-bootstrap'
import './CandidateDetailsPage.css'
import CandidateCardDetails from '../../components/CandidateCardDetails/CandidateCardDetails'
import userService from '../../services/user.services'
import experiencesService from '../../services/experiences.services'
import { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ExperienceList from '../ExperienceListPage/ExperienceListPage'
import CandidateCardDetailsExtra from '../../components/CandidateCardDetailsExtra/CandidateCardDetailsExtra'



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
            <Row>
                {user && <CandidateCardDetails user={user} />}
            </Row>
            <Row>
                <Col md={6} className='offset-md-1'>
                    {user && <CandidateCardDetailsExtra user={user} />}
                </Col>
                <Col md={4}>
                    <h3 className='experiencia-title m-4'>Experiencia laboral:</h3>
                    <ExperienceList experiences={experiences} />
                </Col>
            </Row>

        </Container>

    )
}

export default CandidateDetailsPage
