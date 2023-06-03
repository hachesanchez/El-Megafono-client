import { useContext, useEffect, useState } from 'react'
import JobListCard from '../../components/JobListCard/JobListCard'
import './JobsListPage.css'
import { Container } from "react-bootstrap"
// import { AuthContext } from '../../contexts/auth.context'
import jobService from '../../services/job.services'
import Loader from '../../components/Loader/Loader'



const JobsListPage = () => {


    /*  const { user, logout } = useContext(AuthContext) */
    const [jobs, setJobs] = useState()


    useEffect(() => {
        loadJobs()
    }, [/* deleteJobId */])


    const loadJobs = () => {

        jobService
            .getAllJobs()
            .then(({ data }) => {
                setJobs(data);
            })
            .catch((error) => {
                console.log(error);
            });

    }


    return (

        <Container>
            <h1>Aquí irá un buscador por ubicación</h1>
            <hr />
            <div>
                {
                    !jobs ? <Loader /> :
                        jobs.map(elm => {
                            return (
                                <JobListCard {...elm} key={elm._id} />
                            )
                        })
                }
            </div>

        </Container>

    )
}

export default JobsListPage
