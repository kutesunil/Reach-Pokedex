import React, { Component } from 'react';
import Card from './card';

class Pokedex extends Component {
    styles = { backgroundColor: 'red', border: '2px solid red' };
    // https://assets.pokemon.com/assets/cms2/img/pokedex/detail/025.png
    render() {
       let {pokeCard, pokedex, exp1, exp2} = this.props;

       let imgUrl = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';
        return (
            <>
            <div className = "container">
                <div className="row">
                <h3
                 className="text-center" style={{color : exp1 > exp2 ? 'green' : 'red'}}>
                {
                    exp1 > exp2 ? 'WINNER' : 'LOOSER'
                }
                </h3>
                <p className="text-center">Total Experience - {exp1}</p>
                {
                    pokeCard.map((item) => {
                        return (
                            <Card key = {item.id} data = {item} img = {imgUrl} />
                        )
                    }
                    )
                }
                    
                </div>
                <div className="row">
                <h3 className="text-center" style={{color : exp2 > exp1 ? 'green' : 'red'}}>
                {
                    exp2 > exp1 ? 'WINNER' : 'LOOSER'
                }
                </h3>
                <p className="text-center">Total Experience - {exp2}</p>
                {
                    pokedex.map((item) => {
                        return (
                            <Card key = {item.id} data = {item} img = {imgUrl} />
                        )
                    }
                    )
                }
                </div>
            </div>
            </>
        )
    }
}

export default Pokedex;