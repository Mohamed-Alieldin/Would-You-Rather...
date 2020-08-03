import React, {Component} from 'react'
import {connect} from 'react-redux'
import UnAnsweredQuestion from './UnAnsweredQuestion'
import AnsweredQuestion from './AnsweredQuestion'

class Question extends Component{

    render(){
        const {authedUser, users, id} = this.props

        let isAnswered = false
        if(Object.keys(users[authedUser].answers).includes(id)){
            isAnswered = true
        }

        console.log("The Question Preview Props", this.props)
        return(
            <div>
                {isAnswered && <AnsweredQuestion id={id}/>}
                {!isAnswered && <UnAnsweredQuestion id={id}/>}
            </div>
        )
    }
}

function mapStateToProps({authedUser, users}, props){
    const {id} = props.match.params
    return{
        authedUser, users, id
    }

}

export default connect(mapStateToProps)(Question)