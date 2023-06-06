import { Card, Button, Container, Image, Row, Col } from 'react-bootstrap'


import './ProfileCardDetails.css'

const ProfileCardDetails = ({ user }) => {

    return (
        <Container>

            <div className="profile-card-details">

                <Row className="align-items-center">

                    <Col xs={12} sm={12} md={3} className="avatar-col">
                        <Image className='avatar' src={user.avatar} alt="Avatar" roundedCircle />
                    </Col>
                    <Col xs={12} sm={12} md={9} className="profile-col">

                        <h1>¡Hola {user.username}!</h1>

                        <h4 className='job-category-prof mb-4'>{user.jobCategory}</h4>
                        <p>{user.description}</p>
                    </Col>
                </Row >

            </div>
        </Container >
    )
}

export default ProfileCardDetails