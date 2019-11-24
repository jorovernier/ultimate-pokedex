import React, {Component} from 'react';
import Pokedex from '../Pokedex';
import '../../sass-css/Dex.scss';

export default class AlolaDex extends Component{
  render(){
    return (
      <Pokedex 
        url={'https://pokeapi.co/api/v2/pokemon/?offset=721&limit=86'} 
        setButton={this.props.setButton}
        changeTitle={this.props.changeTitle}
        img1={this.props.img1} img2={this.props.img2} img3={this.props.img3} img4={this.props.img4} img5={this.props.img5} img6={this.props.img6}
        info={<div className='bottom'>
                  <img src={'https://stmed.net/sites/default/files/pokemon-sun-and-moon-hd-wallpapers-33515-7379484.jpg'} alt='map of pokemon region' />
                  <div className='region-info'>
                    <p className='main-info'>Alola is the seventh region in the pokemon games. It is located far away from the other regions.</p>
                    <span>
                      <h1>Fun Fact:</h1>
                      <p>This region is based off of Hawaii!</p>
                    </span>
                    <span>
                      <h1>Resident Professor:</h1>
                      <p>Kukui</p>
                    </span>
                    <span>
                      <h1>Villainous Gang:</h1>
                      <p>Team Skull or Team Rainbow Rocket</p>
                    </span>
                    <span>
                      <h1>Games this region appears in:</h1>
                      <p>Sun, Moon, Ultra Sun, Ultra Moon</p>
                    </span>
                  </div>
                </div>}
      />
    )
  }
}