import React, {Component} from 'react';
import axios from 'axios';
import Move from './Move';
import '../sass-css/SearchByMove.scss';

export default class SearchByMove extends Component {
  constructor(props){
    super(props);
    this.state = {
      moves : [],        
      fetched : false,
      loading : false,
      input: '',
      foundMove: [],
      found: false,
      pokemon: [],
      moveMon: ['test']
    }
    this.onSpriteClick = this.onSpriteClick.bind(this);
    this.universalInput = this.universalInput.bind(this);
    this.moveMons = this.moveMons.bind(this);
  }

  componentDidMount(){
    this.props.setButton(false);
    this.props.setFooter(false);
    this.props.changeTitle('Login');
    this.setState({
      loading : true
    });
    axios.get('https://pokeapi.co/api/v2/move?limit=746').then(response => {
      this.setState({
        moves : response.data.results,
        loading : false,
        fetched : true
      });
    });
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=964').then(response => {
      this.setState({
        pokemon: response.data.results
      });
    });
  }

  onSpriteClick(name){
    axios.get(`https://pokeapi.co/api/v2/move/${name}/`).then(response => {
      this.setState({
        foundMove: response.data,
        found: true
      });
    });
    this.state.moveMon.splice(0, this.state.moveMon.length);
    this.moveMons();
  }

  moveMons(){
    for(var i = 0; i < this.state.pokemon.length; i++){
      axios.get(`https://pokeapi.co/api/v2/pokemon/${this.state.pokemon[i].name}/`).then(response => {
        let stateMove = this.state.foundMove.name;
        let moveMon = this.state.moveMon;
        response.data.moves.map(function(mapMove, index){
          return mapMove.move.name === stateMove ? moveMon.push(response.data.name) : <></>
        });
        this.setState({
          moveMon: moveMon
        });
      });
    }
  }

  universalInput(prop, val){
    this.setState({
      [prop]: val
    })
  }

  prettify(move){
    return move.split('-').map(function capitalize(part) {
        return part.charAt(0).toUpperCase() + part.slice(1);
    }).join(' ');
  }

  render(){
    const {fetched, loading, moves, input, found} = this.state;
    const filteredMoves = moves.filter(move => move.name.startsWith(input.toLowerCase()));
    let display;
    if(fetched){
      display = <div className='pokedex-holder'>
                  <input onChange={(e) => this.universalInput('input', e.target.value)} placeholder='Search the Movedex!'/>
                  {!input && (<div className='pokedex'>
                    {moves.map((move) => <Move action={this.onSpriteClick} key={move.name} move={move}/>)}
                  </div>)}
                  {input && (<div className='pokedex'>
                    {filteredMoves.map((move) => <Move action={this.onSpriteClick} key={move.name} move={move}/>)}
                  </div>)}
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

    let mappedMon = this.state.moveMon.map((mon) => {
        if(mon === 'minior-red-meteor'){
            mon = 'minior-meteor'
        } else if(mon === 'mimikyu-disguised'){
            mon = 'mimikyu'
        };
        return (
            <div className='move-mon-box' key={mon}>
                <div className='img'>
                    <img src={`https://img.pokemondb.net/sprites/sun-moon/icon/${mon}.png`} alt={`sprite of ${mon}`} />
                </div>
                <h1>{this.prettify(mon)}</h1>
            </div>
        )
    })

    let foundDisplay;
    if(found){
      foundDisplay = <div className='move-mon-display'>
                        {mappedMon}
                     </div>
    } else {
      foundDisplay = <div>Search for a move and click on it's name to find a Pokemon that can learn it!</div>;
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