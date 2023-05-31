import EditOrganizationForm from '../../components/EditOrganizationForm/EditOrganizationForm'
import EditCandidateForm from '../../components/EditCandidateForm/EditCandidateForm'
import { Container } from "react-bootstrap"
import './ProfileEditPage.css'

const ProfileEditPage = () => {

    return (
        <Container>
            <h1>Editar perfil</h1>
            <hr className='mb-4' />
            <EditCandidateForm />
            <EditOrganizationForm />
        </Container>
    )
}

export default ProfileEditPage
