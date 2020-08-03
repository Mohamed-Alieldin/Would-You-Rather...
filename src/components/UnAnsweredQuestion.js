import React, {Component} from 'react'
import {connect} from 'react-redux'
import {handleSaveAnswer} from '../actions/shared'

class UnAnsweredQuestion extends Component{
    state ={
        optionSelected: ""
    }

    handleSubmit =(e) =>{
        e.preventDefault()
        const {dipsatch, id, authedUser} = this.props

        this.props.dispatch(handleSaveAnswer({
            authedUser,
            qid: id,
            answer: this.state.optionSelected
        }))
    }

    selectOptionOne =() =>{
        this.setState({
            optionSelected:"optionOne"
        })
    }

    selectOptionTwo =() =>{
        this.setState({
            optionSelected:"optionTwo"
        })
    }

    render(){
        const {authedUser, users, questions, id} = this.props
        const authorId = questions[id].author

        return(
            <div>
                <h3>Asked By: {users[authorId].name}</h3>
                <div>
                    Would You Rather ...
                    <form>
                        <input type="checkbox" checked={this.state.optionSelected==='optionOne'} onChange={this.selectOptionOne}/>
                        <label>{questions[id].optionOne.text}</label>
                        <input type="checkbox" checked={this.state.optionSelected==='optionTwo'}  onChange={this.selectOptionTwo}/>
                        <label>{questions[id].optionTwo.text}</label>
                        <button type='submit' onClick={this.handleSubmit} disabled={this.state.optionSelected ===''}>Submit</button>
                    </form>
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
export default connect(mapStateToProps)(UnAnsweredQuestion)