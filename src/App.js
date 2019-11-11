import React from 'react';
import axios from 'axios';
import {Switch, NavLink, Route, withRouter, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {setUser} from './psyducks/reducer';
import './sass-css/App.scss';
import logo from './images/pokeball-icon.png';
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

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      hamburger: false,
      footer: false,
      button: false
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
  }

  addToTeam1(){
    axios.post('/api/add_to_team1', {p1: this.props.id})
  }
  addToTeam2(){
    axios.post('/api/add_to_team2', {p2: this.props.id})
  }
  addToTeam3(){
    axios.post('/api/add_to_team3', {p3: this.props.id})
  }
  addToTeam4(){
    axios.post('/api/add_to_team4', {p4: this.props.id})
  }
  addToTeam5(){
    axios.post('/api/add_to_team5', {p5: this.props.id})
  }
  addToTeam6(){
    axios.post('/api/add_to_team6', {p6: this.props.id})
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
                {this.props.user 
                  ? <NavLink className='nav' activeClassName='active' to='/profile' >Profile</NavLink> 
                  : <NavLink className='nav' activeClassName='active' exact to='/' >Register/Login</NavLink>
                }
                <NavLink className='nav' activeClassName='active' to='/pokedex' >Pokedex</NavLink>
                <NavLink className='nav' activeClassName='active' to='/pokedex-kanto' >Kanto</NavLink>
                <NavLink className='nav' activeClassName='active' to='/pokedex-johto' >Johto</NavLink>
                <NavLink className='nav' activeClassName='active' to='/pokedex-hoenn' >Hoenn</NavLink>
                <NavLink className='nav' activeClassName='active' to='/pokedex-sinnoh' >Sinnoh</NavLink>
                <NavLink className='nav' activeClassName='active' to='/pokedex-unova' >Unova</NavLink>
                <NavLink className='nav' activeClassName='active' to='/pokedex-kalos' >Kalos</NavLink>
                <NavLink className='nav' activeClassName='active' to='/pokedex-alola' >Alola</NavLink>
                {this.props.user && <button className='logout' onClick={() => {
                  axios.delete('/auth/logout').then(() => {
                    this.props.setUser(null);
                  })
                }} >Logout</button>
                }
              </span>
              <button className='burger-ler' onClick={this.toggleBurger}>☰</button>
            </span>
          </div>

        </header>
        <Switch>
          <Route exact path='/' render={(props) => <AuthComponent setButton={this.setButton} setFooter={this.setFooter} {...props}/>} />
          <Route path='/pokedex' render={(props) => <Pokedex url={'http://pokeapi.co/api/v2/pokemon?limit=807'} setButton={this.setButton} {...props}/>} />
          <Route path='/pokedex-kanto' render={(props) => <KantoDex setButton={this.setButton} {...props}/>} />
          <Route path='/pokedex-johto' render={(props) => <JohtoDex setButton={this.setButton} {...props}/>} />
          <Route path='/pokedex-hoenn' render={(props) => <HoennDex setButton={this.setButton} {...props}/>} />
          <Route path='/pokedex-sinnoh' render={(props) => <SinnohDex setButton={this.setButton} {...props}/>} />
          <Route path='/pokedex-unova' render={(props) => <UnovaDex setButton={this.setButton} {...props}/>} />
          <Route path='/pokedex-kalos' render={(props) => <KalosDex setButton={this.setButton} {...props}/>} />
          <Route path='/pokedex-alola' render={(props) => <AlolaDex setButton={this.setButton} {...props}/>} />
          {this.props.user && <Route path='/profile' render={(props) => <Profile setButton={this.setButton} setFooter={this.setFooter} {...props}/>} />}
          <Route path='*' render={() => {return <Redirect to='/' />}} />
        </Switch>
        {this.state.button && this.props.user && <button className={this.state.footer ? 'move-up' : 'footer-toggle'} onClick={this.toggleFooter}></button>}
        
          <footer className={this.state.footer ? 'show' : ''}>
            <div>
              <button className='p1' onClick={() => this.addToTeam1()}>Team Slot 1</button>
              <button className='p2' onClick={() => this.addToTeam2()}>Team Slot 2</button>
              <button className='p3' onClick={() => this.addToTeam3()}>Team Slot 3</button>
              <button className='p4' onClick={() => this.addToTeam4()}>Team Slot 4</button>
              <button className='p5' onClick={() => this.addToTeam5()}>Team Slot 5</button>
              <button className='p6' onClick={() => this.addToTeam6()}>Team Slot 6</button>
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