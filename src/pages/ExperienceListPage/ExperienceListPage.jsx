import { Col, Container } from "react-bootstrap"
import ExperiencesCard from "../../components/ExperiencesCard/ExperiencesCard"


const ExperienceList = ({ experiences, deleteExperience }) => {


    return (

        <Container className="experiences-box bg-white">

            {experiences && experiences.length > 0 ? (
                experiences.map((experience) => (

                    <Col className=" " key={experiences._id}>
                        <ExperiencesCard {...experience} deleteExperience={deleteExperience} />
                        <hr />
                    </Col>

                ))
            ) : (
                <Col className="p-3" >
                    <p>No hay experiencias disponibles.</p>
                    <hr />
                </Col>

            )}
        </Container>
    );
};

export default ExperienceList
