import { Container, Row, Col } from 'react-bootstrap';
import { useContext } from 'react';
import { AuthContext } from './../../contexts/auth.context';
import availableIcon from '../../assets/images/available-icon1.png'
import notAvailableIcon from '../../assets/images/available-icon2.png'
import locationIcon from '../../assets/images/ICON-5.png'
import travelIcon from '../../assets/images/ICON-13.png'
import salaryIcon from '../../assets/images/ICON-9.png'
import experienceIcon from '../../assets/images/ICON-8.png'
import skillsIcon from '../../assets/images/ICON-213.png'
import languageIcon from '../../assets/images/ICON-2.png'
import './CandidateCardDetailsExtra.css';



const CandidateCardDetailsExtra = ({ user }) => {


    return (

        <Container className="details-extra">

            <Row >
                <Row className='mb-4' >

                    <div className="availability">
                        <img className='icon m-2' src={user.availability ? availableIcon : notAvailableIcon} alt="Disponible" />
                    </div>
                </Row>

                <Row >

                    <Col >
                        <div className="location-icon mt-3" style={{ display: 'flex', alignItems: 'center' }}>
                            <img className='icon m-2' src={locationIcon} alt="No disponible" />
                            {user.location}
                        </div>
                        <div className="travel-icon mt-3" style={{ display: 'flex', alignItems: 'center' }}>
                            <img className='icon m-2' src={travelIcon} alt="No disponible" />
                            {user.travelAvailability ? (<>Me desplazo</>) : (<>No me desplazo</>)}
                        </div>
                        <div className="experience-icon mt-3" style={{ display: 'flex', alignItems: 'center' }}>
                            <img className='icon m-2' src={salaryIcon} alt="No disponible" />
                            {user.dailyRate}€ / jornada

                        </div>
                        <div className="experience-icon mt-3" style={{ display: 'flex', alignItems: 'center' }}>
                            <img className='icon m-2' src={experienceIcon} alt="No disponible" />
                            {user.yearsOfExperience} años de experiencia

                        </div>
                        <div className="languages-icon mt-3" style={{ display: 'flex', alignItems: 'center' }}>
                            <img className='icon m-2' src={languageIcon} alt="No disponible" />
                            {user.languages.map((language, index) => (
                                <p key={index}>
                                    {language.name} - Nivel: {language.level}
                                </p>
                            ))}
                        </div>
                        <div className="skills-icon mt-3" style={{ display: 'flex', alignItems: 'center' }}>
                            <img className='icon m-2' src={skillsIcon} alt="No disponible" />
                            <ul>
                                {
                                    user.skills.map((skill, index) => (
                                        skill.split(',').map((subSkill, subIndex) => (
                                            <li key={`${index}-${subIndex}`}>{subSkill.trim()}</li>
                                        ))
                                    ))
                                }
                            </ul>
                        </div>
                    </Col>
                    {/* 
                    <Col md={6}>
                        <div className="languages-icon mt-3" style={{ display: 'flex', alignItems: 'center' }}>
                            <img className='icon m-2' src={languageIcon} alt="No disponible" />
                            {user.languages.map((language, index) => (
                                <p key={index}>
                                    {language.name} - Nivel: {language.level}
                                </p>
                            ))}
                        </div>
                        <div className="skills-icon mt-3" style={{ display: 'flex', alignItems: 'center' }}>
                            <img className='icon m-2' src={skillsIcon} alt="No disponible" />
                            <ul>
                                {user.skills.map((skill, index) => (
                                    skill.split(',').map((subSkill, subIndex) => (
                                        <li key={`${index}-${subIndex}`}>{subSkill.trim()}</li>
                                    ))
                                ))}
                            </ul>
                        </div>
                    </Col> */}


                </Row>
            </Row>


        </Container >

    )
}

export default CandidateCardDetailsExtra