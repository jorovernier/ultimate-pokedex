import React, {Component} from 'react';
import Pokedex from '../Pokedex';
import '../../sass-css/Dex.scss';

export default class HoennDex extends Component{
  render(){
    return (
      <Pokedex url={'https://pokeapi.co/api/v2/pokemon/?offset=251&limit=135'} setButton={this.props.setButton}/>
    )
  }
}