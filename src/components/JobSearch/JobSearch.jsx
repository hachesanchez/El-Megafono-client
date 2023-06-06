import { useState } from "react"
import { Form } from "react-bootstrap"


const JobSearch = ({ filterJobByLocation, filterAllJobs }) => {

    const [locationQuery, setLocationQuery] = useState('')

    const handleQueryChange = e => {
        const inputValue = e.target.value
        setLocationQuery(inputValue)
        filterJobByLocation(inputValue)
    }

    return (
        <Form>
            <Form.Group className="mb-3" controlId="jobsSearch">
                <Form.Control type="text"
                    placeholder="Busca por ubicación"
                    value={locationQuery}
                    onChange={handleQueryChange} />
            </Form.Group>
        </Form>
    )
}

export default JobSearch