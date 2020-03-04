import { _saveQuestionAnswer, _saveQuestion } from '../utils/_DATA'
import { handleInitialData } from './shared'
export const GET_QUESTIONS = 'GET_QUESTIONS'
export const SAVE_ANSWER = 'SAVE_ANSWER'
export const ADD_QUESTION = 'ADD_QUESTION'

export function getQuestions (questions) {
  return {
    type: GET_QUESTIONS,
    questions
  }
}

export function saveAnswer (authedUser, questionId, option) {
  return {
    type: SAVE_ANSWER,
    authedUser,
    qid:questionId,
    answer:option
  }
}

export function saveQuestion (question) {
  return {
    type: ADD_QUESTION,
    question
  }
}


export function handleSaveAnswer (authedUser, questionId, option) {
  const data = {
    authedUser,
    qid:questionId,
    answer: option
  }
  return (dispatch) => {
    return _saveQuestionAnswer(data).then(() => dispatch(handleInitialData(authedUser)))
  }
}


export function handleAddQuestion (authedUser, optionOne, optionTwo) {
  const data = {
    optionOneText: optionOne,
      optionTwoText: optionTwo,
      author: authedUser
  }
  return dispatch => {
    return _saveQuestion(data).then(() => dispatch(handleInitialData(authedUser)))
  }
}