import React, {Component} from 'react'
import {connect} from 'react-redux'


class AnsweredQuestion extends Component{
    render(){
        const {authedUser, users, questions, id} = this.props
        const authorId = questions[id].author

        const optionOneVotes = questions[id].optionOne.votes.length
        const optionTwoVotes = questions[id].optionTwo.votes.length
        const totalVotes = optionOneVotes + optionTwoVotes


        return(
            <div>
                <h3>Asked By: {users[authorId].name}</h3>
                <img src={users[authorId].avatarURL} alt={`Avatar of ${users[authorId].name}`} className="avatar"/>
                <div>
                    <h4>Results</h4>
                    <div>
                        Would You rather {questions[id].optionOne.text} <br/>
                        Percentage: {(optionOneVotes*100/totalVotes).toFixed(2)}% <br/>
                        {optionOneVotes} out of {totalVotes} {totalVotes ===1 && "vote"} {totalVotes>1 && "votes"}
                    </div>
                    <div>
                        Would You rather {questions[id].optionTwo.text}  <br/>
                        Percentage: {(optionTwoVotes*100/totalVotes).toFixed(2)}%  <br/>
                        {optionTwoVotes} out of {totalVotes} {totalVotes ===1 && "vote"} {totalVotes>1 && "votes"}
                    </div>
                </div>
            </div>
        )
    }
}


function mapStateToProps({authedUser, users, questions},{id}){
    return{
        authedUser, users, questions, id
    }
}
export default connect(mapStateToProps)(AnsweredQuestion)