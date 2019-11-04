import React, {Component} from 'react';
import Pokemon from '../Pokemon';
import axios from 'axios';
import '../../sass-css/Dex.scss';

export default class UnovaDex extends Component{
  constructor(props){
    super(props);
    this.state = {
      species : [],        
      fetched : false,
      loading : false,
    };
  }
  componentDidMount(){
    this.setState({
      loading : true
    });
    axios.get('https://pokeapi.co/api/v2/pokemon/?offset=493&limit=156').then(response => {
      this.setState({
        species : response.data.results,
        loading : true,
        fetched : true
      });
    });
  }

  render(){
    const {fetched, loading, species} = this.state;
    let display;
    if(fetched){
      display = <div className='pokedex-holder'>
                  <input placeholder='search'/>
                  <div className='pokedex'>
                  {species.map((pokemon, index) => <Pokemon key={pokemon.name} id={index+1} pokemon={pokemon}/>)}
                  </div>
                </div>;
    } else if(loading && !fetched){
      display = <p className='pokedex-holder'> Loading ...</p>;
    } else {
      display = <div/>;
    }

    return (
      <div className='page'>
        {display}
        <div className='placeholder'>just a box</div>
      </div>
    );
  }
}