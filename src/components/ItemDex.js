import React, {Component} from 'react';
import axios from 'axios';
import Item from './Item';
import FoundItem from './FoundItem';
import '../sass-css/ItemDex.scss';

export default class ItemDex extends Component {
  constructor(props){
    super(props);
    this.state = {
      items : [],        
      fetched : false,
      loading : false,
      input: '',
      foundItem: [],
      found: false,
      encounters: []
    };
    this.onSpriteClick = this.onSpriteClick.bind(this);
    this.universalInput = this.universalInput.bind(this);
  }

  componentDidMount(){
    this.props.setButton(false);
    this.props.setFooter(false);
    this.props.changeTitle('Login');
    this.setState({
      loading : true
    });
    axios.get(`${this.props.url}`).then(response => {
      this.setState({
        items : response.data.results,
        loading : false,
        fetched : true
      });
    });
  }

  onSpriteClick(name){
    axios.get(`https://pokeapi.co/api/v2/item/${name}/`).then(response => {
      this.setState({
        foundItem: response.data,
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
    const {fetched, loading, items, input, foundItem, found} = this.state;
    const filteredItems = items.filter(item => item.name.includes(input.toLowerCase()));
    let display;
    if(fetched){
      display = <div className='pokedex-holder'>
                  <input onChange={(e) => this.universalInput('input', e.target.value)} placeholder='Search the Itemdex!'/>
                  {!input && (<div className='pokedex'>
                    {items.map((item) => <Item action={this.onSpriteClick} key={item.name} item={item}/>)}
                  </div>)}
                  {input && (<div className='pokedex'>
                    {filteredItems.map((item) => <Item action={this.onSpriteClick} key={item.name} item={item}/>)}
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

    let foundDisplay;
    if(found){
      foundDisplay = <FoundItem item={foundItem}/>
    } else {
      foundDisplay = <div>Search for an item and click on it's image!</div>;
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