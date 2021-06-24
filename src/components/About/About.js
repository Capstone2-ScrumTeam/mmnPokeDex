
import React, { Component } from 'react';
import './About.css'

class About extends Component {
    render() {
        return (
            <div className="aboutpage">
                <div className="about-section">
                    <h1>About Us Page</h1>
                    <p>Some text about who we are and what we do.</p>
                    <p>Resize the browser window to see that this page is responsive by the way.</p>
                </div>
                <h2 className="Teamtitle">Our Team</h2>
                <div className="row">
                    <div className="column">
                        <div className="card">
                            <img src="" alt="Mimi"/>
                            <div className="container">
                                <h2>Mimi</h2>
                                <p className="title">Scrum Master</p>
                                <p>Some information about them</p>
                                <p>Email goes here</p>
                                <p><button className="button">Contact</button></p>
                            </div>
                        </div>
                    </div>
                    <div className="column">
                        <div className="card">
                            <img src="" alt="Moe"/>
                            <div className="container">
                                <h2>Moe</h2>
                                <p className="title">Team Member</p>
                                <p>Some information about them</p>
                                <p>Email goes here</p>
                                <p><button className="button">Contact</button></p>
                            </div>
                        </div>
                    </div>
                    <div className="column">
                        <div className="card">
                            <img src="" alt="Ning"/>
                            <div className="container">
                                <h2>Ning</h2>
                                <p className="title">Team Member</p>
                                <p>Some information about them</p>
                                <p>Email goes here</p>
                                <p><button className="button">Contact</button></p>
                            </div>
                        </div>
                    </div>
                </div>

                
            </div>
        );
    }

}

export default About;

