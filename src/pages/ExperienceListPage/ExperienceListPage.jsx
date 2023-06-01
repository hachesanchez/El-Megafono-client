import { Col } from "react-bootstrap"
import ExperiencesCard from "../../components/ExperiencesCard/ExperiencesCard"


const ExperienceList = ({ experiences }) => {

    return (
        < div >
            {experiences && experiences.length > 0 ? (
                experiences.map((experiences) => (
                    <Col md={{ span: 4 }} key={experiences._id}>
                        <ExperiencesCard {...experiences} />
                    </Col>
                ))
            ) : (
                <p>No hay experiencias disponibles.</p>
            )}
        </div >
    );
};

export default ExperienceList

