import React, { Component } from 'react';
import Pokedex from './pokedex';

class App extends Component {
  title = "Pokedex";
  static defaultProps = {
    items: [
      {
        id: 4,
        name: 'Charmander',
        type: 'fire',
        base_experience: 62
      },
      {
        id: 7,
        name: 'Squirtle',
        type: 'water',
        base_experience: 63
      },
      {
        id: 11,
        name: 'Metapod',
        type: 'bug',
        base_experience: 72
      },
      {
        id: 12,
        name: 'Butterfree',
        type: 'flying',
        base_experience: 178
      },
      {
        id: 25,
        name: 'Picachu',
        type: 'eletric',
        base_experience: 112
      },
      {
        id: 39,
        name: 'jigglypuff',
        type: 'normal',
        base_experience: 95
      },
      {
        id: 94,
        name: 'gengar',
        type: 'poison',
        base_experience: 130
      },
      {
        id: 133,
        name: 'eevee',
        type: 'normal',
        base_experience: 230
      }
    ]
  }
  render() {
    let newArray = [...this.props.items];
    let dataArray = [];
    while (dataArray.length < newArray.length) {
      let random = Math.floor(Math.random() * newArray.length);
      let getvalue = newArray.splice(random, 1)[0];
      dataArray.push(getvalue);
    }

    let exp1 = newArray.reduce((acc, result) => acc + result.base_experience, 0);
    let exp2 = dataArray.reduce((acc, result) => acc + result.base_experience, 0);

    return (
      <>
        <Pokedex pokeCard = {newArray} pokedex = {dataArray} exp1 = {exp1} exp2 = {exp2} />
      </>
    );
  };
};

export default App;