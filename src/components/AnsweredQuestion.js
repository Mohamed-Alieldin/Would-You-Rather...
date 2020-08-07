import React, {Component} from 'react'
import {connect} from 'react-redux'


class AnsweredQuestion extends Component{
    render(){
        const {authedUser, users, questions, id} = this.props
        const authorId = questions[id].author

        const optionOneVotes = questions[id].optionOne.votes.length
        const optionTwoVotes = questions[id].optionTwo.votes.length
        const totalVotes = optionOneVotes + optionTwoVotes

        const userVote = users[authedUser].answers[id]

        return(
            <div className="row">
                <div className="col s8 offset-s2 z-depth-5 center-align card horizontal">

                <div className="card-image">
                    <img src={users[authorId].avatarURL} alt={`Avatar of ${users[authorId].name}`} className="avatar2"/>
                </div>
                
                <div className="card-stacked">
                <span className="center-align">Asked By: <h3>{users[authorId].name}</h3></span>
                
                <div className="card-content left-align">
                    <h6 className="center-align">Results</h6>
                    <div className="section">
                        <span style={{fontWeight: "bold"}}>Would you rather {questions[id].optionOne.text}?</span>
                         {userVote==='optionOne' && <span className="new badge" data-badge-caption="your vote"></span>}
                        <div className="row">
                            <h5 className="col s10">{(optionOneVotes*100/totalVotes).toFixed(2)}%</h5>
                            <h5 className="col s2 right-align">{optionOneVotes}/{totalVotes}</h5>
                        
                        <div className="progress">
                        <div className="determinate" style={{width: (optionOneVotes*100/totalVotes).toFixed(2)+'%'}}></div>
                        </div>                   
                        </div>
                    </div>

                    <div className="section">
                        <span style={{fontWeight: "bold"}}>Would you rather {questions[id].optionTwo.text}? </span>
                        {userVote==='optionTwo' && <span className="new badge" data-badge-caption="your vote"></span>}
                        <div className="row">
                            <h5 className="col s10">{(optionTwoVotes*100/totalVotes).toFixed(2)}%</h5>
                            <h5 className="col s2 right-align">{optionTwoVotes}/{totalVotes}</h5>
                        
                        <div className="progress">
                        <div className="determinate" style={{width: (optionTwoVotes*100/totalVotes).toFixed(2)+'%'}}></div>
                        </div>                   
                        </div>
                    </div>
                </div>
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