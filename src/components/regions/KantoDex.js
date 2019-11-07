import React, {Component} from 'react';
import Pokedex from '../Pokedex';
import '../../sass-css/Dex.scss';

export default class KantoDex extends Component{
  render(){
    return (
      <Pokedex url={'http://pokeapi.co/api/v2/pokemon?limit=151'}/>
    )
  }
}