import React, {Component} from 'react';
import Pokedex from '../Pokedex';
import '../../sass-css/Dex.scss';

export default class AlolaDex extends Component{
  render(){
    return (
      <Pokedex 
        url={'https://pokeapi.co/api/v2/pokemon/?offset=721&limit=86'} 
        setButton={this.props.setButton}
        info={<div className='bottom'>
                  <img src={'https://stmed.net/sites/default/files/pokemon-sun-and-moon-hd-wallpapers-33515-7379484.jpg'} alt='map of pokemon region' />
                  <div className='region-info'></div>
                </div>}
      />
    )
  }
}