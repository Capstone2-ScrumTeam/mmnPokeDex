import React, { Component } from "react";
import {  Link } from "react-router-dom";

class Pokedex extends Component {
  state = {
    imageSrc: "",
    name: "",
  };

  componentDidMount() {

    fetch(this.props.url)
      .then((response) => response.json())
      .then(({  sprites: { front_default: imageSrc }, name }) =>
        this.setState({  imageSrc, name })
      )
      .catch(console.log);
  }
  render() {
    const {  imageSrc, name } = this.state;
    
    return (
      <section>
        <h2>{name}</h2>
        <Link to={`/pokemons/${this.props.id}`}>
        <img src={imageSrc} alt={name} />
        </Link>
      </section>
    );
  }
}
export default Pokedex;
