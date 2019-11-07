import React, {Component} from 'react';
import Pokedex from '../Pokedex';
import '../../sass-css/Dex.scss';

export default class KalosDex extends Component{
  render(){
    return (
      <Pokedex url={'https://pokeapi.co/api/v2/pokemon/?offset=649&limit=72'}/>
    )
  }
}