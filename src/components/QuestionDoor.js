//const { Component } = require("react")

import React,{Component} from 'react'
import {connect} from 'react-redux'
import {Link, withRouter} from 'react-router-dom'

function QuestionDoor(props){

        const{questions, users,id} = props

        const questionAuthor = users[questions[id].author]

        return(
            <div>
                <div>{questionAuthor.name} asks:</div>
                <img src={questionAuthor.avatarURL} alt={`Avatar of ${questionAuthor.name}`} className="avatar"/>
                <div>
                    <h4>Would You Rather</h4>
                    <div>{questions[id].optionOne.text.substring(0, 10)}...</div>
                    <Link className='btn' to={`/questions/${id}`} >View Poll</Link>
                </div>
            </div>
        )
    
}


function mapStateToProps({questions, users},{id}){
return{
    questions,users,id
    }    
}
export default withRouter(connect(mapStateToProps)(QuestionDoor))