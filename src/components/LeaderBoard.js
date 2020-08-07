import React, {Component} from 'react'
import {connect} from 'react-redux'
import UserRank from './UserRank'

class LeaderBoard extends Component{
    render(){

        const users = this.props.users
        const orderedUsers = Object.keys(users).sort((a,b) => 
        (users[b].questions.length + Object.keys(users[b].answers).length) -
        (users[a].questions.length + Object.keys(users[a].answers).length)
        )

        return(
            <div className="row">            
            <ul className="col s6 offset-s3 z-depth-5 center-align">
                {
                orderedUsers.map((id)=>                    
                        <li key={id}>
                            <UserRank id ={id} rank={orderedUsers.indexOf(id)+1}/>
                        </li>                        
                    )
                }
            </ul>
            </div>
        )
    }
}


function mapStateToProps({users}){
    return{
        users
    }
}

export default connect(mapStateToProps)(LeaderBoard)