import { Col } from "react-bootstrap"
import CandidateCard from "../CandidateCard/CandidateCard"


const CandidatesList = ({ users }) => {

    return (

        users.map(elm => {
            return (
                <Col md={{ span: 4 }} key={elm._id}>
                    <CandidateCard {...elm} />
                </Col>
            )
        })
    )
}

export default CandidatesList