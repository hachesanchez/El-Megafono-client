import React, { useContext } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../../assets/images/Logo-EM.png';
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
                        <Navbar.Brand as={Link} to="/inicio">
                            <img src={logo} alt="Logo El megáfono" width="auto" height="40" className="logo" />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link as="span">
                                    <Link to="/inicio" className="nav-link">Inicio(A/O/P)</Link>
                                </Nav.Link>
                                <Nav.Link as="span">
                                    <Link to="/profesionales" className="nav-link">Profesionales(A/O/P)</Link>
                                </Nav.Link>
                                <Nav.Link as="span">
                                    <Link to="/contacta" className="nav-link">Contacta(A/O/P)</Link>
                                </Nav.Link>
                                <Nav.Link as="span">
                                    <Link to="/crear-oferta" className="nav-link">Crear oferta(A/O)</Link>
                                </Nav.Link>  <Nav.Link as="span">
                                    <Link to="/usuarios" className="nav-link">Usuarias(A)</Link>
                                </Nav.Link>
                            </Nav>
                            <Nav>
                                <Navbar.Brand as={Link} to="/perfil">
                                    <img src={user?.avatar} alt="avatar" width="40" height="40" className="nav-avatar rounded-circle" />
                                </Navbar.Brand>
                                <NavDropdown className="nav-profile" title="" id="basic-nav-dropdown">
                                    <NavDropdown.Item>
                                        <Link to={`/edit/${user?._id}`} className="dropdown-item">Editar perfil</Link>
                                    </NavDropdown.Item>
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
