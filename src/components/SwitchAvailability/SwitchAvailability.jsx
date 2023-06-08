import { Col } from "react-bootstrap"
import Switch from 'react-switch'
import './SwitchAvailability.css'


const SwitchAvailability = ({ availability, setAvailability }) => {

    const handleChange = (checked) => {
        setAvailability(checked)
    }

    return (

        <Col md={9}>
            <div>
                <p className="setAvailability">¿Disponible para empezar a trabajar?</p>
                <Switch
                    onChange={handleChange}
                    checked={availability}
                />
            </div>
        </Col>
    )
}

export default SwitchAvailability
