import React, {Component} from 'react';
import '../sass-css/Home.scss';

export default class AuthComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
        }
    }

    componentDidMount(){
        this.props.setButton(false);
        this.props.setFooter(false);
        this.props.changeTitle('Login');
    }

    render(){
        return (
                <div className='main'>
                    <div className='backdrop'>
                        <div className='welcome'>
                            <h1>Welcome to the Ultimate Pokedex!</h1>
                            {/* <h2>The ultimate source for any Pokemon information you could ever need.</h2> */}
                            <img className='happy-pikachu' src='https://www.smashbros.com/assets_v2/img/fighter/pikachu/main.png' alt='happy pikachu' />
                        </div>
                        <div className='b-row'>
                            <div className='about'>
                                <h1>The Project</h1>
                                <p>This project was created to have data from all the Pokemon games in one easily-accessible place. All users can navigate through the different regions to find data on all Pokemon, items, moves, and types from the Pokemon games. Users that create an account can customize their own team by adding up to six Pokemon and giving them nicknames. All data is sourced from the <a href="https://pokeapi.co/">PokeAPI</a>.</p>
                            </div>
                            <div className='disclaimer'>
                                <div className='a-p'>
                                    <h1>About the Creator</h1>
                                    <p>My name is Joely and I'm a Full-Stack Software Developer. I created the Ultimate Pokedex while studying Web Developement at Devmountain. This site is still being maintained while I work on other projects.</p>
                                </div>
                                <img className='me' src='https://avatars.githubusercontent.com/u/55214971?v=4' alt='joely vernier smiling at the camera'/>
                            </div>
                        </div>
                        <div className='home-bottom'>
                            <div>
                                <a href="https://www.linkedin.com/in/joely-vernier/">Contact</a>
                            </div>
                            <div className='copyright'>
                                <small>&copy; Copyright 2021 Joely Vernier, All Rights Reserved</small>
                            </div>
                        </div>
                    </div>
                </div>
        )
    }
};