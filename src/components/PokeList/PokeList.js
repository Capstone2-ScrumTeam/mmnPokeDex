import React, { Component } from "react";
import "./PokeList.css";
import Pokedex from "../Pokedex/Pokedex";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";

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
      <div className="picturename">
        <Container className="p-3">
          <Jumbotron>
            <section>
              <ol>{pokemonListItems}</ol>
            </section>
          </Jumbotron>
        </Container>
      </div>
    );
  }
}
export default PokeList;
