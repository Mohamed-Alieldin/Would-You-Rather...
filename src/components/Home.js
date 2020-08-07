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
        let answeredClass = this.state.preview ==='answered'? 'active':''
        let unansweredClass = this.state.preview ==='unanswered'? 'active':''
        return(
            <div className="row center-align">
                <div className="col s8 offset-s2 z-depth-5"> 
                <ul className="tabs">
                <li className="tab col s6" onClick={this.previewUnAnsweredQuestions} key="unanswered">
                    <a className={unansweredClass} style={{fontWeight: "bold"}}>UnAnswered Questions</a></li>
                <li className="tab col s6" onClick={this.previewAnsweredQuestions} key="answered">
                    <a className={answeredClass} style={{fontWeight: "bold"}}>Answered Questions</a></li>

                </ul>                   
                    <div className="divider"></div>
                    <div className="section">
                    {this.state.preview === "unanswered"?
                    <QuestionsList listQuestions={unAnsweredQuestions}/>:
                    <QuestionsList listQuestions ={answeredQuestions}/>
                    }
                    </div>
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