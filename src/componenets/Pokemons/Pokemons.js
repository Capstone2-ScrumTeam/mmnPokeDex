import React, { Component } from 'react';
import PokeList from '../PokeList/PokeList';

class Pokemons extends Component {
    render() {
        return (
            <section>
              <h2>Pokemons!</h2>
              <PokeList />
            </section>
          );
        }
      }
export default Pokemons;