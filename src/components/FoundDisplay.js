import React, {Component} from 'react';
import StatsChart from './Chart';
import '../sass-css/FoundDisplay.scss';
// import store from '../psyducks/store';
// import {SEND_ID} from '../psyducks/reducer';

export default class FoundDisplay extends Component {
    // constructor(props){
    //     super(props)
    //     const reduxState = store.getState();
    //     this.state = {
    //         id: reduxState.id
    //     }
    // }

    // componentDidMount(){
    //     store.subscribe(() => {
    //         const reduxState = store.getState();
    //         this.setState({
    //             id: reduxState.id
    //         })
    //     })
    // }

    // sendID(){
    //     store.dispatch({
    //         type: SEND_ID,
    //         payload: this.props.pokemon.id
    //     });
    //     console.log(this.props.pokemon.id)
    // }

    render(){
        const {pokemon} = this.props;
        let species = pokemon.name;
//---------------------------------------------------------------------------------------------------------------------------------------------------
// This changes the names from pokeapi into ones readable by the pokemon db to get the official art for the found display.
        let forPMDB = pokemon.name;
        if(forPMDB === 'minior-red-meteor'){
            forPMDB = 'minior-meteor'
        } else if(forPMDB === 'mimikyu-disguised'){
            forPMDB = 'mimikyu'
        };
//---------------------------------------------------------------------------------------------------------------------------------------------------
// This fixes the lowercase names and the ones with dashes in them purely for looks.
        let upperSpecies = species.charAt(0).toUpperCase() + species.substring(1);
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
                url1 = 'https://cdn.bulbagarden.net/upload/3/39/NormalIC_Big.png';
                secondary = '#5c5c3d';
            } else if(pokemon.types[0].type.name === 'fire'){
                url1 = 'https://cdn.bulbagarden.net/upload/2/26/FireIC_Big.png';
                secondary = '#cc5200';
            } else if(pokemon.types[0].type.name === 'fighting'){
                url1 = 'https://cdn.bulbagarden.net/upload/6/67/FightingIC_Big.png';
                secondary = '#990000';
            } else if(pokemon.types[0].type.name === 'water'){
                url1 = 'https://cdn.bulbagarden.net/upload/5/56/WaterIC_Big.png';
                secondary = '#003b72';
            } else if(pokemon.types[0].type.name === 'flying'){
                url1 = 'https://cdn.bulbagarden.net/upload/c/cb/FlyingIC_Big.png';
                secondary = '#86d3fb';
            } else if(pokemon.types[0].type.name === 'grass'){
                url1 = 'https://cdn.bulbagarden.net/upload/7/74/GrassIC_Big.png';
                secondary = '#28a428';
            } else if(pokemon.types[0].type.name === 'poison'){
                url1 = 'https://cdn.bulbagarden.net/upload/3/3d/PoisonIC_Big.png';
                secondary = '#732673';
            } else if(pokemon.types[0].type.name === 'electric'){
                url1 = 'https://cdn.bulbagarden.net/upload/4/4a/ElectricIC_Big.png';
                secondary = '#cccc00';
            } else if(pokemon.types[0].type.name === 'ground'){
                url1 = 'https://cdn.bulbagarden.net/upload/8/8f/GroundIC_Big.png';
                secondary = '#b38600';
            } else if(pokemon.types[0].type.name === 'psychic'){
                url1 = 'https://cdn.bulbagarden.net/upload/6/60/PsychicIC_Big.png';
                secondary = '#800080';
            } else if(pokemon.types[0].type.name === 'rock'){
                url1 = 'https://cdn.bulbagarden.net/upload/c/ce/RockIC_Big.png';
                secondary = '#dfbf9f';
            } else if(pokemon.types[0].type.name === 'ice'){
                url1 = 'https://cdn.bulbagarden.net/upload/6/6f/IceIC_Big.png';
                secondary = '#00cccc';
            } else if(pokemon.types[0].type.name === 'bug'){
                url1 = 'https://cdn.bulbagarden.net/upload/c/c8/BugIC_Big.png';
                secondary = '#808000';
            } else if(pokemon.types[0].type.name === 'dragon'){
                url1 = 'https://cdn.bulbagarden.net/upload/4/48/DragonIC_Big.png';
                secondary = '#9933ff';
            } else if(pokemon.types[0].type.name === 'ghost'){
                url1 = 'https://cdn.bulbagarden.net/upload/7/73/GhostIC_Big.png';
                secondary = '#4d374b';
            } else if(pokemon.types[0].type.name === 'dark'){
                url1 = 'https://cdn.bulbagarden.net/upload/5/56/DarkIC_Big.png';
                secondary = '#28283e';
            } else if(pokemon.types[0].type.name === 'steel'){
                url1 = 'https://cdn.bulbagarden.net/upload/d/d4/SteelIC_Big.png';
                secondary = '#404040';
            } else if(pokemon.types[0].type.name === 'fairy'){
                url1 = 'https://cdn.bulbagarden.net/upload/7/73/FairyIC_Big.png';
                secondary = '#cc0066';
            }
// If the pokemon has 2 types this will render the first type. ------------------------------------------------------------------------------------
            if(pokemon.types[1].type.name === 'normal'){
                url2 = 'https://cdn.bulbagarden.net/upload/3/39/NormalIC_Big.png';
                primary = '#ffffe6';
            } else if(pokemon.types[1].type.name === 'fire'){
                url2 = 'https://cdn.bulbagarden.net/upload/2/26/FireIC_Big.png';
                primary = '#ffc299';
            } else if(pokemon.types[1].type.name === 'fighting'){
                url2 = 'https://cdn.bulbagarden.net/upload/6/67/FightingIC_Big.png';
                primary = '#ffdab3';
            } else if(pokemon.types[1].type.name === 'water'){
                url2 = 'https://cdn.bulbagarden.net/upload/5/56/WaterIC_Big.png';
                primary = '#86d3fb';
            } else if(pokemon.types[1].type.name === 'flying'){
                url2 = 'https://cdn.bulbagarden.net/upload/c/cb/FlyingIC_Big.png';
                primary = '#e6ffff';
            } else if(pokemon.types[1].type.name === 'grass'){
                url2 = 'https://cdn.bulbagarden.net/upload/7/74/GrassIC_Big.png';
                primary = '#84e184';
            } else if(pokemon.types[1].type.name === 'poison'){
                url2 = 'https://cdn.bulbagarden.net/upload/3/3d/PoisonIC_Big.png';
                primary = '#ecc6ec';
            } else if(pokemon.types[1].type.name === 'electric'){
                url2 = 'https://cdn.bulbagarden.net/upload/4/4a/ElectricIC_Big.png';
                primary = '#ffff33';
            } else if(pokemon.types[1].type.name === 'ground'){
                url2 = 'https://cdn.bulbagarden.net/upload/8/8f/GroundIC_Big.png';
                primary = '#e6ccb3';
            } else if(pokemon.types[1].type.name === 'psychic'){
                url2 = 'https://cdn.bulbagarden.net/upload/6/60/PsychicIC_Big.png';
                primary = '#ff80df';
            } else if(pokemon.types[1].type.name === 'rock'){
                url2 = 'https://cdn.bulbagarden.net/upload/c/ce/RockIC_Big.png';
                primary = '#dfbf9f';
            } else if(pokemon.types[1].type.name === 'ice'){
                url2 = 'https://cdn.bulbagarden.net/upload/6/6f/IceIC_Big.png';
                primary = '#e6ffff';
            } else if(pokemon.types[1].type.name === 'bug'){
                url2 = 'https://cdn.bulbagarden.net/upload/c/c8/BugIC_Big.png';
                primary = '#dfff80';
            } else if(pokemon.types[1].type.name === 'dragon'){
                url2 = 'https://cdn.bulbagarden.net/upload/4/48/DragonIC_Big.png';
                primary = '#ffe6e6';
            } else if(pokemon.types[1].type.name === 'ghost'){
                url2 = 'https://cdn.bulbagarden.net/upload/7/73/GhostIC_Big.png';
                primary = '#ccaad5';
            } else if(pokemon.types[1].type.name === 'dark'){
                url2 = 'https://cdn.bulbagarden.net/upload/5/56/DarkIC_Big.png';
                primary = '#bdaea8';
            } else if(pokemon.types[1].type.name === 'steel'){
                url2 = 'https://cdn.bulbagarden.net/upload/d/d4/SteelIC_Big.png';
                primary = '#d9d9d9';
            } else if(pokemon.types[1].type.name === 'fairy'){
                url2 = 'https://cdn.bulbagarden.net/upload/7/73/FairyIC_Big.png';
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
                url = 'https://cdn.bulbagarden.net/upload/3/39/NormalIC_Big.png';
                primary = '#ffffe6';
                secondary = '#5c5c3d';
            } else if(pokemon.types[0].type.name === 'fire'){
                url = 'https://cdn.bulbagarden.net/upload/2/26/FireIC_Big.png';
                primary = '#ffc299';
                secondary = '#cc5200';
            } else if(pokemon.types[0].type.name === 'fighting'){
                url = 'https://cdn.bulbagarden.net/upload/6/67/FightingIC_Big.png';
                primary = '#ffdab3';
                secondary = '#990000';
            } else if(pokemon.types[0].type.name === 'water'){
                url = 'https://cdn.bulbagarden.net/upload/5/56/WaterIC_Big.png';
                primary = '#86d3fb';
                secondary = '#003b72';
            } else if(pokemon.types[0].type.name === 'flying'){
                url = 'https://cdn.bulbagarden.net/upload/c/cb/FlyingIC_Big.png';
                primary = '#e6ffff';
                secondary = '#86d3fb';
            } else if(pokemon.types[0].type.name === 'grass'){
                url = 'https://cdn.bulbagarden.net/upload/7/74/GrassIC_Big.png';
                primary = '#84e184';
                secondary = '#28a428';
            } else if(pokemon.types[0].type.name === 'poison'){
                url = 'https://cdn.bulbagarden.net/upload/3/3d/PoisonIC_Big.png';
                primary = '#ecc6ec';
                secondary = '#732673';
            } else if(pokemon.types[0].type.name === 'electric'){
                url = 'https://cdn.bulbagarden.net/upload/4/4a/ElectricIC_Big.png';
                primary = '#ffff33';
                secondary = '#cccc00';
            } else if(pokemon.types[0].type.name === 'ground'){
                url = 'https://cdn.bulbagarden.net/upload/8/8f/GroundIC_Big.png';
                primary = '#e6ccb3';
                secondary = '#b38600';
            } else if(pokemon.types[0].type.name === 'psychic'){
                url = 'https://cdn.bulbagarden.net/upload/6/60/PsychicIC_Big.png';
                primary = '#ff80df';
                secondary = '#800080';
            } else if(pokemon.types[0].type.name === 'rock'){
                url = 'https://cdn.bulbagarden.net/upload/c/ce/RockIC_Big.png';
                primary = '#dfbf9f';
                secondary = '#6a5048';
            } else if(pokemon.types[0].type.name === 'ice'){
                url = 'https://cdn.bulbagarden.net/upload/6/6f/IceIC_Big.png';
                primary = '#e6ffff';
                secondary = '#00cccc';
            } else if(pokemon.types[0].type.name === 'bug'){
                url = 'https://cdn.bulbagarden.net/upload/c/c8/BugIC_Big.png';
                primary = '#dfff80';
                secondary = '#808000';
            } else if(pokemon.types[0].type.name === 'dragon'){
                url = 'https://cdn.bulbagarden.net/upload/4/48/DragonIC_Big.png';
                primary = '#ffe6e6';
                secondary = '#9933ff';
            } else if(pokemon.types[0].type.name === 'ghost'){
                url = 'https://cdn.bulbagarden.net/upload/7/73/GhostIC_Big.png';
                primary = '#ccaad5';
                secondary = '#4d374b';
            } else if(pokemon.types[0].type.name === 'dark'){
                url = 'https://cdn.bulbagarden.net/upload/5/56/DarkIC_Big.png';
                primary = '#bdaea8';
                secondary = '#28283e';
            } else if(pokemon.types[0].type.name === 'steel'){
                url = 'https://cdn.bulbagarden.net/upload/d/d4/SteelIC_Big.png';
                primary = '#d9d9d9';
                secondary = '#404040';
            } else if(pokemon.types[0].type.name === 'fairy'){
                url = 'https://cdn.bulbagarden.net/upload/7/73/FairyIC_Big.png';
                primary = '#ffcce6';
                secondary = '#cc0066';
            }
            types = <div className='type'>
                        <img className='type-img' src={url} alt={`sprite of ${pokemon.types[0].type.name} type logo`}/>
                    </div>
        }
//---------------------------------------------------------------------------------------------------------------------------------------------------
        return(
            <div className='base-display' style={{backgroundColor: secondary}} >
                <div className='display' style={{backgroundColor: primary}} >
                    <img className='mon-img' src={`https://img.pokemondb.net/artwork/${forPMDB}.jpg`} alt={`sprite of ${pokemon.name}`} />

                    <div className='toprow'>
                        <h1>{upperSpecies}</h1>
                        <div className='dex-num'>Dex #: {pokemon.id}</div>
                    </div>

                    <div className='type'>
                        {types}
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
    
                    <StatsChart 
                        speed={pokemon.stats[0].base_stat} 
                        sped={pokemon.stats[1].base_stat} 
                        spea={pokemon.stats[2].base_stat} 
                        def={pokemon.stats[3].base_stat} 
                        att={pokemon.stats[4].base_stat} 
                        hp={pokemon.stats[5].base_stat} 
                    />
                    
                </div>
            </div>
        )
    }
}