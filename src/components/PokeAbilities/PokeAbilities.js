import React, { Component } from "react";
import "./PokeAbilities.css";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";

class PokeAbilities extends Component {
  state = {
    abilities: [],
    imageSrc: "",
    name: "",
    height: "",
    weight: "",
  };

  componentDidMount() {
    const {
      match: {
        params: { id },
      },
    } = this.props;

    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((response) => response.json())
      .then(
        ({
          abilities,
          sprites: { front_default: imageSrc },
          name,
          height,
          weight,
        }) => this.setState({ abilities, imageSrc, name, height, weight })
      )
      .catch(console.log);
  }
  render() {
    const { abilities, imageSrc, name, height, weight } = this.state;
    const abilityListItems = abilities.map(({ ability: { name } }) => {
      return <li key={name}>{name}</li>;
    });

    return (
      <div className="picturename">
        <Container>
          <Jumbotron>
            <section>
              <img src={imageSrc} alt={name} />
              <p>
                {name} weights {weight} lbs and is {height} meters tall.
              </p>
              <p>Here are some of {name}'s abilities:</p>
              <ul>{abilityListItems}</ul>
            </section>
          </Jumbotron>
        </Container>
      </div>
    );
  }
}
export default PokeAbilities;
