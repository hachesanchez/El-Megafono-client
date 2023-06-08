import { useContext, useEffect, useState } from 'react'
import JobListCard from '../../components/JobListCard/JobListCard'
import { Container } from "react-bootstrap"
import { AuthContext } from '../../contexts/auth.context'
import jobService from '../../services/job.services'
import Loader from '../../components/Loader/Loader'
import JobSearch from '../../components/JobSearch/JobSearch'
import { Col, Row } from "react-bootstrap"
import './JobsListPage.css'



const JobsListPage = () => {
    const { user } = useContext(AuthContext)
    const [jobs, setJobs] = useState([])
    const [filteredJobs, setFilteredJobs] = useState([])


    useEffect(() => {
        loadJobs()
    }, [/* deleteJobId */])


    const loadJobs = () => {
        const userJobCategory = user.jobCategory

        if (user.role === "ADMIN") {
            jobService
                .getAllJobs()
                .then(({ data }) => {
                    setJobs(data)
                    setFilteredJobs(data)
                })
                .catch((error) => {
                    console.log(error)
                })
        } else {
            jobService
                // TODO: CREAR SERVICIO getJobsByCategory(category)
                .getAllJobs({ jobCategory: userJobCategory })
                .then(({ data }) => {
                    const categoryJobs = data.filter(
                        (job) => job.jobCategory === userJobCategory
                    )
                    setJobs(categoryJobs)
                    setFilteredJobs(categoryJobs)
                })
                .catch((error) => {
                    console.log(error)
                })
        }
    }


    const filterJobByLocation = (query) => {
        const filteredJobs = jobs.filter((elm) =>
            elm.location.toLowerCase().includes(query.toLowerCase())
        )
        setFilteredJobs(filteredJobs)
    }



    const handleDeleteJob = (jobId) => {

        jobService
            .deleteJob(jobId)
            .then(() => {
                setJobs((prevJobs) => prevJobs.filter((job) => job._id !== jobId))
                setFilteredJobs((prevJobs) => prevJobs.filter((job) => job._id !== jobId))
            })
            .catch((error) => {
                console.log(error)
            })
    }


    return (

        <Container>
            <Row>
                <Col md={{ span: 6, offset: 3 }}>
                    <JobSearch filterJobByLocation={filterJobByLocation} />
                </Col>
            </Row>
            <Row className='m-2 p-2'>
                {!filteredJobs ?
                    <Loader />
                    :
                    filteredJobs.map((elm) => <JobListCard {...elm} key={elm._id} handleDeleteJob={handleDeleteJob} />)
                }
            </Row>
        </Container>
    )
}

export default JobsListPage

