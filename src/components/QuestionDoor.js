//const { Component } = require("react")

import React,{Component} from 'react'
import {connect} from 'react-redux'
import {Link, withRouter} from 'react-router-dom'

function QuestionDoor(props){

        const{questions, users,id} = props

        const questionAuthor = users[questions[id].author]

        return(
            <div className="section z-depth-1">
                <div className="row col s3 center-align">
                <h6>{questionAuthor.name} asks:</h6>
                
                <img src={questionAuthor.avatarURL} alt={`Avatar of ${questionAuthor.name}`} className="avatar"/>
                
                </div>
                <div>
                    <h5>Would You Rather</h5>
                    <p>{questions[id].optionOne.text.substring(0, 20)}...</p>
                    
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