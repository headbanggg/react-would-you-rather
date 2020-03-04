import {_saveNewUser} from '../utils/_DATA'
import { login } from './authedUser'
export const GET_USERS = 'GET_USERS'

export function getUsers (users) {
  return {
    type: GET_USERS,
    users
  }
}

export function handleUser (username, name) {
  return (dispatch) => {
    return _saveNewUser({ username, name })
      .then((users) => {
        if (users.error) {
          console.error('Username Already taken')
        } else {
          dispatch(getUsers(users))
          dispatch(login(username))
        }
      })
  }
}