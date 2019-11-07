import React from 'react';
import axios from 'axios';
import {Switch, NavLink, Route, withRouter, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {setUser} from './psyducks/reducer';
import './sass-css/App.scss';
import logo from './pokeball-icon.png';
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
      profile: false
    }
    this.addToTeam1 = this.addToTeam1.bind(this);
    this.addToTeam2 = this.addToTeam2.bind(this);
    this.addToTeam3 = this.addToTeam3.bind(this);
    this.addToTeam4 = this.addToTeam4.bind(this);
    this.addToTeam5 = this.addToTeam5.bind(this);
    this.addToTeam6 = this.addToTeam6.bind(this);
  }

  addToTeam1(){
    axios.post('/api/add_to_team1', this.props.id)
  }
  addToTeam2(){
    axios.post('/api/add_to_team2', this.props.id)
  }
  addToTeam3(){
    axios.post('/api/add_to_team3', this.props.id)
  }
  addToTeam4(){
    axios.post('/api/add_to_team4', this.props.id)
  }
  addToTeam5(){
    axios.post('/api/add_to_team5', this.props.id)
  }
  addToTeam6(){
    axios.post('/api/add_to_team6', this.props.id)
  }

  render(){
    console.log(this.props.id)
    console.log(this.state.profile)
    return (
      <div className="App">
        <header>

          <div className='logo-nav'>
            <div className='logo-box'>
              <img src={logo} alt='logo' />
            </div>
            <div className='nav-box'>
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
            </div>
          </div>

        </header>
        <Switch>
          <Route exact path='/' component={AuthComponent} />
          <Route path='/pokedex' render={(props) => <Pokedex url={'http://pokeapi.co/api/v2/pokemon?limit=807'} {...props}/>} />
          <Route path='/pokedex-kanto' component={KantoDex} />
          <Route path='/pokedex-johto' component={JohtoDex} />
          <Route path='/pokedex-hoenn' component={HoennDex} />
          <Route path='/pokedex-sinnoh' component={SinnohDex} />
          <Route path='/pokedex-unova' component={UnovaDex} />
          <Route path='/pokedex-kalos' component={KalosDex} />
          <Route path='/pokedex-alola' component={AlolaDex} />
          {this.props.user && 
            <Route path='/profile' component={Profile}/>
          }
          <Route path='*' render={() => {
            return <Redirect to='/' />
          }} />
        </Switch>
        {(this.props.user && this.state.profile === false)
          && (<footer>
            <div className='footer'>
              <button className='p1' onClick={() => this.addToTeam1()}>Add to Team</button>
              <button className='p2' onClick={() => this.addToTeam2()}>Add to Team</button>
              <button className='p3' onClick={() => this.addToTeam3()}>Add to Team</button>
              <button className='p4' onClick={() => this.addToTeam4()}>Add to Team</button>
              <button className='p5' onClick={() => this.addToTeam5()}>Add to Team</button>
              <button className='p6' onClick={() => this.addToTeam6()}>Add to Team</button>
            </div>
          </footer>)}
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

// original path='*' return until changed to redirect
// <div className='get-out'>
//    <img src='https://i.kym-cdn.com/entries/icons/original/000/027/475/Screen_Shot_2018-10-25_at_11.02.15_AM.png' alt='surprised pikachu' />
//    You shouldn't be here!
//  </div> */}