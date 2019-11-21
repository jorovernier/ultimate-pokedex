import React from 'react';
import axios from 'axios';
import {Switch, NavLink, Route, withRouter, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {setUser} from './psyducks/reducer';
import './sass-css/App.scss';
import './index.css';
import logo from './images/pokeball-icon.png';
import Home from './components/Home';
import AuthComponent from './components/AuthComponent';
import Profile from './components/Profile';
import Pokedex from './components/Pokedex';
import KantoDex from './components/regions/KantoDex';
import JohtoDex from './components/regions/JohtoDex';
import HoennDex from './components/regions/HoennDex';
import SinnohDex from './components/regions/SinnohDex';
import UnovaDex from './components/regions/UnovaDex';
import KalosDex from './components/regions/KalosDex';
import AlolaDex from './components/regions/AlolaDex';
import ItemDex from './components/ItemDex';
import MoveDex from './components/MoveDex';
import SearchByMove from './components/SearchByMove';
import Types from './components/Types';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      hamburger: false,
      footer: false,
      button: false,
      img1: '',
      img2: '',
      img3: '',
      img4: '',
      img5: '',
      img6: ''
    }
    this.addToTeam1 = this.addToTeam1.bind(this);
    this.addToTeam2 = this.addToTeam2.bind(this);
    this.addToTeam3 = this.addToTeam3.bind(this);
    this.addToTeam4 = this.addToTeam4.bind(this);
    this.addToTeam5 = this.addToTeam5.bind(this);
    this.addToTeam6 = this.addToTeam6.bind(this);
    this.toggleBurger = this.toggleBurger.bind(this);
    this.toggleFooter = this.toggleFooter.bind(this);
    this.setFooter = this.setFooter.bind(this);
    this.setButton = this.setButton.bind(this);
    this.img1 = this.img1.bind(this);
    this.img2 = this.img2.bind(this);
    this.img3 = this.img3.bind(this);
    this.img4 = this.img4.bind(this);
    this.img5 = this.img5.bind(this);
    this.img6 = this.img6.bind(this);
  }
  addToTeam1(){
    if(this.props.id > 0){
      axios.post('/api/add_to_team1', {p1: this.props.id});
      this.img1(this.props.id);
    } else {
      window.alert('You cannot add nothing to your team!')
    }
  }
  addToTeam2(){
    if(this.props.id > 0){
      axios.post('/api/add_to_team2', {p2: this.props.id});
      this.img2(this.props.id);
    } else {
      window.alert('You cannot add nothing to your team!')
    }
  }
  addToTeam3(){
    if(this.props.id > 0){
      axios.post('/api/add_to_team3', {p3: this.props.id});
      this.img3(this.props.id);
    } else {
      window.alert('You cannot add nothing to your team!')
    }
  }
  addToTeam4(){
    if(this.props.id > 0){
      axios.post('/api/add_to_team4', {p4: this.props.id});
      this.img4(this.props.id);
    } else {
      window.alert('You cannot add nothing to your team!')
    }
  }
  addToTeam5(){
    if(this.props.id > 0){
      axios.post('/api/add_to_team5', {p5: this.props.id});
      this.img5(this.props.id);
    } else {
      window.alert('You cannot add nothing to your team!')
    }
  }
  addToTeam6(){
    if(this.props.id > 0){
      axios.post('/api/add_to_team6', {p6: this.props.id});
      this.img6(this.props.id);
    } else {
      window.alert('You cannot add nothing to your team!')
    }
  }

  toggleBurger(){
    this.setState((prevState) => {
      return {
        hamburger: !prevState.hamburger
      }
    })
  }
  
  toggleFooter(){
    this.setState((prevState) => {
      return {
        footer: !prevState.footer
      }
    })
  }

  setFooter(boolean){
    this.setState({
      footer: boolean
    })
  }

  setButton(boolean){
    this.setState({
      button: boolean
    })
  }

  img1(p1){
    this.setState({
      img1: p1
    });
  }

  img2(p2){
    this.setState({
      img2: p2
    });
  }

  img3(p3){
    this.setState({
      img3: p3
    });
  }

  img4(p4){
    this.setState({
      img4: p4
    });
  }

  img5(p5){
    this.setState({
      img5: p5
    });
  }

  img6(p6){
    this.setState({
      img6: p6
    });
  }

  render(){
    return (
      <div className="App">
        <header>

          <div className='logo-nav'>
            <div className='logo-box'>
              <img src={logo} alt='logo' />
            </div>
            <span className='nav-box'>
              <span className={this.state.hamburger ? 'hamburger' : ''}>
                <NavLink className='nav' activeClassName='active' exact to='/'>Home</NavLink>
                {this.props.user 
                  ? <NavLink className='nav' activeClassName='active' to='/profile' >Profile</NavLink> 
                  : <NavLink className='nav' activeClassName='active' to='/login-register' >Register/Login</NavLink>
                }
                <NavLink className='nav' activeClassName='active' to='/pokedex' >Pokedex</NavLink>
                <NavLink className='nav' activeClassName='active' to='/pokedex-kanto' >Kanto</NavLink>
                <NavLink className='nav' activeClassName='active' to='/pokedex-johto' >Johto</NavLink>
                <NavLink className='nav' activeClassName='active' to='/pokedex-hoenn' >Hoenn</NavLink>
                <NavLink className='nav' activeClassName='active' to='/pokedex-sinnoh' >Sinnoh</NavLink>
                <NavLink className='nav' activeClassName='active' to='/pokedex-unova' >Unova</NavLink>
                <NavLink className='nav' activeClassName='active' to='/pokedex-kalos' >Kalos</NavLink>
                <NavLink className='nav' activeClassName='active' to='/pokedex-alola' >Alola</NavLink>
                <NavLink className='nav' activeClassName='active' to='/itemdex' >Items</NavLink>
                <NavLink className='nav' activeClassName='active' to='/movedex' >Moves</NavLink>
                <NavLink className='nav' activeClassName='active' to='/search-by-move' >Move-Search</NavLink>
                <NavLink className='nav' activeClassName='active' to='/types' >Types</NavLink>
                {this.props.user && <button className='logout' onClick={() => {
                  axios.delete('/auth/logout').then(() => {
                    this.props.setUser(null);
                  });
                  window.alert('See you later!');
                }} >Logout</button>
                }
              </span>
              <button className='burger-ler' onClick={this.toggleBurger}>☰</button>
            </span>
          </div>

        </header>
        <Switch>
          <Route exact path='/' render={(props) => <Home setButton={this.setButton} setFooter={this.setFooter} {...props}/>} />
          <Route path='/login-register' render={(props) => <AuthComponent setButton={this.setButton} setFooter={this.setFooter} {...props}/>} />
          <Route path='/pokedex' render={(props) => <Pokedex url={'https://pokeapi.co/api/v2/pokemon?limit=807'} img1={this.img1} img2={this.img2} img3={this.img3} img4={this.img4} img5={this.img5} img6={this.img6} setButton={this.setButton} {...props}/>} />
          <Route path='/pokedex-kanto' render={(props) => <KantoDex img1={this.img1} img2={this.img2} img3={this.img3} img4={this.img4} img5={this.img5} img6={this.img6} setButton={this.setButton} {...props}/>} />
          <Route path='/pokedex-johto' render={(props) => <JohtoDex img1={this.img1} img2={this.img2} img3={this.img3} img4={this.img4} img5={this.img5} img6={this.img6} setButton={this.setButton} {...props}/>} />
          <Route path='/pokedex-hoenn' render={(props) => <HoennDex img1={this.img1} img2={this.img2} img3={this.img3} img4={this.img4} img5={this.img5} img6={this.img6} setButton={this.setButton} {...props}/>} />
          <Route path='/pokedex-sinnoh' render={(props) => <SinnohDex img1={this.img1} img2={this.img2} img3={this.img3} img4={this.img4} img5={this.img5} img6={this.img6} setButton={this.setButton} {...props}/>} />
          <Route path='/pokedex-unova' render={(props) => <UnovaDex img1={this.img1} img2={this.img2} img3={this.img3} img4={this.img4} img5={this.img5} img6={this.img6} setButton={this.setButton} {...props}/>} />
          <Route path='/pokedex-kalos' render={(props) => <KalosDex img1={this.img1} img2={this.img2} img3={this.img3} img4={this.img4} img5={this.img5} img6={this.img6} setButton={this.setButton} {...props}/>} />
          <Route path='/pokedex-alola' render={(props) => <AlolaDex img1={this.img1} img2={this.img2} img3={this.img3} img4={this.img4} img5={this.img5} img6={this.img6} setButton={this.setButton} {...props}/>} />
          <Route path='/itemdex' render={(props) => <ItemDex url={'https://pokeapi.co/api/v2/item?limit=866'} setButton={this.setButton} setFooter={this.setFooter} {...props}/>} />
          <Route path='/movedex' render={(props) => <MoveDex setButton={this.setButton} setFooter={this.setFooter} {...props}/>} />
          <Route path='/search-by-move' render={(props) => <SearchByMove setButton={this.setButton} setFooter={this.setFooter} {...props}/>} />
          <Route path='/types' render={(props) => <Types setButton={this.setButton} setFooter={this.setFooter} {...props}/>} />
          {this.props.user && <Route path='/profile' render={(props) => <Profile setButton={this.setButton} setFooter={this.setFooter} {...props}/>} />}
          <Route path='*' render={() => {return <Redirect to='/' />}} />
        </Switch>
        {this.state.button && this.props.user && <button className={this.state.footer ? 'move-up' : 'footer-toggle'} onClick={this.toggleFooter}></button>}
        
          <footer className={this.state.footer ? 'show' : ''}>
            <div>
              <button className='p1' onClick={() => this.addToTeam1()}>{this.state.img1 ? <img className='img1' src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.state.img1}.png`} alt='Team Slot 1'/> : 'Team Slot 1'}</button>
              <button className='p2' onClick={() => this.addToTeam2()}>{this.state.img2 ? <img className='img2' src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.state.img2}.png`} alt='Team Slot 2'/> : 'Team Slot 2'}</button>
              <button className='p3' onClick={() => this.addToTeam3()}>{this.state.img3 ? <img className='img3' src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.state.img3}.png`} alt='Team Slot 3'/> : 'Team Slot 3'}</button>
              <button className='p4' onClick={() => this.addToTeam4()}>{this.state.img4 ? <img className='img4' src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.state.img4}.png`} alt='Team Slot 4'/> : 'Team Slot 4'}</button>
              <button className='p5' onClick={() => this.addToTeam5()}>{this.state.img5 ? <img className='img5' src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.state.img5}.png`} alt='Team Slot 5'/> : 'Team Slot 5'}</button>
              <button className='p6' onClick={() => this.addToTeam6()}>{this.state.img6 ? <img className='img6' src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.state.img6}.png`} alt='Team Slot 6'/> : 'Team Slot 6'}</button>
            </div>
          </footer>
        
      </div>
    );
  }
}

function mapReduxStateToProps(reduxState){
  return reduxState
};
const mapDispatchToProps = {
  setUser
}
const invokedConnect = connect(mapReduxStateToProps, mapDispatchToProps);

export default invokedConnect(withRouter(App));