import React, {Component} from 'react';
import '../sass-css/FoundMove.scss';
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

export default class FoundMove extends Component {
    constructor(props){
        super(props)
        this.state = {
            moveMon: []
        }
    }
    
    prettify(move){
        return move.split('-').map(function capitalize(part) {
            return part.charAt(0).toUpperCase() + part.slice(1);
        }).join(' ');
    }

    componentDidMount(){
        this.setState({
            loading : true
          });
    }

    render(){
        const {move} = this.props;
        let moveName = move.name;
        let category;
        if(move.damage_class.name === 'physical'){
            category = 'https://www.serebii.net/attackdex-dp/type/physical.png'
        } else if(move.damage_class.name === 'special'){
            category = 'https://www.serebii.net/attackdex-dp/type/special.png'
        } else if(move.damage_class.name === 'status'){
            category = 'https://www.serebii.net/attackdex-dp/type/other.png'
        }

        let url;
        let primary;
        let secondary;
        if(move.type.name === 'normal'){
            url = `${normal}`;
            primary = '#ffffe6';
            secondary = '#5c5c3d';
        } else if(move.type.name === 'fire'){
            url = `${fire}`;
            primary = '#ffc299';
            secondary = '#cc5200';
        } else if(move.type.name === 'fighting'){
            url = `${fighting}`;
            primary = '#ffdab3';
            secondary = '#990000';
        } else if(move.type.name === 'water'){
            url = `${water}`;
            primary = '#86d3fb';
            secondary = '#003b72';
        } else if(move.type.name === 'flying'){
            url = `${flying}`;
            primary = '#e6ffff';
            secondary = '#86d3fb';
        } else if(move.type.name === 'grass'){
            url = `${grass}`;
            primary = '#84e184';
            secondary = '#28a428';
        } else if(move.type.name === 'poison'){
            url = `${poison}`;
            primary = '#ecc6ec';
            secondary = '#732673';
        } else if(move.type.name === 'electric'){
            url = `${electric}`;
            primary = '#ffff33';
            secondary = '#cccc00';
        } else if(move.type.name === 'ground'){
            url = `${ground}`;
            primary = '#e6ccb3';
            secondary = '#b38600';
        } else if(move.type.name === 'psychic'){
            url = `${psychic}`;
            primary = '#ff80df';
            secondary = '#800080';
        } else if(move.type.name === 'rock'){
            url = `${rock}`;
            primary = '#dfbf9f';
            secondary = '#6a5048';
        } else if(move.type.name === 'ice'){
            url = `${ice}`;
            primary = '#e6ffff';
            secondary = '#00cccc';
        } else if(move.type.name === 'bug'){
            url = `${bug}`;
            primary = '#dfff80';
            secondary = '#808000';
        } else if(move.type.name === 'dragon'){
            url = `${dragon}`;
            primary = '#ffe6e6';
            secondary = '#9933ff';
        } else if(move.type.name === 'ghost'){
            url = `${ghost}`;
            primary = '#ccaad5';
            secondary = '#4d374b';
        } else if(move.type.name === 'dark'){
            url = `${dark}`;
            primary = '#bdaea8';
            secondary = '#28283e';
        } else if(move.type.name === 'steel'){
            url = `${steel}`;
            primary = '#d9d9d9';
            secondary = '#404040';
        } else if(move.type.name === 'fairy'){
            url = `${fairy}`;
            primary = '#ffcce6';
            secondary = '#cc0066';
        }
        let fixed;
        if(move.effect_entries[0].effect.includes('$effect_chance')){
            fixed = move.effect_entries[0].effect.replace('$effect_chance', move.effect_chance)
        } else {
            fixed = move.effect_entries[0].effect
        }

        return(
            <div className='move-base-display' style={{backgroundColor: secondary}} >
                <div className='move-display' style={{backgroundColor: primary}} >
                    <span className='move-images'>
                        <img className='type-img' src={url} alt={`sprite of ${move.type.name}`} />
                        <img className='damage-img' src={category} alt={`sprite of ${move.damage_class.name}`} />
                    </span>
                    <div className='name'>
                        <h1>{this.prettify(moveName)}</h1>
                    </div>
                            
                    <div className='power-pp-accuracy'>
                        <div className='power-box'>
                            <h2>Power</h2>
                            <span className='power'>
                                <div>{move.power}</div>
                            </span>
                        </div>

                        <div className='pp-box'>
                            <h2>PP</h2>
                            <span className='pp'>
                                <div>{move.pp}</div>
                            </span>
                        </div>

                        <div className='accuracy-box'>
                            <h2>Accuracy</h2>
                            <span className='accuracy'>
                                <div>{move.accuracy}</div>
                            </span>
                        </div>
                    </div>

                    <span className='text-row'>
                        <div className='effect'>
                            <p>
                                {fixed}
                            </p>
                        </div>
                    </span>

                </div>
            </div>
        )
    }
}