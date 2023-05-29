import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../../assets/images/Logo-EM.png';
import './Navigation.css';

const Navigation = () => {

    return (

        <div className="Navigation">
            <Navbar sticky="top" className="navbar-custom mb-5" bg="#6815EA" expand="lg">
                <Container>
                    <Navbar.Brand href="/inicio">
                        <img src={logo} alt="Logo El megáfono" width="auto" height="40" className="logo" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/inicio" className="nav-link">Inicio(A/O/P)</Nav.Link>
                            <Nav.Link href="/profesionales" className="nav-link">Profesionales(A/O/P)</Nav.Link>
                            <Nav.Link href="/contacta" className="nav-link">Contacta(A/O/P)</Nav.Link>
                            <Nav.Link href="/crear-oferta" className="nav-link">Crear oferta(A/O)</Nav.Link>
                            <Nav.Link href="/usuarios" className="nav-link">Usuarias(A)</Nav.Link>
                        </Nav>
                        <Nav>
                            <NavDropdown className="nav-profile" title="Mi perfil(A/O/P)" id="basic-nav-dropdown">
                                <NavDropdown.Item href="/perfil-editar">Editar perfil</NavDropdown.Item>
                                <NavDropdown.Item href="/">Desconectarse</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>

    );
};

export default Navigation;
