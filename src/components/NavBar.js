import {useState, useEffect} from 'react';
import {Container, Navbar, Nav} from 'react-bootstrap';
import { Icon } from '@iconify/react';
import './NavBar.css';

export const NavBar = () => {
    /* Tabs in Navbar will be highlighted when scrolling to different sections */
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, seScrolled] = useState(false);

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    /* Navbar is transparent when shown and will become opaque when scrolling */
    useEffect(()=> {
        const onScroll = () => {
            if(window.scrollY > 50) {
                seScrolled(true);
            }
            else{
                seScrolled(false);
            }
        }

        window.addEventListener('scroll', onScroll);

        return () => window.removeEventListener('scroll', onScroll);
    }, [])

    return (
        <Navbar expand='lg' className = {scrolled ? 'scrolled':''}>
          <Container>
            <Navbar.Brand href='#home'>
              <Icon icon='mdi:cat' color='white'/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse id='basic-navbar-nav'>
              <Nav className='me-auto'>
                <Nav.Link href='#home' className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick = {() => onUpdateActiveLink('home')}>Home</Nav.Link>
                <Nav.Link href='#projects' className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link' } onClick = {() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
                <Nav.Link href='#contact' className={activeLink === 'contact' ? 'active navbar-link' : 'navbar-link'} onClick = {() => onUpdateActiveLink('contact')}>Contact</Nav.Link>
              </Nav>
              <span className='navbar-text'>
                <div className='social-icon'>
                    <a href='#'><Icon icon='jam:linkedin' /></a>
                    <a href='#'><Icon icon='akar-icons:github-fill' /></a>
                </div>
              </span>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
  }