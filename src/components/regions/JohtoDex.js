import React, {Component} from 'react';
import Pokedex from '../Pokedex';
import '../../sass-css/Dex.scss';

export default class JohtoDex extends Component{
  render(){
    return (
      <Pokedex url={'https://pokeapi.co/api/v2/pokemon/?offset=151&limit=100'} setButton={this.props.setButton}/>
    )
  }
}