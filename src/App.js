import React from 'react';
import './App.css';
import AuthComponent from './components/AuthComponent';
import Profile from './components/Profile';
import Pokedex from './components/Pokedex';
import {Switch, NavLink, Route, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {setUser} from './psyducks/reducer';
import axios from 'axios';

class App extends React.Component {
  render(){
    return (
      <div className="App">
        <header>

          <div className='logo-nav'>
            {/* <div className='logo-box'>
              <img src={logo} alt='logo' />
            </div> */}
            <div className='nav-box'>
              <NavLink activeClassName='active' exact to='/' >Home</NavLink>
              <NavLink activeClassName='active' to='/pokedex' >Pokedex</NavLink>
              <NavLink activeClassName='active' to='/profile' >Profile</NavLink>
              {this.props.user && <button onClick={() => {
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
          <Route path='/profile' component={Profile} />
          <Route path='*' render={() => {
            return (
              <div className='get-out'>
                <img src='https://i.kym-cdn.com/entries/icons/original/000/027/475/Screen_Shot_2018-10-25_at_11.02.15_AM.png' alt='surprised pikachu' />
                You shouldn't be here!
              </div>)
          }} />
        </Switch>
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
