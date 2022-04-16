import React, {Component} from 'react';
import '../sass-css/FoundItem.scss';
import pokedollar from '../images/pokedollar.png';

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
            bought = <div className='cost'>Cannot be bought.</div>
        } else {
            bought = <div className='cost'><img src={pokedollar} alt='pokedollar sprite'/>{item.cost}</div>
        }
        let mappedHoldMons = item.held_by_pokemon.map(item => <div key={item.pokemon.name}>{this.prettify(item.pokemon.name)}</div>)
        if(item.held_by_pokemon.length === 0){
            held = <div className='no-hold'>Isn't held by any Pokemon.</div>
        } else {
            held = <div className='hold'>{mappedHoldMons}</div>
        }
        return(
            <div className='item-base-display' key={item.name}>
                <div className='item-display' style={{backgroundColor: 'rgb(32, 96, 146)'}}>
                    <img className='item-img' src={item.sprites.default} alt={`sprite of ${name}`} />
                    <div className='name-cost'>
                        <h1>{this.prettify(name)}</h1>
                        {bought}
                    </div>
                    <div className='effect'>
                        <div>
                            {item.effect_entries[0].effect}
                        </div>
                    </div>

                    <div className='hold-mon'>
                        <div className='hold-holder'>{held}</div>
                    </div>
                </div>
            </div>
        )
    }
}
