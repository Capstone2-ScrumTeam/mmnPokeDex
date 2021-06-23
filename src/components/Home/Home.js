import React, { Component } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import headerimg from './imgfe.png';
import './Home.css';
class Home extends Component {
    render() {
        return (
            <div className="picturename">
                <Container className="p-3">
                    <Jumbotron fluid>
                        <div className="home-logo">
                        <img src={headerimg} alt="logo" />
                        </div>
                        <h1 className="header">Welcome to our Pokedex </h1>
                        <p>
                            Various number of pokemon have been catalogued
                            <br></br>
                            here 
                        </p>
                        <p>
                        
                                <Link to="/content">
                                <Button variant="primary">Learn more</Button>
                                </Link>
                                    
                            
                    </p>
                </Jumbotron> 
                </Container>
            </div>
        );
    }
}

export default Home;
