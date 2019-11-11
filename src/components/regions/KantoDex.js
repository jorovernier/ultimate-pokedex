import React, {Component} from 'react';
import Pokedex from '../Pokedex';
import '../../sass-css/Dex.scss';

export default class KantoDex extends Component{
  render(){
    return (
        <Pokedex 
          url={'http://pokeapi.co/api/v2/pokemon?limit=151'} 
          setButton={this.props.setButton}
          info={<div className='bottom'>
                  <img src={'https://fsb.zobj.net/crop.php?r=T4qhtsz4TPLSIWpX1PGHKNJpod5_bMs8W9u8mUDAOQcZcZRFWOzicBsaeOiRanyKKBvcUyQc0-DVlshtlQ8zJmeq7MsJ6auVAWTR9uMzUm6GyRujJ9MVLBfrSkFYAUpJMVsuY5lFnjZfZoir'} alt='map of pokemon region' />
                  <div className='region-info'></div>
                </div>}
        />
    )
  }
}