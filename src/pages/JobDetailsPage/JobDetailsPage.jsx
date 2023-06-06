import { useContext, useEffect, useState } from 'react'
import { Container, Button } from "react-bootstrap"
import { Link } from 'react-router-dom'

import { AuthContext } from '../../contexts/auth.context'
import jobService from '../../services/job.services'
import Loader from '../../components/Loader/Loader'
import './JobDetailsPage.css'
import JobDetailsCard from '../../components/JobDetailsCard/JobDetailsCard'
import { useParams } from 'react-router-dom'
import ApplicantsListCard from '../../components/ApplicantsListCard/ApplicantsListCard'


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
            <Link to={`/empleos`} className='d-flex align-items-center  '>
                <Button variant="outline-dark" size="sm">
                    Volver a todas las ofertas
                </Button>
            </Link>
            {job && <JobDetailsCard {...job} loadJob={loadJob} />}
            <ApplicantsListCard />
        </Container>
    )
}

export default JobDetailsPage
