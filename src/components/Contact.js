import { Col, Container, Row, Card } from 'react-bootstrap'
import { Icon } from '@iconify/react';
import ContactImage from './../assets/ContactImage.png'
import './Contact.css';

export const Contact = () => {
    return(
        <section className='contact' id='contact'>
            <Container>
                <h1>Let's Get in Touch</h1>
                <p>If you have any questions or would like to chat further about my work, feel free to reach out!</p>
                <Row className='align-items-center'>
                    <Col>
                        <img src={ContactImage} />
                    </Col>
                    <Col>
                        <a href='mailto:jessicalieu@ucsb.edu'><Card className='rectangle'>
                            <Card.Body>
                                <Icon icon="clarity:email-solid" />
                                Email
                            </Card.Body>
                        </Card></a>
                        <a href='https://www.linkedin.com/in/jessica-lieu-58598218a/'><Card className='rectangle'>
                            <Card.Body>
                                <Icon icon='jam:linkedin' />
                                LinkedIn
                            </Card.Body>
                        </Card></a>
                        <a href='https://github.com/jessica-lieu'><Card className='rectangle'>
                            <Card.Body>
                                <Icon icon='akar-icons:github-fill' />
                                Github
                            </Card.Body>
                        </Card></a>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}