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
                    <p className='main-info'>Sinnoh is the fourth region in the pokemon games. It is located north of the Kanto, Johto, and Hoenn regions.</p>
                    <span>
                      <h1>Fun Fact:</h1>
                      <p>This region is the only one with more than five letters in it's name!</p>
                    </span>
                    <span>
                      <h1>Resident Professor:</h1>
                      <p>Rowan</p>
                    </span>
                    <span>
                      <h1>Villainous Gang:</h1>
                      <p>Team Galactic</p>
                    </span>
                    <span>
                      <h1>Games this region appears in:</h1>
                      <p>Diamond, Pearl, Platinum</p>
                    </span>
                  </div>
                </div>}
      />
    )
  }
}