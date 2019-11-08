import React, {Component} from 'react';
import {connect} from 'react-redux';
import '../sass-css/Profile.scss';
import axios from 'axios';
import TeamPokemon from './TeamPokemon';
import {setUser} from '../psyducks/reducer';

class Profile extends Component {
    constructor(props){
        super(props)
        this.state = {
            team: [],
            user_id: this.props.user,
            render: false,
            teamPokemon: [],
            imgInput: '',
            edit: false,
            label: 'Edit'
        }
        this.getTeam = this.getTeam.bind(this);
        this.editPic = this.editPic.bind(this);
        this.universalInput = this.universalInput.bind(this);
    }

    componentDidMount(){
        this.props.setButton(false);
        this.props.setFooter(false);
        this.getTeam();
        if(this.state.render){
            axios.get(`https://pokeapi.co/api/v2/pokemon/${this.state.team[1]}/`).then(response => {
            this.setState({
            teamPokemon: response.data
            });
            }).catch(err => console.log(err))
        }
    }

    getTeam(){
        axios.get('/api/get_team').then(response => {
            this.setState({
                team: response.data,
                render: true
            });
        }).catch(err => console.log(err))
    }

    toggleEdit(){
        this.setState({
            edit: !this.state.edit
        })
    }

    changeLabel(){
        if(this.state.label === 'Edit'){
        this.setState({
          label: 'Cancel'
        })
        } else if(this.state.label === 'Cancel'){
          this.setState({
            label: 'Edit'
          })
        }
    }

    editPic(){
        axios.put('/api/edit_profile_pic', {img_url: this.state.imgInput}).then(response => {
            this.props.setUser(response.data[0]);
        })
    }

    universalInput(prop, val){
        this.setState({
            [prop]: val
        })
    }

    render(){
        return(
            <div className='profile'>
                <div className='interface'>
                    <div className='user-info'>
                        <div className='image-box'>
                            <img className='user-img' src={this.props.user.img_url} alt='user profile'/>
                            <button onClick={() => {this.toggleEdit(); this.changeLabel();}}>{this.state.label}</button>
                            {this.state.edit
                              ? <div>
                                    <input onChange={(e) => this.universalInput('imgInput', e.target.value)} placeholder='image url'/>
                                    <button onClick={() => {this.editPic(); this.toggleEdit(); this.changeLabel();}}>Save</button>
                                </div>
                              : <></>
                            }
                        </div>
                        <div className='name-box'>
                            {this.props.user && this.props.user.username}  
                        </div>
                    </div>
                    <div className='just-a-background-div'>
                        {this.state.render && <div className='user-team-holder'>
                            {this.state.team.map((team, index) => {
                                return (
                                    <div className='user-team' key={index}>
                                        <span className='row1'>
                                            {team.p1 && <TeamPokemon pokemon={team.p1}/>}
                                            {team.p2 && <TeamPokemon pokemon={team.p2}/>}
                                        </span>
                                        <span className='row2'>
                                            {team.p3 && <TeamPokemon pokemon={team.p3}/>}
                                            {team.p4 && <TeamPokemon pokemon={team.p4}/>}
                                        </span>
                                        <span className='row3'>
                                            {team.p5 && <TeamPokemon pokemon={team.p5}/>}
                                            {team.p6 && <TeamPokemon pokemon={team.p6}/>}
                                        </span>
                                    </div>
                                )
                            })}
                        </div>}
                    </div>
                </div>
            </div>
        )
    }
}

function mapReduxStateToProps(reduxState){
    return reduxState
}
const mapDispatchToProps = {
    setUser
}
const invokedConnect = connect(mapReduxStateToProps, mapDispatchToProps);

export default invokedConnect(Profile);