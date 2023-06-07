import EditCandidateForm from '../../components/EditCandidateForm/EditCandidateForm'
import { Container, Col } from "react-bootstrap"
import './ProfileEditPage.css'



const ProfileEditPage = () => {

    return (
        <Container>
            <Col className='offset-2 p-1' md={8}>
                <EditCandidateForm />
            </Col>
        </Container>
    )
}

export default ProfileEditPage
