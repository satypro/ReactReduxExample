import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import { connect } from 'react-redux'
import { loginUser, fetchQuote, fetchSecretQuote } from '../actions'
import Navbar from '../components/Navbar'

class App extends Component {
  render() {
    const { dispatch, isAuthenticated, errorMessage, username } = this.props

    return (
      <div>
        <Navbar
          isAuthenticated={isAuthenticated}
          errorMessage={errorMessage}
          dispatch={dispatch}
        />
        {
           isAuthenticated ?
           <p>Authenticate True </p>
           :
           <p>Not Authenticated </p>
        }       
        <p>HELLO : {username}</p>
      </div>
    )
  }
}

App.propTypes = {
  dispatch: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
  errorMessage: PropTypes.string,
  username : PropTypes.string
}

// These props come from the application's
// state when it is started
function mapStateToProps(state) {

  const { auth } = state;
  const { user } = auth;
  
  var userN = 'DEMO';
  if (user)
  {
     userN = user.username;
  }

  const username  = userN;
  
  return {
    auth, 
    username
  }
}

export default connect(mapStateToProps)(App)