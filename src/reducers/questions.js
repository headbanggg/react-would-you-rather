import { GET_QUESTIONS  } from '../actions/questions'

export function questions (state = {}, action) {
  switch(action.type) {
    case GET_QUESTIONS :
      return {
        ...state,
        ...action.questions
      }
    // case SAVE_ANSWER :
    //   return {
    //     ...state,
    //     [action.qid]: {
    //       ...state[action.qid],
    //       [action.option]: {
    //         ...state[action.qid][action.option],
    //         votes: state[action.qid][action.option].votes.concat([action.authedUser])
    //       }
    //   }
    // }
    // case ADD_QUESTION :
    // return {
    //   ...state,
    //   [action.question.id]: action.question
    // }
    default :
      return state
  }
} 