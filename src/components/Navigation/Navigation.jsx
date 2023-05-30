import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../../assets/images/Logo-EM.png';
import frijolAvatar from '../../assets/images/avatar-frijol.jpg'
import { AuthContext } from '../../contexts/auth.context';
import './Navigation.css';

const Navigation = () => {

    const { user, logout } = useContext(AuthContext)
    console.log({ user })

    return (

        <div className="Navigation">
            <Navbar sticky="top" className="navbar-custom mb-5" bg="#6815EA" expand="lg">
                <Container>
                    {/*   {
                        user
                            ? */}
                    <>
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
                                <Navbar.Brand href="/perfil">
                                    <img src={user} alt="avatar" width="auto" height="40" className="logo rounded-circle" />
                                </Navbar.Brand>
                                <NavDropdown className="nav-profile" title="" id="basic-nav-dropdown">
                                    <NavDropdown.Item href={`/edit/${user?._id}`} >Editar perfil</NavDropdown.Item>
                                    <NavDropdown.Item onClick={logout}>Cerrar sesión</NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                        </Navbar.Collapse>
                    </>
                    {/*     :
                            <></>
                    } */}
                </Container>
            </Navbar>
        </div>

    );
};

export default Navigation;
