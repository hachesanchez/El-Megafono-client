import { Col } from "react-bootstrap"
import ExperiencesCard from "../../components/ExperiencesCard/ExperiencesCard"


const ExperienceList = ({ experiences }) => {


    return (

        < container >
            {experiences && experiences.length > 0 ? (
                experiences.map((experiences) => (
                    <Col key={experiences._id}>
                        <ExperiencesCard {...experiences} />
                    </Col>
                ))
            ) : (
                <p>No hay experiencias disponibles.</p>
            )}
        </container >
    );
};

export default ExperienceList
