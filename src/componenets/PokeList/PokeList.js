import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./PokeList.css";

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
      url = url.split("/");
      const id = url[url.length - 2];
      return (
        <li key={url}>
          <Link to={`/pokemons/${id}`}>{name}</Link>
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
