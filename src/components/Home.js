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
                    <div className='welcome'>Welcome to the Ultimate Pokedex!</div>
                    <p className='directions'>Click on the links in the header to search for pokemon and items. If you'd like to add pokemon to your team, go to the register page and create an account or login if you've already made one.</p>
                </div>
            </div>
        )
    }
};