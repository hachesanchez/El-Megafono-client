import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { JOB_CATEGORIES_ARRAY } from '../../consts/jobs-consts'
import './CandidateSearch.css'


const CandidateSearch = ({ onSearch }) => {
    const [filters, setFilters] = useState({
        locationFilter: '',
        jobCategoryFilter: '',
        availabilityFilter: false,
        travelAvailabilityFilter: false,
    })

    const handleSearch = () => {
        onSearch(filters)
    }

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target
        const filterValue = type === 'checkbox' ? checked : value

        setFilters((prevFilters) => ({
            ...prevFilters,
            [name]: filterValue,
        }))
    }


    return (

        <div>
            <Form>

                <Form.Group className='mb-3' controlId="jobCategoryFilter">
                    <Form.Label className='label'>Categoría</Form.Label>
                    <Form.Select
                        name="jobCategoryFilter"
                        value={filters.jobCategoryFilter}
                        onChange={handleChange}
                    >
                        <option value="">Escoge una opción...</option>
                        {
                            JOB_CATEGORIES_ARRAY.map(elm => <option key={elm} value={elm}>{elm}</option>)
                        }
                    </Form.Select>
                </Form.Group>

                <Form.Group className='mb-3' controlId="locationFilter">
                    <Form.Label className='label'>Ubicación</Form.Label>
                    <Form.Control
                        type="text"
                        name="locationFilter"
                        value={filters.locationFilter}
                        onChange={handleChange}
                    />
                </Form.Group>

                <Form.Group className='mb-3' controlId="availabilityFilter">
                    <Form.Check
                        className='label'
                        type="checkbox"
                        label="Disponibilidad inmediata"
                        name="availabilityFilter"
                        checked={filters.availabilityFilter}
                        onChange={handleChange}
                    />
                </Form.Group>

                <Form.Group className='mb-3' controlId="travelAvailabilityFilter">
                    <Form.Check
                        className='label'
                        type="checkbox"
                        label="Disponibilidad para viajar"
                        name="travelAvailabilityFilter"
                        checked={filters.travelAvailabilityFilter}
                        onChange={handleChange}
                    />
                </Form.Group>

                <Button variant="secondary mt-4 btn-sm d-grid" onClick={handleSearch}>
                    Buscar
                </Button>
            </Form>
        </div>
    )
}

export default CandidateSearch
