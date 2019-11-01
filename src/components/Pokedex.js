import React, {Component} from 'react';
import {connect} from 'react-redux';

class Pokedex extends Component {
    render(){
        console.log(this.props)
        return(
            <div>
                Hello
            </div>
        )
    }
}

function mapReduxStateToProps(reduxState){
    return reduxState
}

export default connect(mapReduxStateToProps)(Pokedex);