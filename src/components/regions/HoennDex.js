import React, {Component} from 'react';
import Pokedex from '../Pokedex';
import '../../sass-css/Dex.scss';

export default class HoennDex extends Component{
  render(){
    return (
      <Pokedex 
        url={'https://pokeapi.co/api/v2/pokemon/?offset=251&limit=135'} 
        setButton={this.props.setButton}
        img1={this.props.img1} img2={this.props.img2} img3={this.props.img3} img4={this.props.img4} img5={this.props.img5} img6={this.props.img6}
        info={<div className='bottom'>
                  <img src={'https://i.pinimg.com/originals/58/2a/5d/582a5d3e4ea8349b2c5a8755e098dfe4.png'} alt='map of pokemon region' />
                  <div className='region-info'>
                    <p className='main-info'>Hoenn is the third region in the pokemon games. It is located south of the Sinnoh region.</p>
                    <span>
                      <h1>Fun Fact:</h1>
                      <p>This region is based off of the Japanese main island of Kyushu!</p>
                    </span>
                    <span>
                      <h1>Resident Professor:</h1>
                      <p>Birch</p>
                    </span>
                    <span>
                      <h1>Villainous Gang:</h1>
                      <p>Team Aqua or Team Magma</p>
                    </span>
                    <span>
                      <h1>Games this region appears in:</h1>
                      <p>Ruby, Sapphire, Emerald, Omega Ruby, Alpha Sapphire</p>
                    </span>
                  </div>
                </div>}
      />
    )
  }
}