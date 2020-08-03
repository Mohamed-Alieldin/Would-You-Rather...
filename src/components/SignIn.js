import React, {Component} from 'react'
import {connect} from 'react-redux'
import {setAuthedUser} from '../actions/authedUser'
import {withRouter} from 'react-router-dom'

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
            <div>
                <form>
                <select onChange={this.handleSelect} defaultValue={'DEFAULT'} >
                <option value="DEFAULT" disabled  key={0}>Select User</option>
                {
                    Object.keys(users).map((id) => 
                    <option value={id} key={id}>{users[id].name}</option>
                    )
                }
                </select>
                <button  type='button' disabled={selected ===false} onClick={this.handleLogIn}>
                        SignIn
                </button>
                </form>
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