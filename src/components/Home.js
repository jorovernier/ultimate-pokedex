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
                <div className='welcome'>
                    <h1>Welcome to the Ultimate Pokedex!</h1>
                    <img className='happy-pikachu' src='https://www.smashbros.com/assets_v2/img/fighter/pikachu/main.png' alt='happy pikachu' />
                </div>
                <div className='b-row'>
                    <div className='about'>
                        <h1>About</h1>
                        <p>This is my first full-stack website. I wanted to make something that would be useful so I decided to make this Pokedex! I get all the information from the <a href='https://pokeapi.co/'>Pokeapi</a>. If you find a bug that I somehow haven't noticed, you can reach me through my <a href='https://github.com/jorovernier'>github</a>. Thanks for visiting and have fun!</p>
                    </div>
                    <div className='disclaimer'>
                        <h1>Page Information</h1>
                        <p>To get information on a pokemon or item from their respective pages, click on it's sprite. To get information on a move from the Moves page, click on it's name. If you log in, look for the black arrow at the bottom of the Pokedex pages to add pokemon to your team.</p>
                    </div>
                </div>
            </div>
        )
    }
};