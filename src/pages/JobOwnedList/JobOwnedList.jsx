import { Container, Card, Col } from "react-bootstrap"
import JobOwnedCard from "../../components/JobOwnedCard/JobOwnedCard"

const JobOwnedList = ({ jobs, deleteJob }) => {


    return (

        <Container className="job-owned-box">


            {jobs && jobs.length > 0 ? (
                jobs.map((job) => (

                    <div className="" key={jobs._id}>
                        {<JobOwnedCard {...job} deleteJob={deleteJob} />}
                    </div>

                ))
            ) : (
                <Col className="p-3" >
                    <p>Todavía no has creado ofertas de trabajo</p>
                    <hr />
                </Col>
            )
            }

        </Container>
    )
}

export default JobOwnedList