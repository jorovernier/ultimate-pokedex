import React, {Component} from 'react';
import Pokedex from '../Pokedex';
import '../../sass-css/Dex.scss';

export default class SinnohDex extends Component{
  render(){
    return (
      <Pokedex 
        url={'https://pokeapi.co/api/v2/pokemon/?offset=386&limit=107'} 
        setButton={this.props.setButton}
        img1={this.props.img1} img2={this.props.img2} img3={this.props.img3} img4={this.props.img4} img5={this.props.img5} img6={this.props.img6}
        info={<div className='bottom'>
                  <img src={'https://vignette.wikia.nocookie.net/pokemon/images/4/44/Sinnoh_Pt.jpg/revision/latest?cb=20120111221659'} alt='map of pokemon region' />
                  <div className='region-info'>
                    <p>Sinnoh is the fourth region in the pokemon games. It is located north of the Kanto, Johto, and Hoenn regions.</p>
                    {/* <p>Fun Fact: This region is based off of the Japanese main island of Kyushu!</p> */}
                    <p>Resident Professor: Rowan</p>
                    <p>Villainous Gang: Team Galactic</p>
                    <p>Games this region appears in: Diamond, Pearl, Platinum</p>
                  </div>
                </div>}
      />
    )
  }
}