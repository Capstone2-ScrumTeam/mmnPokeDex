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
        <section>
          <p>
            {" "}
            Hey there {this.state.firstName} {this.state.lastName} ! please fill
            out your email
          </p>
          <button onClick={this.handleReset}>RESET FIELDS</button>
        </section>
      );
    } else if (this.state.submitted === true) {
      return (
        <section>
          <p>
            {" "}
            Thank you very much {this.state.firstName} {this.state.lastName} for
            signing up our newsletter!
          </p>
          <button onClick={this.handleReset}>RESET FIELDS</button>
        </section>
      );
    } else
      return (
        <div>
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="firstName">First Name: </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={this.state.firstName}
              onChange={this.handleChange}
            ></input>
            {"\n"}
            <label htmlFor="lastName">Last Name: </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={this.state.lastName}
              onChange={this.handleChange}
            ></input>
            {"\n"}
            <label htmlFor="email">Email: </label>
            <input
              type="email"
              id="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            ></input>
            <button>SUBMIT</button>
          </form>
        </div>
      );
  }
}

export default Newsletter;
