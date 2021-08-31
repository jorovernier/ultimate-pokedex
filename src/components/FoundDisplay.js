import React, {Component} from 'react';
import StatsChart from './Chart';
import '../sass-css/FoundDisplay.scss';
import normal from '../images/type-icons/normal.png';
import fire from '../images/type-icons/fire.png';
import fighting from '../images/type-icons/fighting.png';
import water from '../images/type-icons/water.png';
import flying from '../images/type-icons/flying.png';
import grass from '../images/type-icons/grass.png';
import poison from '../images/type-icons/poison.png';
import electric from '../images/type-icons/electric.png';
import ground from '../images/type-icons/ground.png';
import psychic from '../images/type-icons/psychic.png';
import rock from '../images/type-icons/rock.png';
import ice from '../images/type-icons/ice.png';
import bug from '../images/type-icons/bug.png';
import dragon from '../images/type-icons/dragon.png';
import ghost from '../images/type-icons/ghost.png';
import dark from '../images/type-icons/dark.png';
import steel from '../images/type-icons/steel.png';
import fairy from '../images/type-icons/fairy.png';

export default class FoundDisplay extends Component {
    prettify(name){
        return name.split('-').map(function capitalize(part) {
            return part.charAt(0).toUpperCase() + part.slice(1);
        }).join(' ');
    }
    render(){
        let mappedEncounters = this.props.encounters.map(
            (encounter) => <div className='encounter' key={encounter.location_area.name} >{this.prettify(encounter.location_area.name)}</div>);
        let encounterDisplay;
        if(this.props.encounters.length === 0){
            encounterDisplay = <div className='no-encounter'>This pokemon cannot be found in the wild.</div>;
        } else {
            encounterDisplay = mappedEncounters;
        }

        const {pokemon} = this.props;
        let species = pokemon.name;
        if(species.endsWith('-alola')){
            species = 'Alolan ' + species.charAt(0).toUpperCase() + species.slice(1).replace('alola', '');
        } else if(species.endsWith('-mega')){
            species = 'Mega ' + species.charAt(0).toUpperCase() + species.slice(1).replace('mega', '');
        }

        // let switcher = false;
        // if(species.includes('deoxys')){
        //     switcher = true;
        // }

//---------------------------------------------------------------------------------------------------------------------------------------------------
// This changes the names from pokeapi into ones readable by the pokemon db to get the official art for the found display.
        let forPMDB = pokemon.name;
        if(forPMDB === 'minior-red-meteor'){
            forPMDB = 'minior-meteor'
        } else if(forPMDB === 'mimikyu-disguised'){
            forPMDB = 'mimikyu'
        } else if(forPMDB === 'raticate-totem-alola'){
            forPMDB = 'raticate-alolan'
        } else if(forPMDB === 'greninja-battle-bond'){
            forPMDB = 'greninja'
        } else if(forPMDB.endsWith('-alola')){
            forPMDB = forPMDB.replace('-alola', '-alolan')
        } else if(forPMDB.includes('-totem')){
            forPMDB = forPMDB.replace('-totem', '')
        };
//---------------------------------------------------------------------------------------------------------------------------------------------------
// These are being accessed by the wall of if statements.
        let url; // Used as url if the pokemon has only one type.
        let url1; // Used as url for second type. It is first because the pokeapi has the econd type first in their data.
        let url2; // Used as url for first type.
        let types; // Used for what will be rendered conditionally based on amount of types.
        let primary; // Used for conditional color scheme based on type.
        let secondary; // Used for conditional color scheme based on type.
// If the pokemon has 2 types this will render the second type. -------------------------------------------------------------------------------------
        if(pokemon.types.length > 1){
            if(pokemon.types[0].type.name === 'normal'){
                url1 = `${normal}`;
                secondary = '#5c5c3d';
            } else if(pokemon.types[0].type.name === 'fire'){
                url1 = `${fire}`;
                secondary = '#cc5200';
            } else if(pokemon.types[0].type.name === 'fighting'){
                url1 = `${fighting}`;
                secondary = '#990000';
            } else if(pokemon.types[0].type.name === 'water'){
                url1 = `${water}`;
                secondary = '#003b72';
            } else if(pokemon.types[0].type.name === 'flying'){
                url1 = `${flying}`;
                secondary = '#86d3fb';
            } else if(pokemon.types[0].type.name === 'grass'){
                url1 = `${grass}`;
                secondary = '#28a428';
            } else if(pokemon.types[0].type.name === 'poison'){
                url1 = `${poison}`;
                secondary = '#732673';
            } else if(pokemon.types[0].type.name === 'electric'){
                url1 = `${electric}`;
                secondary = '#cccc00';
            } else if(pokemon.types[0].type.name === 'ground'){
                url1 = `${ground}`;
                secondary = '#b38600';
            } else if(pokemon.types[0].type.name === 'psychic'){
                url1 = `${psychic}`;
                secondary = '#800080';
            } else if(pokemon.types[0].type.name === 'rock'){
                url1 = `${rock}`;
                secondary = '#dfbf9f';
            } else if(pokemon.types[0].type.name === 'ice'){
                url1 = `${ice}`;
                secondary = '#00cccc';
            } else if(pokemon.types[0].type.name === 'bug'){
                url1 = `${bug}`;
                secondary = '#808000';
            } else if(pokemon.types[0].type.name === 'dragon'){
                url1 = `${dragon}`;
                secondary = '#9933ff';
            } else if(pokemon.types[0].type.name === 'ghost'){
                url1 = `${ghost}`;
                secondary = '#4d374b';
            } else if(pokemon.types[0].type.name === 'dark'){
                url1 = `${dark}`;
                secondary = '#28283e';
            } else if(pokemon.types[0].type.name === 'steel'){
                url1 = `${steel}`;
                secondary = '#404040';
            } else if(pokemon.types[0].type.name === 'fairy'){
                url1 = `${fairy}`;
                secondary = '#cc0066';
            }
// If the pokemon has 2 types this will render the first type. ------------------------------------------------------------------------------------
            if(pokemon.types[1].type.name === 'normal'){
                url2 = `${normal}`;
                primary = '#ffffe6';
            } else if(pokemon.types[1].type.name === 'fire'){
                url2 = `${fire}`;
                primary = '#ffc299';
            } else if(pokemon.types[1].type.name === 'fighting'){
                url2 = `${fighting}`;
                primary = '#ffdab3';
            } else if(pokemon.types[1].type.name === 'water'){
                url2 = `${water}`;
                primary = '#86d3fb';
            } else if(pokemon.types[1].type.name === 'flying'){
                url2 = `${flying}`;
                primary = '#e6ffff';
            } else if(pokemon.types[1].type.name === 'grass'){
                url2 = `${grass}`;
                primary = '#84e184';
            } else if(pokemon.types[1].type.name === 'poison'){
                url2 = `${poison}`;
                primary = '#ecc6ec';
            } else if(pokemon.types[1].type.name === 'electric'){
                url2 = `${electric}`;
                primary = '#ffff33';
            } else if(pokemon.types[1].type.name === 'ground'){
                url2 = `${ground}`;
                primary = '#e6ccb3';
            } else if(pokemon.types[1].type.name === 'psychic'){
                url2 = `${psychic}`;
                primary = '#ff80df';
            } else if(pokemon.types[1].type.name === 'rock'){
                url2 = `${rock}`;
                primary = '#dfbf9f';
            } else if(pokemon.types[1].type.name === 'ice'){
                url2 = `${ice}`;
                primary = '#e6ffff';
            } else if(pokemon.types[1].type.name === 'bug'){
                url2 = `${bug}`;
                primary = '#dfff80';
            } else if(pokemon.types[1].type.name === 'dragon'){
                url2 = `${dragon}`;
                primary = '#ffe6e6';
            } else if(pokemon.types[1].type.name === 'ghost'){
                url2 = `${ghost}`;
                primary = '#ccaad5';
            } else if(pokemon.types[1].type.name === 'dark'){
                url2 = `${dark}`;
                primary = '#bdaea8';
            } else if(pokemon.types[1].type.name === 'steel'){
                url2 = `${steel}`;
                primary = '#d9d9d9';
            } else if(pokemon.types[1].type.name === 'fairy'){
                url2 = `${fairy}`;
                primary = '#ffcce6';
            }
            types =  <div className='type'>
                        <img className='type-img' src={url2} alt={`sprite of ${pokemon.types[1].type.name} type logo`}/>
                        <img className='type-img' src={url1} alt={`sprite of ${pokemon.types[0].type.name} type logo`}/>
                    </div>
        } 
        // If the pokemon has 1 type this will render that type. ------------------------------------------------------------------------------------------
        else {
            if(pokemon.types[0].type.name === 'normal'){
                url = `${normal}`;
                primary = '#ffffe6';
                secondary = '#5c5c3d';
            } else if(pokemon.types[0].type.name === 'fire'){
                url = `${fire}`;
                primary = '#ffc299';
                secondary = '#cc5200';
            } else if(pokemon.types[0].type.name === 'fighting'){
                url = `${fighting}`;
                primary = '#ffdab3';
                secondary = '#990000';
            } else if(pokemon.types[0].type.name === 'water'){
                url = `${water}`;
                primary = '#86d3fb';
                secondary = '#003b72';
            } else if(pokemon.types[0].type.name === 'flying'){
                url = `${flying}`;
                primary = '#e6ffff';
                secondary = '#86d3fb';
            } else if(pokemon.types[0].type.name === 'grass'){
                url = `${grass}`;
                primary = '#84e184';
                secondary = '#28a428';
            } else if(pokemon.types[0].type.name === 'poison'){
                url = `${poison}`;
                primary = '#ecc6ec';
                secondary = '#732673';
            } else if(pokemon.types[0].type.name === 'electric'){
                url = `${electric}`;
                primary = '#ffff33';
                secondary = '#cccc00';
            } else if(pokemon.types[0].type.name === 'ground'){
                url = `${ground}`;
                primary = '#e6ccb3';
                secondary = '#b38600';
            } else if(pokemon.types[0].type.name === 'psychic'){
                url = `${psychic}`;
                primary = '#ff80df';
                secondary = '#800080';
            } else if(pokemon.types[0].type.name === 'rock'){
                url = `${rock}`;
                primary = '#dfbf9f';
                secondary = '#6a5048';
            } else if(pokemon.types[0].type.name === 'ice'){
                url = `${ice}`;
                primary = '#e6ffff';
                secondary = '#00cccc';
            } else if(pokemon.types[0].type.name === 'bug'){
                url = `${bug}`;
                primary = '#dfff80';
                secondary = '#808000';
            } else if(pokemon.types[0].type.name === 'dragon'){
                url = `${dragon}`;
                primary = '#ffe6e6';
                secondary = '#9933ff';
            } else if(pokemon.types[0].type.name === 'ghost'){
                url = `${ghost}`;
                primary = '#ccaad5';
                secondary = '#4d374b';
            } else if(pokemon.types[0].type.name === 'dark'){
                url = `${dark}`;
                primary = '#bdaea8';
                secondary = '#28283e';
            } else if(pokemon.types[0].type.name === 'steel'){
                url = `${steel}`;
                primary = '#d9d9d9';
                secondary = '#404040';
            } else if(pokemon.types[0].type.name === 'fairy'){
                url = `${fairy}`;
                primary = '#ffcce6';
                secondary = '#cc0066';
            }
            types = <div className='type'>
                        <img className='type-img' src={url} alt={`sprite of ${pokemon.types[0].type.name} type logo`}/>
                    </div>
        }
        let abilities;
        if(pokemon.abilities.length === 1){
            abilities = <span>
                            <h1>{this.prettify(pokemon.abilities[0].ability.name)}</h1>
                        </span>
        } else if(pokemon.abilities.length === 2){
            abilities = <span>
                            <h1>{this.prettify(pokemon.abilities[1].ability.name)}</h1>
                            <div>
                                <h2>Hidden Ability:</h2>
                                <h1>{this.prettify(pokemon.abilities[0].ability.name)}</h1>
                            </div>
                        </span>
        } else if(pokemon.abilities.length === 3){
            abilities = <span>
                            <h1>{this.prettify(pokemon.abilities[2].ability.name)}</h1>
                            <h1>{this.prettify(pokemon.abilities[1].ability.name)}</h1>
                            <div>
                                <h2>Hidden Ability:</h2>
                                <h1>{this.prettify(pokemon.abilities[0].ability.name)}</h1>
                            </div>
                        </span>
        }
        let src;
        if(forPMDB === 'floette-eternal'){
            src = 'https://cdn.bulbagarden.net/upload/2/29/AZ%27s_Floette.png'
        } else if(pokemon.name === 'castform-sunny'){
            src = 'https://img.pokemondb.net/artwork/vector/castform-sunny.png'
        } else if(pokemon.name === 'castform-snowy'){
            src = 'https://img.pokemondb.net/artwork/vector/castform-snowy.png'
        } else if(pokemon.name === 'castform-rainy'){
            src = 'https://img.pokemondb.net/artwork/vector/castform-rainy.png'
        } else if(pokemon.name === 'pikachu-cosplay'){
            src = 'https://cdn.bulbagarden.net/upload/2/28/Spr_6o_025_C.png'
        } else {
            src = `https://img.pokemondb.net/artwork/${forPMDB}.jpg`
        }

//---------------------------------------------------------------------------------------------------------------------------------------------------
        return(
            <div className='base-display' style={{backgroundColor: secondary}} >
                <div className='display' style={{backgroundColor: primary}} >
                    <div className='col1'>

                        <div className='top'>
                            <img className='mon-img' src={src} alt={`${pokemon.name}`} />
                            {/* {switcher && (<button>?</button>)} */}
                            <div className='name-num'>
                                <h1>{this.prettify(species)}</h1>
                                <div className='dex-num'>Dex #: {pokemon.id}</div>
                            </div>
                        </div>

                        <div className='hold-it'>
                            <div className='type'>
                                {types}
                            </div>

                            <div className='abilities'>
                                {abilities}
                            </div>
                            
                            <div className='height-weight'>
                                <div className='height-box'>
                                    <h2>Height</h2>
                                    <span className='height'>
                                        <div>{Math.ceil(pokemon.height/10 * 3.281)} ft</div>
                                        <div>{pokemon.height/10} m</div>
                                    </span>
                                </div>

                                <div className='weight-box'>
                                    <h2>Weight</h2>
                                    <span className='weight'>
                                        <div>{Math.floor(pokemon.weight * 2.205) /10} lbs</div>
                                        <div>{pokemon.weight/10} kg</div>
                                    </span>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className='col2'>
                        <StatsChart 
                            speed={pokemon.stats[0].base_stat} 
                            sped={pokemon.stats[1].base_stat} 
                            spea={pokemon.stats[2].base_stat} 
                            def={pokemon.stats[3].base_stat} 
                            att={pokemon.stats[4].base_stat} 
                            hp={pokemon.stats[5].base_stat} 
                        />
                        <div className='encounters'>
                            <div className='encounter-holder'>{encounterDisplay}</div>
                        </div>
                    </div>
                    
                </div>
            </div>
        )
    }
}