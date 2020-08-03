import {RECEIVE_USERS} from '../actions/users'
import {ADD_USER_QUESTION, SAVE_USER_ANSWER} from '../actions/users'

export default function users(state={},action){
    switch (action.type){
        case RECEIVE_USERS:
            return{
                ...state,
                ...action.users
            }
        case ADD_USER_QUESTION:
            return{
                ...state,
                [action.question.author]: {
                    ...state[action.question.author],
                    questions:state[action.question.author].questions.concat([action.question.id])
                }
            }

        case SAVE_USER_ANSWER:
            return{
                ...state,
                [action.answerModel.authedUser]:{
                    ...state[action.answerModel.authedUser],
                    answers:{
                        ...state[action.answerModel.authedUser].answers,
                        [action.answerModel.qid]:action.answerModel.answer
                    }
                }
            }
        default:
            return state
    }    
}