import React, {Component} from 'react';
import {connect} from 'react-redux';
import {sendID} from '../psyducks/reducer';
import axios from 'axios';
import Pokemon from './Pokemon';
import FoundDisplay from './FoundDisplay';
import '../sass-css/Dex.scss';

class Pokedex extends Component{
  constructor(props){
    super(props);
    this.state = {
      species : [],        
      fetched : false,
      loading : false,
      input: '',
      foundPokemon: [],
      found: false,
      encounters: [],
      p1: '',
      p2: '',
      p3: '',
      p4: '',
      p5: '',
      p6: ''
    };
    this.onSpriteClick = this.onSpriteClick.bind(this);
    this.universalInput = this.universalInput.bind(this);
    this.getTeam = this.getTeam.bind(this);
  }

  componentDidMount(){
    this.setState({
      loading : true
    });
    axios.get(`${this.props.url}`).then(response => {
      this.setState({
        species : response.data.results,
        loading : false,
        fetched : true
      });
    });
    this.props.sendID(0);
    this.props.setButton(true);
    this.getTeam();
  }

  onSpriteClick(name){
    axios.get(`https://pokeapi.co/api/v2/pokemon/${name}/`).then(response => {
      this.setState({
        foundPokemon: response.data,
        found: true
      });
      this.props.sendID(this.state.foundPokemon.id)
    });
    axios.get(`https://pokeapi.co/api/v2/pokemon/${name}/encounters`).then(response => {
      this.setState({
        encounters: response.data
      });
    })
  }

  universalInput(prop, val){
    this.setState({
      [prop]: val
    })
  }

  getTeam(){
    if(this.props.user){
      axios.get('/api/get_team').then(response => {
        this.setState({
          p1: response.data[0].p1,
          p2: response.data[0].p2,
          p3: response.data[0].p3,
          p4: response.data[0].p4,
          p5: response.data[0].p5,
          p6: response.data[0].p6
        });
        this.props.img1(this.state.p1);
        this.props.img2(this.state.p2);
        this.props.img3(this.state.p3);
        this.props.img4(this.state.p4);
        this.props.img5(this.state.p5);
        this.props.img6(this.state.p6);
      }).catch(err => console.log(err));
    }
  } 

  render(){
    const {fetched, loading, species, input, foundPokemon, found} = this.state;
    const filteredSpecies = species.filter(pokemon => pokemon.name.startsWith(input.toLowerCase()));
    let display;
    if(fetched){
      display = <div className='pokedex-holder'>
                  <input onChange={(e) => this.universalInput('input', e.target.value)} placeholder='Search the Pokedex!'/>
                  {!input && (<div className='pokedex'>
                    {species.map((pokemon) => <Pokemon action={this.onSpriteClick} key={pokemon.name} pokemon={pokemon} getType={this.getType}/>)}
                  </div>)}
                  {input && (<div className='pokedex'>
                    {filteredSpecies.map((pokemon) => <Pokemon action={this.onSpriteClick} key={pokemon.name} pokemon={pokemon} getType={this.getType}/>)}
                  </div>)}
                  <button className='random' onClick={() => this.onSpriteClick(species[Math.floor(Math.random()*species.length)].name)}>
                    <img src='https://ya-webdesign.com/images/pokemon-egg-png.png' alt='sprite of pokemon egg' />
                  </button>
                </div>;
    } else if(loading && !fetched){
      display = <div className='pokedex-holder-loading'>
                  <div className='pokedex-border-loading'>
                    <div className='spinner'></div>
                  </div>
                </div>;
    } else {
      display = <div/>;
    }

    let foundDisplay;
    if(found){
      foundDisplay = <FoundDisplay pokemon={foundPokemon} encounters={this.state.encounters}/>
    } else {
      foundDisplay = <div>Search for a pokemon or click the egg for a surprise!</div>;
    }

    return (
      <div className='page'>
        <div className='top'>
          {display}
          <div className={found ? 'found-display' : 'not-found'}>
            {foundDisplay}
          </div>
        </div>
        {this.props.info}
      </div>
    );
  }
}

function mapReduxStateToProps(reduxState){
  return reduxState
};
const mapDispatchToProps = {
  sendID
}
const invokedConnect = connect(mapReduxStateToProps, mapDispatchToProps);

export default invokedConnect(Pokedex);