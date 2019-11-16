import React, {Component} from 'react';
import Pokedex from '../Pokedex';
import '../../sass-css/Dex.scss';

export default class KantoDex extends Component{
  render(){
    return (
        <Pokedex 
          url={'http://pokeapi.co/api/v2/pokemon?limit=151'} 
          setButton={this.props.setButton}
          img1={this.props.img1} img2={this.props.img2} img3={this.props.img3} img4={this.props.img4} img5={this.props.img5} img6={this.props.img6}
          info={<div className='bottom'>
                  <img src={'https://fsb.zobj.net/crop.php?r=T4qhtsz4TPLSIWpX1PGHKNJpod5_bMs8W9u8mUDAOQcZcZRFWOzicBsaeOiRanyKKBvcUyQc0-DVlshtlQ8zJmeq7MsJ6auVAWTR9uMzUm6GyRujJ9MVLBfrSkFYAUpJMVsuY5lFnjZfZoir'} alt='map of pokemon region' />
                  <div className='region-info'>
                    <p className='main-info'>Kanto is the first region in the pokemon games. It is located east of the Johto region and south of the Sinnoh region.</p>
                    <span>
                      <h1>Fun Fact:</h1>
                      <p>All of the cities in this region are named after colors!</p>
                    </span>
                    <span>
                      <h1>Resident Professor:</h1>
                      <p>Oak</p>
                    </span>
                    <span>
                      <h1>Villainous Gang:</h1>
                      <p>Team Rocket</p>
                    </span>
                    <span>
                      <h1>Games this region appears in:</h1>
                      <p>Red, Green, Blue, Yellow, Gold, Silver, Crystal, FireRed, LeafGreen, HeartGold, SoulSilver, Let's Go Pikachu, Let's Go Eevee</p>
                    </span>
                  </div>
                </div>}
        />
    )
  }
}