import React, {Component} from 'react';
import '../sass-css/Pokemon.scss';

export default class Pokemon extends Component {
    prettify(name){
        return name.split('-').map(function capitalize(part) {
            return part.charAt(0).toUpperCase() + part.slice(1);
        }).join(' ');
    }
    render(){
        const {pokemon} = this.props;
        let species = pokemon.name;
        if(species.endsWith('-alola')){
            species = 'Alolan ' + species.charAt(0).toUpperCase() + species.slice(1).replace('alola', '');
        } else if(species.endsWith('-mega')){
            species = 'Mega ' + species.charAt(0).toUpperCase() + species.slice(1).replace('mega', '');
        }
//---------------------------------------------------------------------------------------------------------------------------------------------------
// This changes the names from pokeapi into ones readable by the pokemon db to get the sprites for the pokedex display.
        let forPMDB = pokemon.name;
        if(forPMDB === 'minior-red-meteor'){
            forPMDB = 'minior-meteor'
        } else if(forPMDB === 'mimikyu-disguised'){
            forPMDB = 'mimikyu'
        } else if(forPMDB === 'raticate-totem-alola'){
            forPMDB = 'raticate-alolan'
        } else if(forPMDB === 'greninja-battle-bond'){
            forPMDB = 'greninja'
        } else if(forPMDB.startsWith('pikachu')){
            forPMDB = 'pikachu'
        } else if(forPMDB.startsWith('castform')){
            forPMDB = 'castform'
        } else if(forPMDB.endsWith('-alola')){
            forPMDB = forPMDB.replace('-alola', '-alolan')
        } else if(forPMDB.split('-').includes('totem')){
            forPMDB = forPMDB.replace('-totem', '')
        };
//---------------------------------------------------------------------------------------------------------------------------------------------------
        return (
            <div className='pokemon-box'>
                <div className='pokemon'>
                    <button className='sprite' onClick={() => {this.props.action(pokemon.name)}}>
                        <img src={forPMDB === 'floette-eternal' ? 'https://img.pokemondb.net/sprites/sun-moon/icon/floette.png' : `https://img.pokemondb.net/sprites/sword-shield/icon/${forPMDB}.png`} alt={`sprite of ${forPMDB}`} />
                    </button>
                    <div className='name'> {this.prettify(species)} </div>
                </div>
            </div>
        );
    }
}