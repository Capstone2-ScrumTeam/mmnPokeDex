import React, { Component } from "react";

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
    this.state = {
      submitted: false,
      firstName: "",
      lastName: "",
      email: "",
    };
  };

  render() {
    if (this.state.submitted === true && this.state.email === "") {
      return (
        <section>
          <p>Hey Stupid {this.state.firstName}, write your email.</p>
          <button onClick={this.handleReset}>RESET FIELDS</button>
        </section>
      );
    } else if (this.state.submitted === true) {
      return (
        <section>
          <p>Thanks FAM {this.state.firstName} for signing up</p>
          <button onClick={this.handleReset}>RESET FIELDS</button>
        </section>
      );
    } else
      return (
        <div>
          <form onSubmit={this.handleSubmit}>
            <label>First Name: </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={this.state.firstName}
              onChange={this.handleChange}
            ></input>
            {"\n"}
            <label>Last Name: </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={this.state.lastName}
              onChange={this.handleChange}
            ></input>
            {"\n"}
            <label>Email: </label>
            <input
              type="email"
              id="useremail"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            ></input>
            <button>SUBMIT</button>
          </form>
          <h1>Mooooe</h1>
          <h1>Mooooe</h1>
        </div>
      );
  }
}

export default Newsletter;
