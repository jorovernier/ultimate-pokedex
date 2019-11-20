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
    }

    render(){
        return (
            <div className='main'>
                <div className='welcome'>
                    <h1>Welcome to the Ultimate Pokedex!</h1>
                    <img className='happy-pikachu' src='https://www.smashbros.com/assets_v2/img/fighter/pikachu/main.png' alt='happy pikachu' />
                </div>
                <div className='b-row'>
                    <div className='directions'>
                        <h1>Directions</h1>
                        <p>Click on the links in the header to find information on Pokemon, items, and attacks. On the Pokedex pages, click the pokemon image to get it's information. If you'd like to add Pokemon to your team, go to the register page and create an account or login if you've already made one. To add Pokemon, look for the black arrow at the bottom of the screen on the Pokedex pages. This will bring up your footer!</p>
                    </div>
                    <div className='disclaimer'>
                        <h1>Disclaimer</h1>
                        <p>This site is a work in progress! There are some problems such as slowdown upon searching on the Move Search page and flexbox issues on Safari. All information is from the pokeapi.</p>
                    </div>
                </div>
            </div>
        )
    }
};