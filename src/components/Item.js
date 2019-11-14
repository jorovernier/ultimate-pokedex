import React, {Component} from 'react';
import '../sass-css/Item.scss';

export default class Item extends Component {
    prettify(name){
        return name.split('-').map(function capitalize(part) {
            return part.charAt(0).toUpperCase() + part.slice(1);
        }).join(' ');
    }
    render(){
        const {item} = this.props;
        let name = item.name;
        let fixedName = item.name;
        if(fixedName.startsWith('tm')){
            fixedName = 'tm-normal'
        } else if(fixedName.startsWith('hm')){
            fixedName = 'hm-normal'
        };

        return (
            <div className='item-box'>
                <div className='item'>
                    <button className='sprite' onClick={() => {this.props.action(name)}}>
                        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/${fixedName}.png`} alt={`sprite of ${name}`} />
                    </button>
                    <div className='name'> {this.prettify(name)} </div>
                </div>
            </div>
        );
    }
}