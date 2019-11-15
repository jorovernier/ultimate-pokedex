import React, {Component} from 'react';
import Pokedex from '../Pokedex';
import '../../sass-css/Dex.scss';

export default class KalosDex extends Component{
  render(){
    return (
      <Pokedex 
        url={'https://pokeapi.co/api/v2/pokemon/?offset=649&limit=72'} 
        setButton={this.props.setButton}
        img1={this.props.img1} img2={this.props.img2} img3={this.props.img3} img4={this.props.img4} img5={this.props.img5} img6={this.props.img6}
        info={<div className='bottom'>
                  <img src={'https://media-cerulean.cursecdn.com/attachments/4/847/super__large_kalos_map.jpg'} alt='map of pokemon region' />
                  <div className='region-info'>
                    <p>Kalos is the sixth region in the pokemon games. It is located far away from the other regions.</p>
                    <p>Fun Fact: This region is shaped like a 5-pointed star!</p>
                    <p>Resident Professor: Sycamore</p>
                    <p>Villainous Gang: Team Flare</p>
                    <p>Games this region appears in: X, Y</p>
                  </div>
                </div>}
      />
    )
  }
}