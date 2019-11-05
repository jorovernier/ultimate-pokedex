import React, {Component} from 'react';
import '../sass-css/Pokemon.scss';

export default class Pokemon extends Component{
    render(){
        const {pokemon} = this.props;
        let species = pokemon.name;
        let upperSpecies = species.charAt(0).toUpperCase() + species.substring(1);
//---------------------------------------------------------------------------------------------------------------------------------------------------
// This changes the names from pokeapi into ones readable by the pokemon db to get the sprites for the pokedex display.
        if(species === 'minior-red-meteor'){
            species = 'minior-meteor'
        } else if(species === 'mimikyu-disguised'){
            species = 'mimikyu'
        };
//---------------------------------------------------------------------------------------------------------------------------------------------------
// This fixes the lowercase names and the ones with dashes in them purely for looks.
        if(upperSpecies === 'Nidoran-f'){
            upperSpecies = 'Nidoran F'
        } else if(upperSpecies === 'Nidoran-m'){
            upperSpecies = 'Nidoran M'
        } else if(upperSpecies === 'Deoxys-normal'){
            upperSpecies = 'Deoxys'
        } else if(upperSpecies === 'Wormadam-plant'){
            upperSpecies = 'Wormadam'
        } else if(upperSpecies === 'Mime-jr'){
            upperSpecies = 'Mime Jr.'
        } else if(upperSpecies === 'Porygon-z'){
            upperSpecies = 'Porygon Z'
        } else if(upperSpecies === 'Giratina-altered'){
            upperSpecies = 'Giratina'
        } else if(upperSpecies === 'Shaymin-land'){
            upperSpecies = 'Shaymin'
        } else if(upperSpecies === 'Basculin-red-striped'){
            upperSpecies = 'Basculin'
        } else if(upperSpecies === 'Darmanitan-standard'){
            upperSpecies = 'Darmanitan'
        } else if(upperSpecies === 'Tornadus-incarnate'){
            upperSpecies = 'Tornadus'
        } else if(upperSpecies === 'Thundurus-incarnate'){
            upperSpecies = 'Thundurus'
        } else if(upperSpecies === 'Landorus-incarnate'){
            upperSpecies = 'Landorus'
        } else if(upperSpecies === 'Keldeo-ordinary'){
            upperSpecies = 'Keldeo'
        } else if(upperSpecies === 'Meloetta-aria'){
            upperSpecies = 'Meloetta'
        } else if(upperSpecies === 'Meowstic-male'){
            upperSpecies = 'Meowstic'
        } else if(upperSpecies === 'Aegislash-shield'){
            upperSpecies = 'Aegislash'
        } else if(upperSpecies === 'Pumpkaboo-average'){
            upperSpecies = 'Pumpkaboo'
        } else if(upperSpecies === 'Gourgeist-average'){
            upperSpecies = 'Gourgeist'
        } else if(upperSpecies === 'Oricorio-baile'){
            upperSpecies = 'Oricorio'
        } else if(upperSpecies === 'Lycanroc-midday'){
            upperSpecies = 'Lycanroc'
        } else if(upperSpecies === 'Wishiwashi-solo'){
            upperSpecies = 'Wishiwashi'
        } else if(upperSpecies === 'Type-null'){
            upperSpecies = 'Type Null'
        } else if(upperSpecies === 'Minior-red-meteor'){
            upperSpecies = 'Minior'
        } else if(upperSpecies === 'Mimikyu-disguised'){
            upperSpecies = 'Mimikyu'
        } else if(upperSpecies === 'Tapu-koko'){
            upperSpecies = 'Tapu Koko'
        } else if(upperSpecies === 'Tapu-lele'){
            upperSpecies = 'Tapu Lele'
        } else if(upperSpecies === 'Tapu-bulu'){
            upperSpecies = 'Tapu Bulu'
        } else if(upperSpecies === 'Tapu-fini'){
            upperSpecies = 'Tapu Fini'
        }
        return (
            <div className='pokemon-box'>
                <div className='pokemon'>
                    <button className='sprite' onClick={() => {this.props.action(pokemon.name)}}>
                        <img src={`https://img.pokemondb.net/sprites/sun-moon/icon/${species}.png`} alt={`sprite of ${species}`} />
                    </button>
                    <div className='name'> {upperSpecies} </div>
                </div>
            </div>
        );
    }
}