import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useState } from "react";
import availableIcon from '../../assets/images/available-icon1.png'
import notAvailableIcon from '../../assets/images/available-icon2.png'
import './UserCard.css'


const UserCard = ({ username, avatar, location, availability, jobCategory, _id, role }) => {

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
            <Card.Img variant=' ' src={avatar} className="user-avatar" />

            <Card.Body>
                <Link to={`/profesionales/${_id}`} className="top card-link">
                    <Card.Title><strong>{username}</strong></Card.Title>
                </Link>
                <Card.Text>
                    <h6 className='location'>{location}</h6>
                    {jobCategory}
                </Card.Text>

                {role === "PROFESIONAL" && (
                    <div className="availability-icon justify-content-end">
                        {availability ? (
                            <img className='icon m-2' src={availableIcon} alt="Disponible" />
                        ) : (
                            <img className='icon m-3' src={notAvailableIcon} alt="No disponible" />
                        )}
                    </div>
                )}

            </Card.Body>

        </Card >
    )
}

export default UserCard
