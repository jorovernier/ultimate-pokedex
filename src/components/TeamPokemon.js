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
            if(fixedName.includes('-')){
                fixedName = fixedName.split('-')[0]
            }
        }

        return(
            <div className='team-pokemon'>
                <div className='x-img'>
                    <button className='x' onClick={() => this.props.remove(`p${this.props.slot}_name`)}></button>
                    <img className='mon-img' src={`https://img.pokemondb.net/artwork/${teamPokemon.name}.jpg`} alt={`${teamPokemon.name}`} />
                </div>
                <div className='name-rename-input'>
                    <div className='name-rename'>
                        <div className='team-mon-name'>{this.props.name ? this.props.name : fixedName}</div>
                        <button className='rename' onClick={() => {this.toggleEdit(); this.changeLabel()}}>{this.state.label}</button>
                    </div>
                    {this.state.edit && <div className='input-save'>
                        <input className='name-input' onChange={(e) => {this.universalInput('nameInput', e.target.value)}} placeholder='New Name!'/>
                        <button className='save' onClick={() => this.state.nameInput.length <= 12 ? (this.props.save(this.props.slot, this.state.nameInput), this.toggleEdit(), this.changeLabel()) : window.alert("Your nickname must be less than 13 characters.")}>Save</button>
                    </div>}
                </div>
            </div>
        )
    }
}