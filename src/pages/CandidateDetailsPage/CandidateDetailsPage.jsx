import { Container } from 'react-bootstrap'
import './CandidateDetailsPage.css'
import CandidateCardDetails from '../../components/CandidateCardDetails/CandidateCardDetails'

/* const [users, setUsers] = useState()
//const { user } = useContext(AuthContext)

useEffect(() => {
    loadUsers()
}, [])

const loadUsers = () => {
    userService
        .getProfile()
        .then(({ data }) => setUsers(data))
        .catch(err => console.log(err))
} */

const CandidateDetailsPage = () => {

    return (
        <Container>
            <h1>Detalles de una candidata</h1>
            <CandidateCardDetails />

        </Container>

    )
}

export default CandidateDetailsPage