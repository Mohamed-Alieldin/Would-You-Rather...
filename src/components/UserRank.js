import React, {Component} from 'react'
import {connect} from 'react-redux'


function UserRank (props){
    
        const {users, id, rank } = props
        const answeredQuestionsCount = Object.keys(users[id].answers).length
        const createdQuestionsCount = users[id].questions.length
        const score = answeredQuestionsCount + createdQuestionsCount


        return(
            <div>
                {rank === 1 && <span>This is number One</span>}
                {rank === 2 && <span>This is number Two</span>}
                {rank === 3 && <span>This is number Three</span>}
                
                <h3>{users[id].name}</h3>
                <img src={users[id].avatarURL} alt={`Avatar of ${users[id].name}`} className="avatar"/>
                <div>
                <div>Answered Questions { answeredQuestionsCount}</div>
                <div>Created Questions { createdQuestionsCount}</div>
                <div>Score: {score}</div>
                </div>

            </div>
        )
    
}


function mapStateToFunction({users}, {id, rank}){
    return{
        users,id, rank
    }
}
export default connect(mapStateToFunction)(UserRank)