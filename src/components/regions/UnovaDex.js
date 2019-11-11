import React, {Component} from 'react';
import Pokedex from '../Pokedex';
import '../../sass-css/Dex.scss';

export default class UnovaDex extends Component{
  render(){
    return (
      <Pokedex 
        url={'https://pokeapi.co/api/v2/pokemon/?offset=493&limit=156'} 
        setButton={this.props.setButton}
        info={<div className='bottom'>
                  <img src={'https://www.imore.com/sites/imore.com/files/styles/w830/public/field/image/2019/08/pokemon-unova.jpg?itok=te9PxjFp'} alt='map of pokemon region' />
                  <div className='region-info'></div>
                </div>}
      />
    )
  }
}