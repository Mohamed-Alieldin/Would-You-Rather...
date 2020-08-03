import React,{Component} from 'react'
import {connect} from 'react-redux'
import {handleAddQuestion} from '../actions/shared'
import {Redirect} from 'react-router-dom'

class AddQuestion extends Component{
    state={
        optionOne:"",
        optionTwo:"",
        toHome:false
    }

    AddQuestion =(e) =>{
        e.preventDefault()
        this.props.dispatch(handleAddQuestion({
            optionOneText: this.state.optionOne,
            optionTwoText: this.state.optionTwo,
            author: this.props.authedUser
        }))

        this.setState({
            ...this.state,
            optionOne:"",
            optionTwo:"",
            toHome: true         
        })        
    }

    handleChangeOptionOne =(e)=>{
        e.preventDefault()
        const optionOne = e.target.value
        this.setState(()=>({
            ...this.state,
            optionOne
        }))
    }

    handleChangeOptionTwo =(e)=>{
        e.preventDefault()
        const optionTwo = e.target.value
        this.setState(()=>({
            ...this.state,
            optionTwo
        }))
    }

    render(){
        if(this.state.toHome){
            return <Redirect to='/'/>
        }
        return(
            <div>
                <form>
                    <h3>Would You Rather...</h3>
                    <input value={this.state.optionOne} onChange={this.handleChangeOptionOne} placeholder="Enter Option One Text Here"/>
                    <input value={this.state.optionTwo} onChange={this.handleChangeOptionTwo} placeholder="Enter Option Two Text Here"/>
                    <button type='button' className='btn' onClick={this.AddQuestion}>Submit</button>
                </form>
            </div>
        )
    }
}

function mapStateToProps({authedUser}){
    return{
        authedUser
    }
}

export default connect(mapStateToProps)(AddQuestion)