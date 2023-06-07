import { useContext, useEffect, useState } from 'react'
import { Container, Button } from "react-bootstrap"
import { Link } from 'react-router-dom'
import { AuthContext } from '../../contexts/auth.context'
import jobService from '../../services/job.services'
import JobDetailsCard from '../../components/JobDetailsCard/JobDetailsCard'
import { useParams } from 'react-router-dom'
import './JobDetailsPage.css'


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

            {user?.role !== "ORGANIZACIÓN" && (
                <Link to={`/empleos`} className='d-flex align-items-center  '>
                    <Button variant="outline-dark" size="sm">
                        Volver a todas las ofertas
                    </Button>
                </Link>
            )}
            {job && <JobDetailsCard {...job} loadJob={loadJob} />}


        </Container>
    )
}

export default JobDetailsPage
