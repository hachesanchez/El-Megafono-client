import { useEffect, useState } from "react";
import { Card, Container } from "react-bootstrap";
import { Link } from "react-router-dom"
import userService from "../../services/user.services";
import './SavedJobCard.css'


const SavedJobCard = ({ title, owner, _id }) => {

    const [ownerUsername, setOwnerUsername] = useState("")

    useEffect(() => {
        loadOwnerUsername()
    }, [owner])


    const loadOwnerUsername = () => {
        userService
            .getProfile(owner)
            .then((response) => {
                const ownerData = response.data;
                setOwnerUsername(ownerData.username);
            })
            .catch((error) => {
                console.log("Error loading owner data:", error);
            });
    };


    return (

        <Container>
            <Card className="savedJob-card-custom">
                <Card.Body>
                    <Card.Title>
                        <Link to={`/empleo/${_id}`} className="savedJob-title">{title}</Link>
                    </Card.Title>
                    <Card.Text className="saved-Job-owner">{ownerUsername}</Card.Text>
                </Card.Body>
            </Card>
        </Container>
    )
}

export default SavedJobCard