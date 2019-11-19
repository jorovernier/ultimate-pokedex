import React, {Component} from 'react';
import '../sass-css/Move.scss';

export default class Pokemon extends Component{
    prettify(move){
        return move.split('-').map(function capitalize(part) {
            return part.charAt(0).toUpperCase() + part.slice(1);
        }).join(' ');
    }
    render(){
        const {move} = this.props;
        let moveName = move.name;
        return (
            <div className='move-box'>
                <button className='move' onClick={() => {this.props.action(moveName)}}>{this.prettify(moveName)}</button>
            </div>
        );
    }
}