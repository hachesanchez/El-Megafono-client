import { Col } from "react-bootstrap"
import UserCard from "../UserCard/UserCard"


const UsersList = ({ users }) => {


    return (
        users.map(elm => {
            return (
                <Col lg={3} md={6} xs={12} key={elm._id}>
                    <UserCard {...elm} />
                </Col>
            )
        })
    )
}

export default UsersList