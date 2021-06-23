import React, { Component } from "react";
//import { Link } from "react-router-dom";
import "./PokeList.css";
import Pokedex from "../Pokedex/Pokedex";

class PokeList extends Component {
  state = {
    pokemons: [],
  };

  componentDidMount() {
    fetch("https://pokeapi.co/api/v2/pokemon?offset=0&limit=151")
      .then((response) => response.json())
      .then((data) => this.setState({ pokemons: data.results }))
      .catch(console.log);
  }

  render() {
    const { pokemons } = this.state;
    const pokemonListItems = pokemons.map(({ url, name }) => {
      return (
        <li key={url}>
          <Pokedex url={url}/>
        </li>
      );
    });
    return (
      <section>
        <h3>Here are a list of pokemons:</h3>
        <ol>{pokemonListItems}</ol>
      </section>
    );
  }
}
export default PokeList;
