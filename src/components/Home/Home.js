import React, { Component } from 'react';

import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';

import './Home.css';
class Home extends Component {
    render() {
        return (
            <div>
                <Container className="p-3">
                    <Jumbotron>
                        <h1 className="header">Welcome to our Pokedex </h1>
                        <p>
                            You can find our pokedex here
                        </p>
                        <p>
                    
                    </p>
                </Jumbotron> 
                </Container>
            </div>
        );
    }
}

export default Home;
