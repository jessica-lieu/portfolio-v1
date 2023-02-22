import './Projects.css';
import { Container, Tabs, Tab, Row, Col } from 'react-bootstrap';
import { ProjectCard } from './ProjectCard';
import YelpTIMG from './../assets/YelpTHUMBNAIL.png';
import TravelocityTIMG from './../assets/TravelocityTHUMBNAIL.png';
import FFTIMG from './../assets/FreshFareTHUMBNAIL.png';
import SkinshipTIMG from './../assets/SkinshipTHUMBNAIL.png';
import error404 from './../assets/404.png';

export const Projects = () => {
    const uiuxarray = [
        {
            title: 'Yelp Redesign',
            description: 'A redesign of the Yelp app to improve the app’s overall cohesion and ease of use',
            time: 'SB Creative Lab: Fall Project Teams (Oct. - Dec. 2022)',
            imgUrl: YelpTIMG,
            link: 'https://www.figma.com/proto/4b7yXHdDvJ3x9f11ra6S4A/Yelp-Prototype?page-id=0%3A1&node-id=1%3A145&viewport=536%2C470%2C0.29&scaling=scale-down&starting-point-node-id=1%3A145',
        },
        {
            title: 'Travelocity Redesign',
            description: 'A redesign for the Travelocity app to improve the user’s experience',
            time: 'SB Creative Lab: PiXEL Designation (April 2022)',
            imgUrl: TravelocityTIMG,
            link: 'https://www.figma.com/proto/ZwGW81YFHthBmjDWvWc9GG/SB-PiXEL?page-id=0%3A1&node-id=2%3A4&starting-point-node-id=2%3A4',
        },
        {
            title: 'Fresh Fare',
            description: 'An app that was designed for those with food insecurity by connecting with local restaurants, stores, and farms to purchase the organization’s surplus food',
            time: 'Design at UCI: Impact Designathon (February 2022)',
            imgUrl: FFTIMG,
            link: 'https://www.figma.com/proto/5fb3blxivhPUtbowMC5H3m/Fresh-Fare?page-id=2%3A3&node-id=46%3A285&starting-point-node-id=46%3A285',
        },
        {
            title: 'Skinship',
            description: 'Skinship is a social app dedicated to helping skincare lovers keep track of their daily routines, while being connected to communities of users who experience the same skin issues',
            time: 'SB Creative Lab: Spring Designathon (March 2021)',
            imgUrl: SkinshipTIMG,
            link: 'https://www.figma.com/proto/Wc1XcZxNk3lsSn4hhsZCHw/skincare-designathon-mobile-application?page-id=0%3A1&node-id=1%3A2&starting-point-node-id=1%3A2',
        }
    ];

    /** Fill in programming projects */
    const programming = [];

    return(
        <section className='project' id = 'projects'>
            <Container>
                <Row>
                    <Col>
                        <h1>Projects</h1>
                        <h2>Select the images on the cards to view the project itself!</h2>
                        <Tabs defaultActiveKey="uiux" id="project-tabs" className="mb-3" fill>
                            <Tab eventKey="uiux" title="UI/UX">
                                <div className='tabsection'>
                                    <Row xs={1} md={2}>
                                        {uiuxarray.map((project, idx) => (
                                            <div className='tabsection'>
                                            <Col>
                                                <ProjectCard key={idx} {...project}/>
                                            </Col>
                                            </div>
                                        ))}
                                    </Row>
                                </div>
                            </Tab>
                            <Tab eventKey="program" title="Programming">
                                <img src={error404} />
                                Programming Projects will be inserted later
                            </Tab>
                        </Tabs>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}