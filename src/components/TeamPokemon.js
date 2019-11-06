import React, {Component} from 'react';
import axios from 'axios';

export default class TeamPokemon extends Component {
    constructor(props){
        super(props)
        this.state = {
            teamPokemon: []
        }
    }
    
    componentDidMount(){
        axios.get(`https://pokeapi.co/api/v2/pokemon/${this.props.pokemon}/`).then(response => {
        this.setState({
          teamPokemon: response.data
        });
        }).catch(err => console.log(err))
    }
    
    render(){
        const {teamPokemon} = this.state;
        return(
            <div>
                <div>{teamPokemon.name}</div>
                <img className='mon-img' src={`https://img.pokemondb.net/artwork/${teamPokemon.name}.jpg`} alt={`${teamPokemon.name}`} />
            </div>
        )
    }
}