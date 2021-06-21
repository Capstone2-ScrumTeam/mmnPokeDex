import React, { Component } from "react";

class Newsletter extends Component {
  render() {
    return (
      <div>
        <form>
          <label>First Name: </label>
          <input type="text" id="firstName" name="firstName"></input>
          {"\n"}
          <label>Last Name: </label>
          <input type="text" id="lastName" name="lastName"></input>
          {"\n"}
          <label>Email: </label>
          <input type="email" id="useremail" name="email"></input>
          <input type="submit" value="submit"></input>
        </form>
        <h1>Mooooe</h1>
        <h1>Mooooe</h1>
      </div>
    );
  }
}

export default Newsletter;
