import React, { Component } from "react";
import "./About.css";


class About extends Component {
  render() {
    return (
      <div className="aboutpage">
        <div className="about-section">
          <h1>About Us Page</h1>
          <p>About the team and how to contact us!</p>
        </div>
        <h2 className="Teamtitle">Our Team</h2>
        <div className="row">
          <div className="column">
            <div className="card">
              <div className="container">
                <h2>Mimi</h2>
                <p className="title">Scrum Master</p>
                <p>Traveler + RV enthusiast</p>
                <p>akuaamowusu96@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="card">
              <div className="container">
                <h2>Moe</h2>
                <p className="title">Team Member</p>
                <p>I'm Moe and I like soccer.</p>
                <p>moethantkoko@gmail.com </p>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="card">
              <div className="container">
                <h2>Ning</h2>
                <p className="title">Team Member</p>
                <p>
                  Some of my hobbies are basketball, lifting weights, and video
                  games!
                </p>
                <p>n.li9402@gmail.com</p>

              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default About;
