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
                // TODO: CREAR SERVICIO getUserExperiences(user_id)
                return experiencesService.getAllExperiences()
            })
            .then(({ data }) => {
                const candidateExperiences = data.filter((experience) => experience.owner?._id === id)
                setExperiences(candidateExperiences);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    return (

        <Container>
            <Row>
                {user && <CandidateCardDetails user={user} />}
            </Row>
            <Row>
                <Col md={3} className='offset-md-1'>
                    {user && <CandidateCardDetailsExtra user={user} />}
                </Col>
                <Col md={7}>
                    <h4 className="m-4 experiencia-title">Experiencia laboral</h4>
                    <hr />
                    <ExperienceList experiences={experiences} />
                </Col>
            </Row>

        </Container>

    )
}

export default CandidateDetailsPage
