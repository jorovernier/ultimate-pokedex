import React, {Component} from 'react';
import Pokedex from '../Pokedex';
import '../../sass-css/Dex.scss';

export default class HoennDex extends Component{
  render(){
    return (
      <Pokedex 
        url={'https://pokeapi.co/api/v2/pokemon/?offset=251&limit=135'} 
        setButton={this.props.setButton}
        info={<div className='bottom'>
                  <img src={'https://i.pinimg.com/originals/58/2a/5d/582a5d3e4ea8349b2c5a8755e098dfe4.png'} alt='map of pokemon region' />
                  <div className='region-info'></div>
                </div>}
      />
    )
  }
}