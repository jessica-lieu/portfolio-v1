import { Card } from "react-bootstrap";
import './ProjectCard.css';

/* Figure out on making the description fill the card more */

export const ProjectCard = ({title, description, time, imgUrl, link}) => {
    return (
        <div className="card">
        <Card text="dark">
            <div className="card-img">
                <a href={link}><Card.Img variant="top" src={imgUrl} /></a>
            </div>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text text = "dark">{description}</Card.Text>
            </Card.Body>
            <Card.Footer>
                <small className="text-muted">{time}</small>
            </Card.Footer>
        </Card>
        </div>
      );
    }