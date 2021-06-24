import React, { Component } from "react";
import "./About.css";

function Team(props) {
  return <h1 className="bgpicture">This was done by {props.name}</h1>;
}

class About extends Component {
  render() {
    return (
      <div className="aboutpage">
        <h1>Meet the Team</h1>
        <Team name="Mimi" />
        <Team name="Moe" />
        <Team name="Ning" />
      </div>
    );
  }
}

export default About;
