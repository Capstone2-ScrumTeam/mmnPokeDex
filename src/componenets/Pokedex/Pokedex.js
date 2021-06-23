import React, { Component } from "react";


class Pokedex extends Component {
  state = {
    
    imageSrc: "",
    name: "",
  };

  componentDidMount() {

    fetch(this.props.url)
      .then((response) => response.json())
      .then(({  sprites: { front_default: imageSrc }, name }) =>
        this.setState({  imageSrc, name })
      )
      .catch(console.log);
  }
  render() {
    const {  imageSrc, name } = this.state;
    

    return (
      <section>
        <h2>Pokemon: {name}</h2>
        <img src={imageSrc} alt={name} />
      </section>
    );
  }
}
export default Pokedex;
