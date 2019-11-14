import React, {Component} from 'react';
import '../sass-css/FoundItem.scss';

export default class FoundItem extends Component {
    prettify(name){
        return name.split('-').map(function capitalize(part) {
            return part.charAt(0).toUpperCase() + part.slice(1);
        }).join(' ');
    }
    render(){
        const {item} = this.props;
        let name = item.name;
        let bought;
        let held;
        if(item.cost === 0){
            bought = <div className='dex-num'>Cannot be bought.</div>
        } else {
            bought = <div className='dex-num'><img src={'https://cdn.bulbagarden.net/upload/8/8c/Pok%C3%A9monDollar.png'} alt='pokedollar sprite'/>{item.cost}</div>
        }
        let mappedHoldMons = item.held_by_pokemon.map(item => <div key={item.pokemon.name}>{item.pokemon.name}</div>)
        if(item.held_by_pokemon.length === 0){
            held = <div>Isn't held.</div>
        } else {
            held = <div>{mappedHoldMons}</div>
        }
        return(
            <div className='base-display'>
                <div className='display' style={{backgroundColor: 'rgb(32, 96, 146)'}}>
                    <div className='col1'>

                        <div className='top'>
                            <img className='mon-img' src={item.sprites.default} alt={`sprite of ${name}`} />
                            <div className='name-num'>
                                <h1>{this.prettify(name)}</h1>
                                {bought}
                            </div>
                        </div>

                        <div className='hold-it'>
                            {/* <div className='type'>
                                {types}
                            </div> */}

                            <div className='abilities'>
                                {item.effect_entries[0].effect}
                            </div>
                            
                            {/* <div className='height-weight'>
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
                            </div> */}
                        </div>

                    </div>

                    <div className='col2'>
                        <div className='encounters'>
                            <div className='encounter-holder'>{held}</div>
                        </div>
                    </div>
                    
                </div>
            </div>
        )
    }
}