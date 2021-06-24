import React, { Component } from "react";
import "./Newsletter.css";

class Newsletter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      submitted: false,
      firstName: "",
      lastName: "",
      email: "",
    };
  }
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      submitted: true,
    });
  };
  handleReset = () => {
    this.setState(() => {
      return {
        submitted: false,
        firstName: "",
        lastName: "",
        email: "",
      };
    });
  };
  render() {
    if (this.state.submitted === true && this.state.email === "") {
      return (
        <section className="noemail">
          <div className="thanksdiv">
            <p>
              {" "}
              Hey there {this.state.firstName} {this.state.lastName} ! please
              fill out your email
            </p>
            <button className="bbutton" onClick={this.handleReset}>
              NEWSLETTER
            </button>
          </div>
        </section>
      );
    } else if (this.state.submitted === true) {
      return (
        <section className="thanksemail">
          <div className="thanksdiv">
            <p>
              {" "}
              Thank you very much {this.state.firstName} {this.state.lastName}{" "}
              for signing up our newsletter!
            </p>
            <button className="bbutton" onClick={this.handleReset}>
              NEWSLETTER
            </button>
          </div>
        </section>
      );
    } else
      return (
        <div className="newsletterpic">
          <form onSubmit={this.handleSubmit}>
            <div className="formstyle">
              <div>
                <label htmlFor="firstName">First Name: </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={this.state.firstName}
                  onChange={this.handleChange}
                ></input>
                {"\n"}
              </div>
              <div>
                <label htmlFor="lastName">Last Name: </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={this.state.lastName}
                  onChange={this.handleChange}
                ></input>
                {"\n"}
              </div>
              <div>
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={this.state.email}
                  onChange={this.handleChange}
                ></input>
              </div>
              <button className="abutton">SUBMIT</button>
            </div>
          </form>
        </div>
      );
  }
}

export default Newsletter;
