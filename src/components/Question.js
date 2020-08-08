import React, {Component} from 'react'
import {connect} from 'react-redux'
import UnAnsweredQuestion from './UnAnsweredQuestion'
import AnsweredQuestion from './AnsweredQuestion'
import {withRouter} from 'react-router-dom'
import NotFound from './NotFound'
class Question extends Component{

    render(){
        const {authedUser, users,questions, id} = this.props

        
        let isExist = false
        if(Object.keys(questions).includes(id)){
            isExist = true
        }

        let isAnswered = false
        if(Object.keys(users[authedUser].answers).includes(id)){
            isAnswered = true
        }

        return(
            <div>
                {!isExist && <NotFound/>}
                {isExist&& isAnswered && <AnsweredQuestion id={id}/>}
                {isExist&& !isAnswered && <UnAnsweredQuestion id={id}/>}
            </div>
        )
    }
}

function mapStateToProps({authedUser, users, questions}, props){
    const {id} = props.match.params
    return{
        authedUser, users,questions ,id
    }

}

export default withRouter(connect(mapStateToProps)(Question))