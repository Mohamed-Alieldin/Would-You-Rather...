import React, { Component, Fragment }  from 'react';
import {connect} from 'react-redux'
import LoadingBar from 'react-redux-loading'
import {BrowserRouter as Router , Route , Switch} from 'react-router-dom'

import '../App.css';
import {handleInitialData} from '../actions/shared'
import SignIn from './SignIn'
import Home from './Home'
import LeaderBoard from './LeaderBoard'
import AddQuestion from './AddQuestion'
import Question from './Question'
import Nav from './Nav'
import NotFound from './NotFound'

class App extends Component {
  componentDidMount(){
    this.props.dispatch(handleInitialData())
  }

render(){
  const {authedUser, loading} = this.props
  const authorized = authedUser === null || authedUser === undefined || authedUser ===''? false:true
  return (    
    <Router>
    <Fragment>
    <LoadingBar/>
    <div >
      <Nav/>
      {loading === true ? null : 
        authorized === false ?
        <div>
           <SignIn/> 
        </div>                
        : 
        <div>
          <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/add" exact component={AddQuestion} />
        <Route path="/leaderboard" exact component={LeaderBoard} />
        <Route path="/questions/:id" exact component={Question} />
        <Route  component={NotFound} />
        </Switch>
        </div>
        }
    </div>
    </Fragment>
    </Router>
  )
}

}


function mapStateToProps({users, authedUser}){
  return {
    loading: Object.keys(users).length === 0,
    users,
    authedUser
  }
}
export default connect(mapStateToProps)(App)
