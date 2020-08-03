import React, {Component} from 'react'
import {connect} from 'react-redux'
import QuestionDoor from './QuestionDoor'

function QuestionsList(props){

    
        const {questions, listQuestions} = props
        return(
            <div>
                <ul>
                    {listQuestions.map((id) => {
                        return <li key={id}><QuestionDoor id={id}/></li>
                    })}
                </ul>
            </div>
        )
    
}

function mapStateToProps({questions}, {listQuestions}){
    return{
        questions,listQuestions
    }
}
export default connect(mapStateToProps)(QuestionsList)