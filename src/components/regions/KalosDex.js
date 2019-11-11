import React, {Component} from 'react';
import Pokedex from '../Pokedex';
import '../../sass-css/Dex.scss';

export default class KalosDex extends Component{
  render(){
    return (
      <Pokedex 
        url={'https://pokeapi.co/api/v2/pokemon/?offset=649&limit=72'} 
        setButton={this.props.setButton}
        info={<div className='bottom'>
                  <img src={'https://media-cerulean.cursecdn.com/attachments/4/847/super__large_kalos_map.jpg'} alt='map of pokemon region' />
                  <div className='region-info'></div>
                </div>}
      />
    )
  }
}