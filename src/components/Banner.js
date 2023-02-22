import { Col, Container, Row } from 'react-bootstrap';
import bannerimage from './../assets/BannerPic.png';
import './Banner.css';


// Figure out why the tagline is align center and not auto align left
// Change the banner image later

export const Banner = () => {
    return(
        <section className='banner' id='home'>
            <Container>
                <Row className='align-items-center'>
                    <Col>
                        <span className='tagline'>Welcome!</span>
                        <h1>Jessica Lieu</h1>
                        <p>I am a third-year Computer Science student at UC Santa Barbara with a focus on UI/UX design. Originally from the greater Los Angeles area, I have always been drawn to the intersection of technology and creative expression.</p>
                        <p>Outside of academics, I enjoy drawing, writing, and gaming. I also really like cats!</p>
                        <p>I hope you enjoyed browsing my portfolio!</p>
                    </Col>
                    <Col>
                        <img src={bannerimage} alt='replace later' />
                    </Col>
                </Row>
            </Container>
        </section>
    );
}