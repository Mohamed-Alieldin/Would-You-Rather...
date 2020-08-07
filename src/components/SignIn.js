import React, {Component} from 'react'
import {connect} from 'react-redux'
import {setAuthedUser} from '../actions/authedUser'
import {withRouter} from 'react-router-dom'
//import gamePic from '/images/game.png'

class SignIn extends Component {
    state={
        selected:false,
        id:''
    }

    handleLogIn = () =>{
        const id = this.state.id
        const {dispatch} = this.props
        dispatch(setAuthedUser(id))
        this.props.history.push("/")
    }

    handleSelect = (e) =>{
        const id = e.target.value
        this.setState({
            selected:true,
            id
        })
    }

    render(){
        const {selected} = this.state
        const {users} = this.props

        return(
            <div className="row">
                <div className="col s8 offset-s2 z-depth-5 center-align">
                <h4 className="center-align">Welcome to The Would You Rather App!</h4>
                <div className="divider"></div>
                <h6 className="section">Please, login to continue</h6>                
                <img src={'/images/wur2.jpg'} className="section App-logo"/>                
                <form>
                <div className="col s4 offset-s4 center-align">
                <div className="section">
                    <select className="browser-default" onChange={this.handleSelect} defaultValue={'DEFAULT'} >
                    <option value="DEFAULT" disabled  key={0}>Select User</option>
                    {
                        Object.keys(users).map((id) => 
                        <option value={id} key={id}>{users[id].name}</option>
                        )
                    }
                </select>
                </div>

                <div className="section">      
                <button  type='button' className='waves-effect waves-light btn pulse' disabled={selected ===false} onClick={this.handleLogIn}>
                        LogIn
                </button>
                </div> 
                </div>
                </form>
                </div>
            </div>
        )
    }
}


function mapStateToProps({users}){
    return{
        users:users
    }
}
export default withRouter(connect(mapStateToProps)(SignIn))

