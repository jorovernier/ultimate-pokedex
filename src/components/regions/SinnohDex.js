import React, {Component} from 'react';
import Pokedex from '../Pokedex';
import '../../sass-css/Dex.scss';

export default class SinnohDex extends Component{
  render(){
    return (
      <Pokedex 
        url={'https://pokeapi.co/api/v2/pokemon/?offset=386&limit=107'} 
        setButton={this.props.setButton}
        changeTitle={this.props.changeTitle}
        img1={this.props.img1} img2={this.props.img2} img3={this.props.img3} img4={this.props.img4} img5={this.props.img5} img6={this.props.img6}
        stitch={false}
      />
    )
  }
}