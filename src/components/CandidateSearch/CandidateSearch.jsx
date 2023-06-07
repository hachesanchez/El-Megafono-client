import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
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
                        <option value="Administración y finanzas">Administración y finanzas</option>
                        <option value="Comunicación y Marketing">Comunicación y Marketing</option>
                        <option value="Cooperación">Cooperación</option>
                        <option value="Dirección y coordinación">Dirección y coordinación</option>
                        <option value="Gestión de proyectos">Gestión de proyectos</option>
                        <option value="Legal">Legal</option>
                        <option value="Diseño">Diseño</option>
                        <option value="Arquitectura">Arquitectura</option>
                        <option value="Ciencias de la salud">Ciencias de la salud</option>
                        <option value="Recursos humanos">Recursos humanos</option>
                        <option value="Imagen y sonido">Imagen y sonido</option>
                        <option value="Tecnologías de la información (IT)">Tecnologías de la información (IT)</option>
                        <option value="Traducción e interpretación">Traducción e interpretación</option>
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
