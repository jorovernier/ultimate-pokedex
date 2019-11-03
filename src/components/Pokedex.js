import React, {Component} from 'react';
import Pokemon from './Pokemon';
import axios from 'axios';

export default class Pokedex extends Component{
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
    axios.get('http://pokeapi.co/api/v2/pokemon?limit=807').then(response => {
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
      display = <div className="pokedex">
                  {species.map((pokemon, index) => <Pokemon key={pokemon.name} id={index+1} pokemon={pokemon}/>)}
                </div>;
    } else if(loading && !fetched){
      display = <p> Loading ...</p>;
    } else {
      display = <div/>;
    }

    return (
      <div>
        {display}
      </div>
        );
    }
}