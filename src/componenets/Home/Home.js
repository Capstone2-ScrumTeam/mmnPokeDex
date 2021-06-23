import React, { Component } from 'react';
import PokeList from '../PokeList/PokeList';
class Home extends Component {
    render() {
        return (
            <section>
              <h2>Home</h2>
              <PokeList />
            </section>
          );
        }
      }
export default Home;