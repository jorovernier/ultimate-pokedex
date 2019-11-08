import React, {Component} from 'react';
import Pokedex from '../Pokedex';
import '../../sass-css/Dex.scss';

export default class UnovaDex extends Component{
  render(){
    return (
      <Pokedex url={'https://pokeapi.co/api/v2/pokemon/?offset=493&limit=156'} setButton={this.props.setButton}/>
    )
  }
}