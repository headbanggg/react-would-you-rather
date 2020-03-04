import React, {Component} from 'react'
import { NavLink}  from 'react-router-dom'
import {connect} from "react-redux"
import { logout } from '../actions/authedUser'


class NavBar extends Component {

 /*  handleLogout = e => {
    e.preventDefault();
    this.props.setAuthedUser(null)
  } */

  handleLogout = () => {
    const { dispatch } = this.props
    dispatch(logout())
  }

render() {
  const {user,authedUser} = this.props
  return (
    <nav className='nav'>
    {authedUser ? (
      <ul>
        <li>
          <NavLink to='/home' exact activeClassName='active'>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to='/add' activeClassName='active'>
          Create New Question
          </NavLink>
        </li>
        <li>
          <NavLink to='/leaderboard' activeClassName='active'>
          Leader Board
          </NavLink>
        </li>
        {user ?
        (
          <li className='right'>
            <img src={user.avatarURL && user.avatarURL !== ''?user.avatarURL :"images/defaultThumbnail.png"} className="avatar" alt=""/>
            <span>{user.name}</span>
        </li>
        ):
        (<li>
        </li>)}
        <li>
        <NavLink to='/' onClick={this.handleLogout} activeClassName='active right'>Logout</NavLink>
        </li>
      </ul>
      ) : (
        <ul>
          <li>Would you Rather Project</li>
        </ul>
      )}
    </nav>
  )
} 
}

function mapStateToProps({ questions, users, authedUser }) {
  return {
    users,
    user:users[authedUser],
    questions,
    authedUser
  }
}
export default connect(mapStateToProps)(NavBar) 