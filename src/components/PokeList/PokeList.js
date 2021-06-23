import React, { Component } from "react";
import "./PokeList.css";
import Pokedex from "../Pokedex/Pokedex";
//import PokeAbilities from "../PokeAbilities/PokeAbilities";

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
      let id = url.split("/");
      console.log(id);
      id = id[id.length - 2];

      return (
        <li className="poke-list" key={url}>
          <Pokedex className="pokedex" url={url} id={id} />
        </li>
      );
    });
    return (
      <section className="flex-container">
        <ol>{pokemonListItems}</ol>
      </section>
    );
  }
}
export default PokeList;
