import React from 'react';
import axios from 'axios';
import {Switch, NavLink, Route, withRouter} from 'react-router-dom';
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
  render(){
    return (
      <div className="App">
        <header>

          <div className='logo-nav'>
            <div className='logo-box'>
              <img src={logo} alt='logo' />
            </div>
            <div className='nav-box'>
              {!this.props.user && <NavLink className='nav' activeClassName='active' exact to='/' >Register</NavLink>}
              <NavLink className='nav' activeClassName='active' to='/pokedex' >Pokedex</NavLink>
              <NavLink className='nav' activeClassName='active' to='/pokedex-kanto' >Kanto</NavLink>
              <NavLink className='nav' activeClassName='active' to='/pokedex-johto' >Johto</NavLink>
              <NavLink className='nav' activeClassName='active' to='/pokedex-hoenn' >Hoenn</NavLink>
              <NavLink className='nav' activeClassName='active' to='/pokedex-sinnoh' >Sinnoh</NavLink>
              <NavLink className='nav' activeClassName='active' to='/pokedex-unova' >Unova</NavLink>
              <NavLink className='nav' activeClassName='active' to='/pokedex-kalos' >Kalos</NavLink>
              <NavLink className='nav' activeClassName='active' to='/pokedex-alola' >Alola</NavLink>
              {this.props.user && <NavLink className='nav' activeClassName='active' to='/profile' >Profile</NavLink>}
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
          <Route path='/pokedex' component={Pokedex} />
          <Route path='/pokedex-kanto' component={KantoDex} />
          <Route path='/pokedex-johto' component={JohtoDex} />
          <Route path='/pokedex-hoenn' component={HoennDex} />
          <Route path='/pokedex-sinnoh' component={SinnohDex} />
          <Route path='/pokedex-unova' component={UnovaDex} />
          <Route path='/pokedex-kalos' component={KalosDex} />
          <Route path='/pokedex-alola' component={AlolaDex} />
          {this.props.user && <Route path='/profile' component={Profile} />}
          <Route path='*' render={() => {
            return (
              <div className='get-out'>
                <img src='https://i.kym-cdn.com/entries/icons/original/000/027/475/Screen_Shot_2018-10-25_at_11.02.15_AM.png' alt='surprised pikachu' />
                You shouldn't be here!
              </div>)
          }} />
        </Switch>
        {this.props.user && <footer>
          <div className='footer'>this will contain buttons</div>
        </footer>}
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
