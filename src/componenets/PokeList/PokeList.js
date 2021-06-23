import React, { Component } from "react";
import "./PokeList.css";
import Pokedex from "../Pokedex/Pokedex";
//import PokeAbilities from "../PokeAbilities/PokeAbilities";

class PokeList extends Component {
  state = {
    pokemons: [],
  };

  componentDidMount() {
    fetch("https://pokeapi.co/api/v2/pokemon?offset=0&limit=5")
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
          <Pokedex url={url} id={id}/>
          
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
