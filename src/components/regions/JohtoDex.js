import React, {Component} from 'react';
import Pokedex from '../Pokedex';
import '../../sass-css/Dex.scss';

export default class JohtoDex extends Component{
  render(){
    return (
      <Pokedex 
        url={'https://pokeapi.co/api/v2/pokemon/?offset=151&limit=100'} 
        setButton={this.props.setButton}
        img1={this.props.img1} img2={this.props.img2} img3={this.props.img3} img4={this.props.img4} img5={this.props.img5} img6={this.props.img6}
        info={<div className='bottom'>
                  <img src={'http://wickedgoodgaming.com/wp-content/uploads/2017/10/johto_by_cogreen20-dbf9mol.png'} alt='map of pokemon region' />
                  <div className='region-info'>
                    <p>Johto is the second region in the pokemon games. It is located west of the Kanto region and south of the Sinnoh region.</p>
                    <p>Fun Fact: All of the cities in this region are somehow related to plants!</p>
                    <p>Resident Professor: Elm</p>
                    <p>Villainous Gang: Team Rocket</p>
                    <p>Games this region appears in: Gold, Silver, Crystal, HeartGold, SoulSilver</p>
                  </div>
                </div>}
      />
    )
  }
}