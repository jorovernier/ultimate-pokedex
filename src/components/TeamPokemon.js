import React, {Component} from 'react';
import axios from 'axios';
import '../sass-css/TeamPokemon.scss';

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
        console.log(teamPokemon)

        return(
            <div className='team-pokemon'>
                <div className='img-name'>
                    <img className='mon-img' src={`https://img.pokemondb.net/artwork/${teamPokemon.name}.jpg`} alt={`${teamPokemon.name}`} />
                    <div className='team-mon-name'>{teamPokemon.name}</div>
                </div>
            </div>
        )
    }
}