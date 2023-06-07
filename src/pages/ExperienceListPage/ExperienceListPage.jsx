import { Container } from "react-bootstrap"
import ExperiencesCard from "../../components/ExperiencesCard/ExperiencesCard"


const ExperienceList = ({ experiences, deleteExperience }) => {

    const sortedExperiences = Array.isArray(experiences)
        ? [...experiences].sort(
            (b, a) => new Date(a.startDate) - new Date(b.startDate))
        : []



    return (

        <Container className="experiences-box bg-white">

            {sortedExperiences && sortedExperiences.length > 0 ? (
                sortedExperiences.map((experience) => (
                    <div key={experience._id}>
                        <ExperiencesCard {...experience} deleteExperience={deleteExperience} />
                        <hr />
                    </div>
                ))
            ) : (
                <div className="p-3" >
                    <p>No hay experiencias disponibles.</p>
                    <hr />
                </div>

            )}
        </Container>
    );
};

export default ExperienceList
