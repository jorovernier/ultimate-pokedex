import React, {Component} from 'react';
import Pokedex from '../Pokedex';
import '../../sass-css/Dex.scss';

export default class SinnohDex extends Component{
  render(){
    return (
      <Pokedex url={'https://pokeapi.co/api/v2/pokemon/?offset=386&limit=107'} setButton={this.props.setButton}/>
    )
  }
}