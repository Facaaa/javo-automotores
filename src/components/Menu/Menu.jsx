import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';
import osvaldoLogo from './osvaldoLogo.png';

const Menu = () => {
    return (
        <>
            <header className="encabezado container-sm">
                <img id="logoOsvaldo" src={osvaldoLogo} alt="imagen consecionario" height="80px" width="180px" />
                <Navbar className="encGaleria__nav container">
                    <div className="container">
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse>
                            <Nav className="d-flex justify-content-between w-100">
                                <Nav.Link as={Link} to="/">Home</Nav.Link>
                                <Nav.Link as={Link} to="/nosotros">Nosotros</Nav.Link>
                                <Nav.Link as={Link} to="/stock">Stock</Nav.Link>
                                <Nav.Link as={Link} to="/contactanos">Contactanos</Nav.Link>
                                <Nav.Link as={Link} to="/galeria">Galería</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </div>
                </Navbar>
            </header>
        </>
    );
}

export default Menu;
