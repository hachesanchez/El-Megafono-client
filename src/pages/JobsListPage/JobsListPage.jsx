import { useContext, useEffect, useState } from 'react'
import JobListCard from '../../components/JobListCard/JobListCard'
import './JobsListPage.css'
import { Container } from "react-bootstrap"
import { AuthContext } from '../../contexts/auth.context'
import jobService from '../../services/job.services'
import Loader from '../../components/Loader/Loader'
import JobSearch from '../../components/JobSearch/JobSearch'
import { Col, Row } from "react-bootstrap"



const JobsListPage = () => {


    const { user } = useContext(AuthContext)
    const [jobs, setJobs] = useState()
    const [jobsBackup, setJobsBackup] = useState()

    // TODO: Que los empleos desaparezcan al borrarlos
    useEffect(() => {
        loadJobs()
    }, [/* deleteJobId */])





    const loadJobs = () => {
        //TODO: Deberían aparece sólo los de la categoría del user logueado
        const userJobCategory = user?.jobCategory

        jobService

            .getAllJobs({ jobCategory: userJobCategory })
            .then(({ data }) => {
                console.log('el job category del logueado----', userJobCategory)
                console.log('el job category del post----', data)
                setJobs(data);
                setJobsBackup(data)
            })


            .catch((error) => {
                console.log(error);
            });

    }

    const filterJobByLocation = query => {
        const filteredJobs = jobsBackup.filter(elm => elm.location.toLowerCase().includes(query.toLowerCase()))
        setJobs(filteredJobs)
    }


    return (

        <Container>
            <Row>
                <Col md={{ span: 6, offset: 3 }}  >
                    <JobSearch filterJobByLocation={filterJobByLocation} />
                </Col>

            </Row>

            <Row>
                {
                    !jobs ? <Loader /> :
                        jobs.map(elm => {
                            return (
                                <JobListCard {...elm} key={elm._id} />
                            )
                        })
                }
            </Row>

        </Container>

    )
}

export default JobsListPage
