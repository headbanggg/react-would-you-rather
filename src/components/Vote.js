import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleSaveAnswer } from '../actions/questions'
import { Link } from 'react-router-dom'
import Result from './Result'
import CardHeader from './CardHeader'

class Vote extends Component {

  handleChoice = (answer) =>{
    const { dispatch, authedUser, question } = this.props
    console.log(answer)
    dispatch(handleSaveAnswer(authedUser, question.id, answer))
  }

  render() {
    const { 
      question,
      
      notFound,
      isAnswered,
      users} = this.props


    //404 not found error
    if (notFound) {
      return (
        <div className="container">
          <h2>404:Something went wrong!</h2>
          <p>
            Return to{' '}
            <Link to="/">
              <span className="badge badge-warning">go back</span>
            </Link>
          </p>
        </div>
      )
    }

    const user = users[question.author]
    if (isAnswered === undefined) {
      return (
        <div key={user.id} className="col-md-12">
            <div className="card">
            <CardHeader user={user}></CardHeader> 
            <div className="card-body">
                <h5 className="card-title">{user.name}</h5>
                <p className="card-text">
                Would you Rather:
                </p>
                <p className="card-text">
                A: {question.optionOne.text}
                <button className="btn btn-success" 
                onClick={e => this.handleChoice('optionOne')}>Choose</button>
                </p>
                <p className="card-text">
                B: {question.optionTwo.text}
                <button className="btn btn-success" 
                onClick={e => this.handleChoice('optionTwo')}>Choose</button>
                </p>
                </div>
            </div>
        </div>
      )
    } else {
      return (
        <Result user={user} question={question}></Result>  
      )
    }

  }
}

function mapStateToProps({ questions, users, authedUser }, props) {
  const qId = props.match.params.question_id
  const question = questions[qId]
  const notFound = !questions[qId]
  const isAnswered = authedUser?users[authedUser].answers[qId]:false
  return {
    questions,
    question,
    notFound,
    isAnswered,
    users,
    authedUser,
    qId
  }
}

export default connect(mapStateToProps)(Vote) 