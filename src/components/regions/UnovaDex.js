import React, {Component} from 'react';
import Pokedex from '../Pokedex';
import '../../sass-css/Dex.scss';

export default class UnovaDex extends Component{
  render(){
    return (
      <Pokedex 
        url={'https://pokeapi.co/api/v2/pokemon/?offset=493&limit=156'} 
        setButton={this.props.setButton}
        img1={this.props.img1} img2={this.props.img2} img3={this.props.img3} img4={this.props.img4} img5={this.props.img5} img6={this.props.img6}
        info={<div className='bottom'>
                  <img src={'https://www.imore.com/sites/imore.com/files/styles/w830/public/field/image/2019/08/pokemon-unova.jpg?itok=te9PxjFp'} alt='map of pokemon region' />
                  <div className='region-info'>
                    <p className='main-info'>Unova is the fifth region in the pokemon games. It is located far away from the other regions.</p>
                    <span>
                      <h1>Fun Fact:</h1>
                      <p>This region is based off of New York!</p>
                    </span>
                    <span>
                      <h1>Resident Professor:</h1>
                      <p>Juniper</p>
                    </span>
                    <span>
                      <h1>Villainous Gang:</h1>
                      <p>Team Plasma</p>
                    </span>
                    <span>
                      <h1>Games this region appears in:</h1>
                      <p>Black, White, Black 2, White 2</p>
                    </span>
                  </div>
                </div>}
      />
    )
  }
}