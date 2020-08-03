import React, {Component} from 'react'
import {connect} from 'react-redux'
import QuestionsList from './QuestionsList'

class Home extends Component{
    state={
        preview:"unanswered"
    }

    previewAnsweredQuestions = () =>{
        return this.setState({
            preview:"answered"
        })
    }

    previewUnAnsweredQuestions = () =>{
        return this.setState({
            preview:"unanswered"
        })
    }


    render(){
        const {authedUser, users, questions} = this.props
        const answeredQuestions = Object.keys(users[authedUser].answers)
            .sort((a,b)=> questions[b].timestamp - questions[a].timestamp)       
        const unAnsweredQuestions = Object.keys(questions)
            .filter((item) => !answeredQuestions.includes(item))
            .sort((a,b)=> questions[b].timestamp - questions[a].timestamp)

        return(
            <div>
                <div>
                    <h3 onClick={this.previewAnsweredQuestions}>Answered Questions</h3>
                    <h3 onClick={this.previewUnAnsweredQuestions}>UnAnsweredQuestions</h3>
                    {this.state.preview === "unanswered"?
                    <QuestionsList listQuestions={unAnsweredQuestions}/>:
                    <QuestionsList listQuestions ={answeredQuestions}/>
                    }
                </div>
            </div>
        )
    }
}


function mapStateToProps({authedUser, users, questions}){
    return{
        authedUser,users,questions
    }

}

export default connect(mapStateToProps)(Home)