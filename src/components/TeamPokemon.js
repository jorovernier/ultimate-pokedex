import React, {Component} from 'react';
import axios from 'axios';
import '../sass-css/TeamPokemon.scss';

export default class TeamPokemon extends Component {
    constructor(props){
        super(props)
        this.state = {
            teamPokemon: [],
            edit: false,
            nameInput: '',
            label: 'Rename'
        }
        this.universalInput = this.universalInput.bind(this);
    }
    
    componentDidMount(){
        axios.get(`https://pokeapi.co/api/v2/pokemon/${this.props.pokemon}/`).then(response => {
        this.setState({
          teamPokemon: response.data
        });
        }).catch(err => console.log(err))
    }

    toggleEdit(){
        this.setState({
            edit: !this.state.edit
        })
    }

    changeLabel(){
        if(this.state.label === 'Rename'){
        this.setState({
          label: 'Cancel'
        })
        } else if(this.state.label === 'Cancel'){
          this.setState({
            label: 'Rename'
          })
        }
    }

    universalInput(prop, val){
        this.setState({
            [prop]: val
        })
    }
    
    render(){
        const {teamPokemon} = this.state;
        let fixedName;
        if(teamPokemon.name){
            fixedName = teamPokemon.name.charAt(0).toUpperCase() + teamPokemon.name.substring(1);
            if(fixedName === 'Nidoran-f'){
                fixedName = 'Nidoran F'
            } else if(fixedName === 'Nidoran-m'){
                fixedName = 'Nidoran M'
            } else if(fixedName === 'Deoxys-normal'){
                fixedName = 'Deoxys'
            } else if(fixedName === 'Wormadam-plant'){
                fixedName = 'Wormadam'
            } else if(fixedName === 'Mime-jr'){
                fixedName = 'Mime Jr.'
            } else if(fixedName === 'Porygon-z'){
                fixedName = 'Porygon Z'
            } else if(fixedName === 'Giratina-altered'){
                fixedName = 'Giratina'
            } else if(fixedName === 'Shaymin-land'){
                fixedName = 'Shaymin'
            } else if(fixedName === 'Basculin-red-striped'){
                fixedName = 'Basculin'
            } else if(fixedName === 'Darmanitan-standard'){
                fixedName = 'Darmanitan'
            } else if(fixedName === 'Tornadus-incarnate'){
                fixedName = 'Tornadus'
            } else if(fixedName === 'Thundurus-incarnate'){
                fixedName = 'Thundurus'
            } else if(fixedName === 'Landorus-incarnate'){
                fixedName = 'Landorus'
            } else if(fixedName === 'Keldeo-ordinary'){
                fixedName = 'Keldeo'
            } else if(fixedName === 'Meloetta-aria'){
                fixedName = 'Meloetta'
            } else if(fixedName === 'Meowstic-male'){
                fixedName = 'Meowstic'
            } else if(fixedName === 'Aegislash-shield'){
                fixedName = 'Aegislash'
            } else if(fixedName === 'Pumpkaboo-average'){
                fixedName = 'Pumpkaboo'
            } else if(fixedName === 'Gourgeist-average'){
                fixedName = 'Gourgeist'
            } else if(fixedName === 'Oricorio-baile'){
                fixedName = 'Oricorio'
            } else if(fixedName === 'Lycanroc-midday'){
                fixedName = 'Lycanroc'
            } else if(fixedName === 'Wishiwashi-solo'){
                fixedName = 'Wishiwashi'
            } else if(fixedName === 'Type-null'){
                fixedName = 'Type Null'
            } else if(fixedName === 'Minior-red-meteor'){
                fixedName = 'Minior'
            } else if(fixedName === 'Mimikyu-disguised'){
                fixedName = 'Mimikyu'
            } else if(fixedName === 'Tapu-koko'){
                fixedName = 'Tapu Koko'
            } else if(fixedName === 'Tapu-lele'){
                fixedName = 'Tapu Lele'
            } else if(fixedName === 'Tapu-bulu'){
                fixedName = 'Tapu Bulu'
            } else if(fixedName === 'Tapu-fini'){
                fixedName = 'Tapu Fini'
            }
        }
        return(
            <div className='team-pokemon'>
                <div className='x-img'>
                    <button className='x' onClick={() => this.props.remove()}></button>
                    <img className='mon-img' src={`https://img.pokemondb.net/artwork/${teamPokemon.name}.jpg`} alt={`${teamPokemon.name}`} />
                </div>
                <div className='name-rename-input'>
                    <div className='name-rename'>
                        <div className='team-mon-name'>{this.props.name ? this.props.name : fixedName}</div>
                        <button className='rename' onClick={() => {this.toggleEdit(); this.changeLabel()}}>{this.state.label}</button>
                    </div>
                    {this.state.edit && <div className='input-save'>
                        <input className='name-input' onChange={(e) => {this.universalInput('nameInput', e.target.value)}} placeholder='New Name!'/>
                        <button className='save' onClick={() => {this.props.save(this.props.slot, this.state.nameInput); this.toggleEdit(); this.changeLabel()}}>Save</button>
                    </div>}
                </div>
            </div>
        )
    }
}