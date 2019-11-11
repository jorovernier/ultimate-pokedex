import React, {Component} from 'react';
import Pokedex from '../Pokedex';
import '../../sass-css/Dex.scss';

export default class JohtoDex extends Component{
  render(){
    return (
      <Pokedex 
        url={'https://pokeapi.co/api/v2/pokemon/?offset=151&limit=100'} 
        setButton={this.props.setButton}
        info={<div className='bottom'>
                  <img src={'http://wickedgoodgaming.com/wp-content/uploads/2017/10/johto_by_cogreen20-dbf9mol.png'} alt='map of pokemon region' />
                  <div className='region-info'></div>
                </div>}
      />
    )
  }
}