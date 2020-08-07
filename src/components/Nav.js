import React, {Component} from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import {connect} from 'react-redux'
import {clearAuthedUser} from '../actions/authedUser'

class Nav extends Component{

    Logout = (e) =>{
        e.preventDefault()
        this.props.dispatch(clearAuthedUser())
        this.props.history.push('/')
    }

    render(){
        const{authedUser, users} = this.props

        return(
            <nav>
              <div className="nav-wrapper">

              
            <ul className="left hide-on-med-and-down">
              <li>
                <NavLink to='/' exact activeClassName='active'>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to='/add' activeClassName='active'>
                  New Poll
                </NavLink>
              </li>
              <li>
                <NavLink to='/leaderboard' activeClassName='active'>
                  Leader Board
                </NavLink>
              </li>
              
              {authedUser !== '' &&
              <li>
                  <a href="#" onClick={this.Logout}>Logout</a> 
              </li>
              }

              {authedUser !== '' &&
              <li className="brand-logo right">
                <a>Hello, {users[authedUser].name}</a>                  
              </li>
              }
            </ul>
            </div>
          </nav>
        )
    }
}


function mapStateToProps({authedUser, users}){
    return{
        authedUser, users
    }

}
export default withRouter(connect(mapStateToProps)(Nav))