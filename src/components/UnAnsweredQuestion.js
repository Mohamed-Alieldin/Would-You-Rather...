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
            <div className="row">
                <div className="col s6 offset-s3 z-depth-5 center-align card horizontal">
                    <div className="card-image">
                    <img src={users[authorId].avatarURL} alt={`Avatar of ${users[authorId].name}`} className="avatar2"/>
                    </div>
                    <div className="card-stacked">
                        <span className="center-align">Asked By: <h3>{users[authorId].name}</h3></span>
                        
                        <div className="card-content left-align">
                        Would You Rather ...
                        <form>
                            <p>
                            <input className="with-gap" name="group1" type="radio" id="1" checked={this.state.optionSelected==='optionOne'} onChange={this.selectOptionOne} />
                            <label htmlFor="1">{questions[id].optionOne.text}</label>
                            </p>
                            <p>
                            <input className="with-gap" name="group1" type="radio" id="2" checked={this.state.optionSelected==='optionTwo'}  onChange={this.selectOptionTwo}/>
                            <label htmlFor="2">{questions[id].optionTwo.text}</label>
                            </p>
                            <div className="card-action center-align">
                            <button className='waves-effect waves-light btn' type='submit' onClick={this.handleSubmit} disabled={this.state.optionSelected ===''}>Submit</button>
                            </div>
                        </form>
                        </div>
                    </div>
                                                       
                    
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