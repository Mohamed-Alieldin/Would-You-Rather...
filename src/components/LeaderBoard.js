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
            <ul>
                {
                orderedUsers.map((id)=>                    
                        <li key={id}>
                            <UserRank id ={id} rank={orderedUsers.indexOf(id)+1}/>
                        </li>                        
                    )
                }
            </ul>
        )
    }
}


function mapStateToProps({users}){
    return{
        users
    }
}

export default connect(mapStateToProps)(LeaderBoard)