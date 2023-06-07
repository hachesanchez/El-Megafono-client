import React, { useContext } from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../contexts/auth.context'
import NavDropdown from 'react-bootstrap/NavDropdown'
import logo from '../../assets/images/Logo-EM.png'
import './Navigation.css'

const Navigation = () => {
    const { user, logout } = useContext(AuthContext)

    return (
        <div className="Navigation">
            <Navbar sticky="top" className="navbar-custom navbar-narrow p-2" bg="#6815EA" expand="md">
                <div>
                    {user ? (
                        <>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Navbar.Brand as={Link} to="/inicio" className="nav-logo">
                                    <img src={logo} alt="Logo El megáfono" width="auto" height="40" className="logo" />
                                </Navbar.Brand>

                                <Nav className="me-auto">
                                    <Nav.Link as="span">
                                        <Link to="/inicio" className="nav-link" activeClassName="active">Inicio</Link>
                                    </Nav.Link>
                                    <Nav.Link as="span">
                                        <Link to="/contacta" className="nav-link" activeClassName="active">Contacta</Link>
                                    </Nav.Link>
                                    <Nav.Link as="span">
                                        <Link to="/profesionales" className="nav-link" activeClassName="active">Profesionales</Link>
                                    </Nav.Link>

                                    {user?.role !== "PROFESIONAL" && (
                                        <Nav.Link as="span">
                                            <Link to="/crear-oferta" className="nav-link" activeClassName="active">Crear oferta</Link>
                                        </Nav.Link>
                                    )}

                                    {user?.role !== "ORGANIZACIÓN" && (
                                        <Nav.Link as="span">
                                            <Link to="/empleos" className="nav-link" activeClassName="active">Empleos</Link>
                                        </Nav.Link>
                                    )}

                                    {user?.role === "ADMIN" && (
                                        <Nav.Link as="span">
                                            <Link to="/usuarios" className="nav-link" activeClassName="active">Usuarias</Link>
                                        </Nav.Link>
                                    )}
                                </Nav>

                                <Nav className="custom-nav">
                                    <NavDropdown className="nav-profile" title="" id="basic-nav-dropdown">
                                        <NavDropdown.Item
                                            as={Link}
                                            to={`/editar/${user?._id}`}
                                            className="dropdown-item"
                                        >
                                            Editar perfil
                                        </NavDropdown.Item>
                                        <NavDropdown.Item
                                            onClick={logout}
                                            className="dropdown-item"
                                        >
                                            Cerrar sesión
                                        </NavDropdown.Item>
                                    </NavDropdown>
                                    <Navbar.Brand as={Link} to="/perfil">
                                        <img src={user?.avatar} alt="avatar" width="40" height="40" className="nav-avatar rounded-circle" />
                                    </Navbar.Brand>
                                </Nav>
                            </Navbar.Collapse>
                        </>
                    ) : (
                        <></>
                    )}
                </div>
            </Navbar>
        </div>
    )
}

export default Navigation
