import React, { Component } from "react";

class PokeList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pokemons: [],
    };
  }

  getPokemon = (event) => {
    event.preventDefault();
    //const { pokeId } = this.state;
    fetch(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=151`)
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          pokemons: data,
        })
      )
      .catch((error) => console.log(error));
  };
  render() {
    const pokemonListItems = this.state.pokemons.map((pokemon, index) => {
      return <li key={`${pokemon.name}-${index}`}>{pokemon.name}</li>;
    });
    return (
      <div>
        <h2>List of Pokemon</h2>

        <ul>{pokemonListItems}</ul>
      </div>
    );
  }
}

export default PokeList;
