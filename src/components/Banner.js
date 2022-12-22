import { Col, Container, Row } from 'react-bootstrap'
import bannerimage from './../assets/testbannerimage.png'
import './Banner.css';

export const Banner = () => {
    return(
        <section className='banner' id='home'>
            <Container>
                <Row className='align-items-center'>
                    <Col>
                        <span className='tagline'>Hello World</span>
                        <h1>Jessica Lieu</h1>
                        <p>Insert text here</p>
                    </Col>
                    <Col>
                        <img src={bannerimage} alt='replace later' />
                    </Col>
                </Row>
            </Container>
        </section>
    );
}