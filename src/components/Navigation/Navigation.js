import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import './Navigation.css';


class Navigation extends Component {
    render() {
        return (
            <div>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Navbar.Brand >Pokemon App</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                        <Nav.Link>
                            <Link className="FixingLink" to="/"> 
                                Home 
                            </Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link className="FixingLink" to="/content"> 
                                PokeDex 
                            </Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link className="FixingLink" to="/newsletter"> 
                                Newsletter 
                            </Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link className="FixingLink" to="/about"> 
                                About 
                            </Link>
                        </Nav.Link>
                        
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>

            </div>
        );     
        
    }
}

export default Navigation;
