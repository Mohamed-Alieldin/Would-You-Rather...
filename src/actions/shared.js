
import {receiveUsers} from '../actions/users'
import {receiveQuestions} from '../actions/questions'
//import {setAuthedUser} from '../actions/authedUser'
import {showLoading, hideLoading} from 'react-redux-loading'
import {_saveQuestion, _saveQuestionAnswer, _getQuestions, _getUsers} from '../utils/_DATA'
import {addQuestion, saveQuestionAnswer} from './questions'
import {addUserQuestion, saveUserAnswer} from './users'

export function handleInitialData(){
    return (dispatch) =>{
        dispatch(showLoading())
        _getUsers()
        .then((users)=>{
            dispatch(receiveUsers(users))
            
        })

        _getQuestions()
        .then((questions) => {
            dispatch(receiveQuestions(questions))
            dispatch(hideLoading())
        })


    }
}



export function handleAddQuestion(question){
    return (dispatch) =>{
        console.log("sharedAction",question)
         _saveQuestion(question)
         .then((newQuestion) => {
            dispatch(addQuestion(newQuestion))
            dispatch(addUserQuestion(newQuestion))
         })
    }
}


export function handleSaveAnswer(answerModel){
    return(dispatch) =>{
        console.log("ModelAnswer From Shared Reducer", answerModel)
        _saveQuestionAnswer(answerModel)
        .then(() => {
            dispatch(saveQuestionAnswer(answerModel))
            dispatch(saveUserAnswer(answerModel))
        })
    }
}