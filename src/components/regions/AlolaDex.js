import React, {Component} from 'react';
import Pokedex from '../Pokedex';
import '../../sass-css/Dex.scss';

export default class AlolaDex extends Component{
  render(){
    return (
      <Pokedex 
        url={'https://pokeapi.co/api/v2/pokemon/?offset=721&limit=86'} 
        setButton={this.props.setButton}
        img1={this.props.img1} img2={this.props.img2} img3={this.props.img3} img4={this.props.img4} img5={this.props.img5} img6={this.props.img6}
        info={<div className='bottom'>
                  <img src={'https://stmed.net/sites/default/files/pokemon-sun-and-moon-hd-wallpapers-33515-7379484.jpg'} alt='map of pokemon region' />
                  <div className='region-info'>
                    <p>Alola is the seventh region in the pokemon games. It is located far away from the other regions.</p>
                    <p>Fun Fact: This region is based off of Hawaii!</p>
                    <p>Resident Professor: Kukui</p>
                    <p>Villainous Gang: Team Skull or Team Rainbow Rocket</p>
                    <p>Games this region appears in: Sun, Moon, Ultra Sun, Ultra Moon</p>
                  </div>
                </div>}
      />
    )
  }
}