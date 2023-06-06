
import { Card, Container, Button, Row, Image } from "react-bootstrap";
import { Link } from "react-router-dom"
import './JobOwnedCard.css'
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import jobService from "../../services/job.services"
import { AuthContext } from "../../contexts/auth.context";
import locationIcon from '../../assets/images/ICON-5.png'


const JobOwnedCard = ({ _id, title, jobCategory, location, isFilled, owner, deleteJob }) => {

    const { user } = useContext(AuthContext)
    /*   const navigate = useNavigate();
      const [deletedJobId, setDeletedJobId] = useState(null)
  
      const handleDeleteJob = () => {
          const jobId = _id;
  
          jobService
              .deleteJob(jobId)
              .then((response) => {
                  setDeletedJobId(jobId);
                  navigate("/perfil");
              })
              .catch((error) => {
                  console.log(error);
              });
      } */


    return (

        <Container>
            <Card className="p-4 m-1 JobOwnedCardcustom">
                <Card.Text className=''>
                    <Link to={`/empleo/${_id}`} className='d-flex align-items-center '>
                        <h4><strong>{title}</strong></h4>
                    </Link>
                    <div className="mt-1"> {isFilled ? (
                        <span className="text-danger">Este proceso ya se ha cerrado</span>
                    ) : <span className="text-success">Oferta en curso</span>}
                    </div>
                    <p>{jobCategory}</p>
                    <div className="d-flex align-items-center">
                        <Image className="location-icon" src={locationIcon} />
                        <div className="mx-2 align-items-center">{location}</div>
                    </div>
                </Card.Text>

                <div >
                    {user && (user.role === 'ADMIN' || user._id === owner._id) && (
                        <div>
                            <Link className='text-primary m-2' to={`/empleo/${_id}/editar`}>
                                Editar
                            </Link>
                            <Link to="#" className="text-primary m-2" onClick={() => deleteJob(_id)}>
                                Eliminar
                            </Link>
                        </div>
                    )}
                </div>

            </Card>

        </Container>
    )
}

export default JobOwnedCard