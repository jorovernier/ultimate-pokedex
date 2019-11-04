import React, {Component} from 'react';
import {connect} from 'react-redux';
import '../sass-css/Profile.scss';

class Profile extends Component {
    render(){
        console.log(this.props)
        return(
            <div className='profile'>
                {this.props.user && this.props.user.username}
            </div>
        )
    }
}

function mapReduxStateToProps(reduxState){
    return reduxState
}

export default connect(mapReduxStateToProps)(Profile);