import { Card, Col, Container } from "react-bootstrap"
import SavedJobCard from "../../components/SavedJobCard/SavedJobCard"


const SavedJobsPage = ({ savedJobs }) => {


    return (

        <>
            {savedJobs && savedJobs.length > 0 ? (
                savedJobs.map((savedJobs) => (
                    <Col className="mt-2" key={savedJobs._id}>
                        <SavedJobCard {...savedJobs} />
                    </Col>
                ))
            ) : (
                <p>Todavía no has guardado trabajos</p>
            )}
        </>

    );
};

export default SavedJobsPage
