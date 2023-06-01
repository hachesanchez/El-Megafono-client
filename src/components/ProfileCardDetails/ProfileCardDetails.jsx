import { Card, Button, Container, Image, Row, Col } from 'react-bootstrap'


import './ProfileCardDetails.css'

const ProfileCardDetails = ({ user }) => {

    return (
        <Container>
            <Row className="d-flexjustify-content-center align-items-center">
                <Col >
                    <Image className='avatar' src={user.avatar} alt="Avatar" roundedCircle />
                </Col>
                <Col >
                    <Row>
                        <h1>¡Hola de nuevo {user.username}!</h1>
                    </Row>
                    <Row>
                        <h4>{user.jobCategory}</h4>
                        <p>{user.description}</p>
                    </Row>
                </Col>
            </Row >
        </Container >
    )
}

export default ProfileCardDetails