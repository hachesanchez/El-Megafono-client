import { useContext, useEffect, useState } from 'react'
import CandidatesList from '../../components/CadidatesList/CandidatesList'
import userService from '../../services/user.services'
import { Col, Container, Row } from "react-bootstrap"
import Loader from '../../components/Loader/Loader'
import { AuthContext } from "../../contexts/auth.context"
import './CandidatesListPage.css'
import CandidateSearch from '../../components/CandidateSearch/CandidateSearch'


const CandidatesListPage = () => {


    const [users, setUsers] = useState()
    const [filteredUsers, setFilteredUsers] = useState([])


    useEffect(() => {
        loadUsers();
    }, []);

    useEffect(() => {
        setFilteredUsers(users);
    }, [users]);


    const loadUsers = () => {

        userService
            .getCandidateUsers()
            .then(({ data }) => {
                setUsers(data)
                setFilteredUsers(data)
            })
            .catch(err => console.log(err))
    }


    const handleSearch = (filters) => {

        // TODO: MOVER FILTROS A API

        let filteredUsers = users

        if (filters.locationFilter) {
            filteredUsers = filteredUsers.filter(user => user.location === filters.locationFilter)
        }
        if (filters.jobCategoryFilter) {
            filteredUsers = filteredUsers.filter(user => user.jobCategory === filters.jobCategoryFilter)
        }
        if (filters.availabilityFilter) {
            filteredUsers = filteredUsers.filter(user => user.availability === filters.availabilityFilter)
        }
        if (filters.travelAvailabilityFilter) {
            filteredUsers = filteredUsers.filter(user => user.travelAvailability === filters.travelAvailabilityFilter)
        }

        setFilteredUsers(filteredUsers)
    }


    return (

        <Container>

            <Row>
                <Col lg={2} md={10} xs={12}>
                    <h5 className='mb-4 mt-5 justify-content-center'>Busca un profesional</h5>
                    <CandidateSearch onSearch={handleSearch} />
                </Col>

                <Col className='offset-lg-1 offset-md-1 mt-5' lg={9} md={9} xs={12} >
                    <Row>
                        {!users ? <Loader /> : <CandidatesList users={filteredUsers} />}
                    </Row>
                </Col>
            </Row>

        </Container>


    )
}

export default CandidatesListPage
