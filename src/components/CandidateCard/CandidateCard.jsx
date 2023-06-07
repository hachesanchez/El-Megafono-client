import { Card, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useState } from "react";
import availableIcon from '../../assets/images/available-icon1.png'
import notAvailableIcon from '../../assets/images/available-icon2.png'
import './CandidateCard.css'


const CandidateCard = ({ username, avatar, location, availability, jobCategory, _id }) => {

    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => { setIsHovered(true); };
    const handleMouseLeave = () => { setIsHovered(false); };

    const shadowClass = isHovered ? 'shadow-md' : 'shadow-sm';


    return (

        <Card
            className={`mb-3 CandidateCard ${shadowClass}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <Card.Img variant='top candidate-avatar' src={avatar} />
            <Card.Body>
                <Link to={`/profesionales/${_id}`} className="card-link">
                    <Card.Title><strong>{username}</strong></Card.Title>
                </Link>
                <Card.Text>
                    <h6 className='location'>{location}</h6>
                    <p className='jobCategory-candidate'> {jobCategory}</p>
                </Card.Text>
                <Row>
                    <Col className='p-1' xs={{ span: 3, offset: 9 }}>
                        <div className="availability-icon justify-content-end">
                            {availability ? (
                                <img className='icon m-3' src={availableIcon} alt="Disponible" />
                            ) : (
                                <img className='icon m-3' src={notAvailableIcon} alt="No disponible" />
                            )}
                        </div>
                    </Col>
                </Row>
            </Card.Body>
        </Card >
    )
}

export default CandidateCard


