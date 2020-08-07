import React, {Component} from 'react'
import {connect} from 'react-redux'
import UnAnsweredQuestion from './UnAnsweredQuestion'
import AnsweredQuestion from './AnsweredQuestion'
import {withRouter} from 'react-router-dom'

class Question extends Component{

    render(){
        const {authedUser, users,questions, id} = this.props

        let isAnswered = false
        if(Object.keys(users[authedUser].answers).includes(id)){
            isAnswered = true
        }

        return(
            <div>
                {isAnswered && <AnsweredQuestion id={id}/>}
                {!isAnswered && <UnAnsweredQuestion id={id}/>}
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