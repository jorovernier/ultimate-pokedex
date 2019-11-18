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
                <div className='text'>
                    <div className='top'>
                        <div className='welcome'>Welcome to the Ultimate Pokedex!</div>
                        <img src='https://www.smashbros.com/assets_v2/img/fighter/pikachu/main.png' alt='happy pikachu' />
                    </div>
                    <p className='directions'>Click on the links in the header to search for Pokemon and items. If you'd like to add Pokemon to your team, go to the register page and create an account or login if you've already made one. To add Pokemon, look for the black arrow at the bottom of the screen.</p>
                </div>
            </div>
        )
    }
};