import EditOrganizationForm from '../../components/EditOrganizationForm/EditOrganizationForm'
import EditProfessionalForm from '../../components/EditProfessionalForm/EditProfessionalForm'
import { Container } from "react-bootstrap"
import './ProfileEditPage.css'

const ProfileEditPage = () => {

    return (
        <Container>
            <h1>Editar perfil</h1>
            <EditProfessionalForm />
            <EditOrganizationForm />
        </Container>
    )
}

export default ProfileEditPage
