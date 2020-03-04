import React, { Component } from 'react'
import { connect } from 'react-redux'
import { login } from '../actions/authedUser'
import { Redirect } from 'react-router-dom'
import { fakeAuth } from '../utils/api'
import CardHeader from './CardHeader'
/* Private Route: https://tylermcginnis.com/react-router-protected-routes-authentication/ */
class User extends Component {
  state = {
    redirect: false
  }

  handleLogin = id => {
    const { dispatch } = this.props
    fakeAuth.authenticate(() => {
      dispatch(login(id))
      this.setState({ redirect: true })
    })
  }

  render() {
    const { from } = this.props.location.state || {
      from: { pathname: '/home' }
    }
    const { redirect } = this.state
    const { user } = this.props

    if (redirect === true) {
      return <Redirect to={from} />
    }

    return (
      <div key={user.id} className="col-md-12"  >
        <div className="card">
        <CardHeader user={user}></CardHeader> 
        <div className="card-body">
              <h5 className="card-title center">{user.name}</h5>
             
                  <button className="btn btn-primary col-md-12"
                  onClick={() => this.handleLogin(user.id)}>
                  Login
                  </button>
              
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps({ authedUser, users }, { id }) {
  return {
    user:users[id],
    users,
    authedUser
  }
}

export default connect(mapStateToProps)(User) 