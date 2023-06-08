import EditCandidateForm from '../../components/EditCandidateForm/EditCandidateForm'
import { Container, Col } from "react-bootstrap"
import './ProfileEditPage.css'



const ProfileEditPage = () => {

    return (
        <Container>
            <h1 className="mb-5">Aquí puedes editar o completar tu perfil, TODO METER USER </h1>

            <Col className='offset-2 p-1' md={8}>
                <EditCandidateForm />
            </Col>
        </Container>
    )
}

export default ProfileEditPage
