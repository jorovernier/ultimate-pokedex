import React, {Component} from 'react';
import '../sass-css/FoundMove.scss';

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
            url = 'https://cdn.bulbagarden.net/upload/3/39/NormalIC_Big.png';
            primary = '#ffffe6';
            secondary = '#5c5c3d';
        } else if(move.type.name === 'fire'){
            url = 'https://cdn.bulbagarden.net/upload/2/26/FireIC_Big.png';
            primary = '#ffc299';
            secondary = '#cc5200';
        } else if(move.type.name === 'fighting'){
            url = 'https://cdn.bulbagarden.net/upload/6/67/FightingIC_Big.png';
            primary = '#ffdab3';
            secondary = '#990000';
        } else if(move.type.name === 'water'){
            url = 'https://cdn.bulbagarden.net/upload/5/56/WaterIC_Big.png';
            primary = '#86d3fb';
            secondary = '#003b72';
        } else if(move.type.name === 'flying'){
            url = 'https://cdn.bulbagarden.net/upload/c/cb/FlyingIC_Big.png';
            primary = '#e6ffff';
            secondary = '#86d3fb';
        } else if(move.type.name === 'grass'){
            url = 'https://cdn.bulbagarden.net/upload/7/74/GrassIC_Big.png';
            primary = '#84e184';
            secondary = '#28a428';
        } else if(move.type.name === 'poison'){
            url = 'https://cdn.bulbagarden.net/upload/3/3d/PoisonIC_Big.png';
            primary = '#ecc6ec';
            secondary = '#732673';
        } else if(move.type.name === 'electric'){
            url = 'https://cdn.bulbagarden.net/upload/4/4a/ElectricIC_Big.png';
            primary = '#ffff33';
            secondary = '#cccc00';
        } else if(move.type.name === 'ground'){
            url = 'https://cdn.bulbagarden.net/upload/8/8f/GroundIC_Big.png';
            primary = '#e6ccb3';
            secondary = '#b38600';
        } else if(move.type.name === 'psychic'){
            url = 'https://cdn.bulbagarden.net/upload/6/60/PsychicIC_Big.png';
            primary = '#ff80df';
            secondary = '#800080';
        } else if(move.type.name === 'rock'){
            url = 'https://cdn.bulbagarden.net/upload/c/ce/RockIC_Big.png';
            primary = '#dfbf9f';
            secondary = '#6a5048';
        } else if(move.type.name === 'ice'){
            url = 'https://cdn.bulbagarden.net/upload/6/6f/IceIC_Big.png';
            primary = '#e6ffff';
            secondary = '#00cccc';
        } else if(move.type.name === 'bug'){
            url = 'https://cdn.bulbagarden.net/upload/c/c8/BugIC_Big.png';
            primary = '#dfff80';
            secondary = '#808000';
        } else if(move.type.name === 'dragon'){
            url = 'https://cdn.bulbagarden.net/upload/4/48/DragonIC_Big.png';
            primary = '#ffe6e6';
            secondary = '#9933ff';
        } else if(move.type.name === 'ghost'){
            url = 'https://cdn.bulbagarden.net/upload/7/73/GhostIC_Big.png';
            primary = '#ccaad5';
            secondary = '#4d374b';
        } else if(move.type.name === 'dark'){
            url = 'https://cdn.bulbagarden.net/upload/5/56/DarkIC_Big.png';
            primary = '#bdaea8';
            secondary = '#28283e';
        } else if(move.type.name === 'steel'){
            url = 'https://cdn.bulbagarden.net/upload/d/d4/SteelIC_Big.png';
            primary = '#d9d9d9';
            secondary = '#404040';
        } else if(move.type.name === 'fairy'){
            url = 'https://cdn.bulbagarden.net/upload/7/73/FairyIC_Big.png';
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