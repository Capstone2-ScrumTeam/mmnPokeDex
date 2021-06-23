import React, { Component } from 'react';

class PokeAbilities extends Component {
    state = {
        abilities: [],
        
      };
      componentDidMount() {
    const id = this.props.match.params.id;



        fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
          .then((response) => response.json())
          .then(({ abilities}) =>
            this.setState({ abilities})
          )
          .catch(console.log);
      }
      render() {
        const { abilities} = this.state;
        const abilityListItems = abilities.map(({ ability: { name } }) => {
          return <li>{name}</li>;
        });
    
        return (
          <section>
            <h3>Here are some abilities:</h3>
            <ul>{abilityListItems}</ul>
          </section>
        );
      }
    }
export default PokeAbilities;