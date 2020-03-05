import { showLoading, hideLoading } from 'react-redux-loading-bar';
import { getInitialData } from '../utils/api'
import { getUsers} from './users'
import { getQuestions} from './questions'
import { login } from './authedUser'

export const GET_INITIAL_DATA = 'GET_INITIAL_DATA'

export function handleInitialData (userId) {
  return (dispatch) => {
    dispatch(showLoading())
    return getInitialData().then(({users, questions}) => {
      dispatch(getUsers(users))
      dispatch(getQuestions(questions))
      dispatch(login(userId ? userId : null))
      dispatch(hideLoading())
    })
  }
}