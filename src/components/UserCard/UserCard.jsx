import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useState } from "react";
import './UserCard.css'


const UserCard = ({ username, avatar, location, availability, jobCategory, _id }) => {

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
            <Card.Img variant='rounded-circle' src={avatar} className="user-card-img-circle" />
            <Card.Body>
                <Link to={`/profesionales/${_id}`} className="card-link">
                    <Card.Title><strong>{username}</strong></Card.Title>
                </Link>
                <Card.Text>
                    <h6 className='location'>{location}</h6>
                    {jobCategory}
                </Card.Text>
                <Card.Text> {availability ? <p>Disponible</p> : <p>No disponible</p>}</Card.Text>
            </Card.Body>
        </Card >
    )
}

export default UserCard
