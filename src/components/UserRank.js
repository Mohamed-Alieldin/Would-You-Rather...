import React from 'react'
import {connect} from 'react-redux'


function UserRank (props){
    
        const {users, id, rank } = props
        const answeredQuestionsCount = Object.keys(users[id].answers).length
        const createdQuestionsCount = users[id].questions.length
        const score = answeredQuestionsCount + createdQuestionsCount


        return(
            <div className="card horizontal">

                <div className="card-image">
                <img src={users[id].avatarURL} alt={`Avatar of ${users[id].name}`} className="avatar2"/>

                { rank === 1 && <i className="medium material-icons">looks_one</i>}
                {rank === 2 && <i className="medium material-icons">looks_two</i>}
                {rank === 3 && <i className="medium material-icons">looks_3</i>}
                </div>
                <div className="card-stacked">
                <h4 style={{fontWeight: "bold"}}>{users[id].name}</h4>

                <div className="card-content left-align">
                    <h5>Answered Questions: { answeredQuestionsCount}</h5> 
                    <h5>Created Questions: { createdQuestionsCount}</h5>
                </div>

                <div className="card-action">
                    <div className="card-panel teal">
                        <span className="white-text" style={{fontWeight: "bold", fontSize : 22}}>
                        Score: {score}
                        </span>
                    </div>
                    </div>
                </div>  
                </div>          
        )
    
}


function mapStateToFunction({users}, {id, rank}){
    return{
        users,id, rank
    }
}
export default connect(mapStateToFunction)(UserRank)