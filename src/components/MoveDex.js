import React, {Component} from 'react';
import axios from 'axios';
import Move from './Move';
import FoundMove from './FoundMove';
import '../sass-css/MoveDex.scss';

export default class Movedex extends Component {
  constructor(props){
    super(props);
    this.state = {
        moves : [],        
        fetched : false,
        loading : false,
        input: '',
        foundMove: [],
        found: false,
        pokemon: []
    }
    this.onSpriteClick = this.onSpriteClick.bind(this);
    this.universalInput = this.universalInput.bind(this);
  }

  componentDidMount(){
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
    this.props.setButton(false);
  }

  onSpriteClick(name){
    axios.get(`https://pokeapi.co/api/v2/move/${name}/`).then(response => {
      this.setState({
        foundMove: response.data,
        found: true
      });
    });
  }

  universalInput(prop, val){
    this.setState({
      [prop]: val
    })
  }

  render(){
    const {fetched, loading, moves, input, foundMove, found, pokemon} = this.state;
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
                  <button className='random-move' onClick={() => this.onSpriteClick(moves[Math.floor(Math.random()*moves.length)].name)}>
                    <img src='https://cdn.bulbagarden.net/upload/archive/8/8e/20090709005535%21Spr_3r_000.png' alt='sprite of question mark' />
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
      foundDisplay = <FoundMove move={foundMove}/>
    } else {
      foundDisplay = <div>Search for a move or click the question mark for a surprise!</div>;
    }

    return (
      <div className='page'>
        <div className='top'>
          {display}
          <div className='found-display'>
            {foundDisplay}
          </div>
        </div>
        {this.props.info}
      </div>
    );
  }
}