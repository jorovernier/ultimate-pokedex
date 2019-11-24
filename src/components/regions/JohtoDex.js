import React, {Component} from 'react';
import Pokedex from '../Pokedex';
import '../../sass-css/Dex.scss';

export default class JohtoDex extends Component{
  render(){
    return (
      <Pokedex 
        url={'https://pokeapi.co/api/v2/pokemon/?offset=151&limit=100'} 
        setButton={this.props.setButton}
        changeTitle={this.props.changeTitle}
        img1={this.props.img1} img2={this.props.img2} img3={this.props.img3} img4={this.props.img4} img5={this.props.img5} img6={this.props.img6}
        info={<div className='bottom'>
                  <img src={'https://vignette.wikia.nocookie.net/dreampkmn/images/1/11/Mapa_Johto_Gen_4.png/revision/latest?cb=20130326133414&path-prefix=es'} alt='map of pokemon region' />
                  <div className='region-info'>
                    <p className='main-info'>Johto is the second region in the pokemon games. It is located west of the Kanto region and south of the Sinnoh region.</p>
                    <span>
                      <h1>Fun Fact:</h1>
                      <p>All of the cities in this region are named something somehow related to plants!</p>
                    </span>
                    <span>
                      <h1>Resident Professor:</h1>
                      <p>Elm</p>
                    </span>
                    <span>
                      <h1>Villainous Gang:</h1>
                      <p>Team Rocket</p>
                    </span>
                    <span>
                      <h1>Games this region appears in:</h1>
                      <p>Gold, Silver, Crystal, HeartGold, SoulSilver</p>
                    </span>
                  </div>
                </div>}
      />
    )
  }
}