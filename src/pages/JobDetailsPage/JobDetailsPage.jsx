import { useContext, useEffect, useState } from 'react'
import { Container, Row } from "react-bootstrap"
import { AuthContext } from '../../contexts/auth.context'
import jobService from '../../services/job.services'
import Loader from '../../components/Loader/Loader'
import './JobDetailsPage.css'
import JobDetailsCard from '../../components/JobDetailsCard/JobDetailsCard'
import { useParams } from 'react-router-dom'


const JobDetailsPage = () => {

    const { id } = useParams()
    const { user, logout } = useContext(AuthContext)
    const [job, setJob] = useState()


    useEffect(() => {
        loadJob()
    }, [])


    const loadJob = () => {

        jobService
            .getOneJob(id)
            .then(({ data }) => {
                setJob(data);
            })
            .catch((error) => {
                console.log(error);
            });

    }

    return (
        <Container>
            {job && <JobDetailsCard {...job} />}
        </Container>
    )
}

export default JobDetailsPage
