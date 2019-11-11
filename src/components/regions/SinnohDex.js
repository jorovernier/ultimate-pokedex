import React, {Component} from 'react';
import Pokedex from '../Pokedex';
import '../../sass-css/Dex.scss';

export default class SinnohDex extends Component{
  render(){
    return (
      <Pokedex 
        url={'https://pokeapi.co/api/v2/pokemon/?offset=386&limit=107'} 
        setButton={this.props.setButton}
        info={<div className='bottom'>
                  <img src={'https://vignette.wikia.nocookie.net/pokemon/images/4/44/Sinnoh_Pt.jpg/revision/latest?cb=20120111221659'} alt='map of pokemon region' />
                  <div className='region-info'></div>
                </div>}
      />
    )
  }
}