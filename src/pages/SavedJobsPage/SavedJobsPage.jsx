import { Col, Container } from "react-bootstrap"
import SavedJobCard from "../../components/SavedJobsCard/SavedJobsCard"


const SavedJobPage = () => {


    return (

        {/* < Container >
            {savedJob && savedJob.length > 0 ? (
                savedJob.map((savedJob) => (
                    <Col key={savedJob._id}>
                        <SavedJobsCard {...savedJob} />
                    </Col>
                ))
            ) : (
                <p>Todavía no has guardado trabajos</p>
            )}
        </Container > */}
    );
};

export default SavedJobPage
