import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './CandidateCard.css'

const CandidateCard = ({ username, avatar, _id }) => {
    console.log({ _id })

    return (
        <Card className='mb-3 CandidateCard'>
            <Card.Img variant='top' src={avatar} />
            <Card.Body>
                <Card.Title> {username}</Card.Title>
                <div className='d-grid'>
                    <Link to={`/profesionales/${_id}`} className="btn btn-dark btn-sm">Detalles</Link>
                </div>
            </Card.Body>
        </Card>
    )
}

export default CandidateCard