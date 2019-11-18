import React, {Component} from 'react';
import {connect} from 'react-redux';
import '../sass-css/Profile.scss';
import axios from 'axios';
import TeamPokemon from './TeamPokemon';
import {setUser} from '../psyducks/reducer';
// import ImageUploader from 'react-images-upload';

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
        this.removeFromTeam1 = this.removeFromTeam1.bind(this);
        this.removeFromTeam2 = this.removeFromTeam2.bind(this);
        this.removeFromTeam3 = this.removeFromTeam3.bind(this);
        this.removeFromTeam4 = this.removeFromTeam4.bind(this);
        this.removeFromTeam5 = this.removeFromTeam5.bind(this);
        this.removeFromTeam6 = this.removeFromTeam6.bind(this);
        this.changeName = this.changeName.bind(this);
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

    removeFromTeam1(){
        axios.post('/api/add_to_team1').then(this.getTeam())
    }
    removeFromTeam2(){
        axios.post('/api/add_to_team2').then(this.getTeam())
    }
    removeFromTeam3(){
        axios.post('/api/add_to_team3').then(this.getTeam())
    }
    removeFromTeam4(){
        axios.post('/api/add_to_team4').then(this.getTeam())
    }
    removeFromTeam5(){
        axios.post('/api/add_to_team5').then(this.getTeam())
    }
    removeFromTeam6(){
        axios.post('/api/add_to_team6').then(this.getTeam())
    }

    getTeam(){
        axios.get('/api/get_team').then(response => {
            this.setState({
                team: response.data,
                render: true
            })
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

    changeName(slot, nameInput){
        axios.put(`/api/change_name/p${slot}_name`, {name: nameInput}).then(() => {
            this.getTeam();
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
                            <img className='user-img' src={this.props.user.img_url} alt='If you are seeing this, your url was invalid. Please try again!'/>
                            <button onClick={() => {this.toggleEdit(); this.changeLabel();}}>{this.state.label}</button>
                            {this.state.edit
                              ? <div>
                                    <input onChange={(e) => {this.universalInput('imgInput', e.target.value)}} placeholder='image url'/>
                                    <button onClick={() => {this.state.imgInput ? this.editPic() : (window.alert("You can't change your profile picture to nothing!")); this.toggleEdit(); this.changeLabel();}}>Save</button>
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
                                            {team.p1 && <TeamPokemon pokemon={team.p1} name={team.p1_name} remove={this.removeFromTeam1} save={this.changeName} slot={1}/>}
                                            {team.p2 && <TeamPokemon pokemon={team.p2} name={team.p2_name} remove={this.removeFromTeam2} save={this.changeName} slot={2}/>}
                                        </span>
                                        <span className='row2'>
                                            {team.p3 && <TeamPokemon pokemon={team.p3} name={team.p3_name} remove={this.removeFromTeam3} save={this.changeName} slot={3}/>}
                                            {team.p4 && <TeamPokemon pokemon={team.p4} name={team.p4_name} remove={this.removeFromTeam4} save={this.changeName} slot={4}/>}
                                        </span>
                                        <span className='row3'>
                                            {team.p5 && <TeamPokemon pokemon={team.p5} name={team.p5_name} remove={this.removeFromTeam5} save={this.changeName} slot={5}/>}
                                            {team.p6 && <TeamPokemon pokemon={team.p6} name={team.p6_name} remove={this.removeFromTeam6} save={this.changeName} slot={6}/>}
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