import React, {Component, Fragment} from 'react'
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
          <Fragment>
            <div>
              <h1>React App</h1>
            </div>
            <nav className='nav'>
            <ul>
              <li>
                <NavLink to='/' exact activeClassName='active'>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to='/add' activeClassName='active'>
                  New Questions
                </NavLink>
              </li>
              <li>
                <NavLink to='/leaderboard' activeClassName='active'>
                  Leader Board
                </NavLink>
              </li>
              {authedUser !== '' &&
              <li>
                  Hello, {users[authedUser].name}
              </li>
              }

              {authedUser !== '' &&
              <li>
                  <a href="#" onClick={this.Logout}>Sign Out</a> 
              </li>
              }
            </ul>
          </nav>
          </Fragment>
        )
    }
}


function mapStateToProps({authedUser, users}){
    return{
        authedUser, users
    }

}
export default withRouter(connect(mapStateToProps)(Nav))