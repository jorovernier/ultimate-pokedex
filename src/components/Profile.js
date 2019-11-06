import React, {Component} from 'react';
import {connect} from 'react-redux';
import '../sass-css/Profile.scss';
import axios from 'axios';
import TeamPokemon from './TeamPokemon';

class Profile extends Component {
    constructor(props){
        super(props)
        this.state = {
            team: [],
            user_id: this.props.user,
            render: false,
            teamPokemon: []
        }
        this.getTeam = this.getTeam.bind(this);
    }

    componentDidMount(){
        this.getTeam();
        console.log(this.state.team)
        if(this.state.render){
            axios.get(`https://pokeapi.co/api/v2/pokemon/${this.state.team[1]}/`).then(response => {
            this.setState({
            teamPokemon: response.data
            });
            }).catch(err => console.log(err))
        }
    }

    getTeam(){
        axios.get(`/api/get_team`).then(response => {
            this.setState({
                team: response.data,
                render: true
            }); 
            console.log(this.state.team)
        }).catch(err => console.log(err))
    }

    render(){
        return(
            <div className='profile'>
                <div>
                    {this.props.user && this.props.user.username}    
                </div>
                {this.state.render && <div>
                    {this.state.team.map((team, index) => {
                        return (
                            <div>
                                <div>
                                    {team.p1 && <TeamPokemon key={index} pokemon={team.p1}/>}
                                    {team.p2 && <TeamPokemon key={index} pokemon={team.p2}/>}
                                    {team.p3 && <TeamPokemon key={index} pokemon={team.p3}/>}
                                    {team.p4 && <TeamPokemon key={index} pokemon={team.p4}/>}
                                    {team.p5 && <TeamPokemon key={index} pokemon={team.p5}/>}
                                    {team.p6 && <TeamPokemon key={index} pokemon={team.p6}/>}
                                </div>
                            </div>
                        )
                    })}
                </div>}
            </div>
        )
    }
}

function mapReduxStateToProps(reduxState){
    return reduxState
}

export default connect(mapReduxStateToProps)(Profile);