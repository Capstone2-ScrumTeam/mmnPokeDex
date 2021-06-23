import React, { Component } from 'react';

class PokeAbilities extends Component {
    state = {
        abilities: [],
        
      };
      componentDidMount() {
    
        fetch(this.props.url)
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
            
            <ul>{abilityListItems}</ul>
          </section>
        );
      }
    }
export default PokeAbilities;