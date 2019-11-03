import React, {Component} from 'react';

export default class Pokemon extends Component{
    render(){
        const {pokemon, id} = this.props;
        let species = pokemon.name;
        let upperSpecies = species.charAt(0).toUpperCase() + species.substring(1);
        if(species === 'minior-red-meteor'){
            species = 'minior-meteor'
        } else if(species === 'mimikyu-disguised'){
            species = 'mimikyu'
        };
        if(upperSpecies === 'Nidoran-f'){
            upperSpecies = 'Nidoran F'
        } else if(upperSpecies === 'Nidoran-m'){
            upperSpecies = 'Nidoran M'
        }
        return (
            <div className="pokemon">
                <div className="pokemon-box">
                    <div className="sprite">
                        <img src={`https://img.pokemondb.net/sprites/sun-moon/icon/${species}.png`} alt={`sprite of ${species}`} />
                    </div>
                    <div className="name"> {upperSpecies} </div>
                    <div>Dex #: {id}</div>
                </div>
            </div>
        );
    }
}