import { useContext, useEffect, useState } from 'react'
import JobListCard from '../../components/JobListCard/JobListCard'
import { Container } from "react-bootstrap"
import { AuthContext } from '../../contexts/auth.context'
import jobService from '../../services/job.services'
import Loader from '../../components/Loader/Loader'
import JobSearch from '../../components/JobSearch/JobSearch'
import { Col, Row } from "react-bootstrap"
import { sortByStartDate } from '../../utils/sortStartDate-utils'
import './JobsListPage.css'


const JobsListPage = () => {
    const { user } = useContext(AuthContext)
    const [jobs, setJobs] = useState([])
    const [filteredJobs, setFilteredJobs] = useState([])


    useEffect(() => {
        loadJobs()
    }, [])


    const loadJobs = () => {
        const userJobCategory = user.jobCategory

        if (user.role === "ADMIN") {
            jobService
                .getAllJobs()
                .then(({ data }) => {
                    const sortedJobs = sortByStartDate(data)
                    setJobs(sortedJobs)
                    setFilteredJobs(sortedJobs)
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
                    const sortedJobs = sortByStartDate(categoryJobs)
                    setJobs(sortedJobs)
                    setFilteredJobs(sortedJobs)
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

            <Row className='mb-3 p-2'>
                <Col lg={{ span: 8, offset: 2 }}>
                    <JobSearch filterJobByLocation={filterJobByLocation} />
                </Col>
            </Row>
            {filteredJobs.length === 0 ? (
                <Loader />
            ) : (
                filteredJobs.map((elm) => (
                    <Row key={elm._id} className='mb-3 p-2'>
                        <JobListCard {...elm} handleDeleteJob={handleDeleteJob} />
                    </Row>
                ))
            )}

        </Container>
    )
}

export default JobsListPage
