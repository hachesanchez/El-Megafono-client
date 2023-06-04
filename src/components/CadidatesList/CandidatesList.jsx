import { Col } from "react-bootstrap"
import CandidateCard from "../CandidateCard/CandidateCard"


const CandidatesList = ({ users }) => {

    return (

        users.map(elm => {
            return (
                <Col lg={4} md={6} xs={12} key={elm._id}>
                    <CandidateCard {...elm} />
                </Col>
            )
        })
    )
}

export default CandidatesList