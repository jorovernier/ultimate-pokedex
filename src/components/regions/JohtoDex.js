import React, {Component} from 'react';
import Pokemon from '../Pokemon';
import axios from 'axios';
import '../../sass-css/Dex.scss';
import FoundDisplay from '../FoundDisplay';

export default class JohtoDex extends Component{
  constructor(props){
    super(props);
    this.state = {
      species : [],        
      fetched : false,
      loading : false,
      input: '',
      foundPokemon: [],
      found: false
    };
    this.onSpriteClick = this.onSpriteClick.bind(this);
    this.universalInput = this.universalInput.bind(this);
  }

  componentDidMount(){
    this.setState({
      loading : true
    });
    axios.get('https://pokeapi.co/api/v2/pokemon/?offset=151&limit=100').then(response => {
      this.setState({
        species : response.data.results,
        loading : true,
        fetched : true
      });
    });
  }

  onSpriteClick(name){
    axios.get(`https://pokeapi.co/api/v2/pokemon/${name}/`).then(response => {
    this.setState({
      foundPokemon: response.data,
      found: true
    });
    }).catch(err => console.log(err))
  }

  universalInput(prop, val){
    this.setState({
      [prop]: val
    })
  }

  render(){
    const {fetched, loading, species, input, foundPokemon, found} = this.state;
    const filteredSpecies = species.filter(pokemon => pokemon.name.startsWith(input.toLowerCase()));
    let display;
    if(fetched){
      display = <div className='pokedex-holder'>
                  <input onChange={(e) => this.universalInput('input', e.target.value)} placeholder='Search the Pokedex!'/>
                  {!input && (<div className='pokedex'>
                    {species.map((pokemon) => <Pokemon action={this.onSpriteClick} key={pokemon.name} pokemon={pokemon}/>)}
                  </div>)}
                  {input && (<div className='pokedex'>
                    {filteredSpecies.map((pokemon) => <Pokemon action={this.onSpriteClick} key={pokemon.name} pokemon={pokemon}/>)}
                  </div>)}
                  <button className='random' onClick={() => this.onSpriteClick(species[Math.floor(Math.random()*species.length)].name)}>
                    <img src='https://ya-webdesign.com/images/pokemon-egg-png.png' alt='sprite of pokemon egg' />
                  </button>
                </div>;
    } else if(loading && !fetched){
      display = <div className='pokedex-holder-loading'>
                  <div className='spinner'></div>
                </div>;
    } else {
      display = <div/>;
    }

    let foundDisplay;
    if(found){
      foundDisplay = <FoundDisplay pokemon={foundPokemon}/>
    } else {
      foundDisplay = <div>Search for a pokemon or click the egg for a surprise!</div>;
    }

    
    return (
      <div className='page'>
        {display}
          <div className='found-display'>
            {foundDisplay}
          </div>
      </div>
    );
  }
}