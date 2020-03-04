import React, { Component } from 'react'
import { connect} from 'react-redux'
import { handleAddQuestion} from '../actions/questions'
import { Redirect } from 'react-router-dom'
class CreateQuestion extends Component {
  state = {
      redirect: false
  }
  addQuestion = (e) => {
    e.preventDefault()
    const { dispatch, authedUser } = this.props;
    let optOne = e.target[0].value
    let optTwo = e.target[1].value
    dispatch(handleAddQuestion(authedUser, optOne, optTwo))
    .then(() =>
      this.setState(() => ({
        redirect: true
      }))
    )
  }

  render () {
    const { authedUser } = this.props
    if (authedUser === null) {
      return <Redirect to='/login' />
    }
    if (this.state.redirect) {
      return <Redirect to='/home' />
    }
    return (
      <div className="row">
      <div className="col-sm">
      <form onSubmit={this.addQuestion} >
          <div className="form-group">
            <label>To create a poll, please fill the form below:</label>
          </div>
          <div className="form-group">
            <label htmlFor="first">First Option</label>
            <input type="text" className="form-control" placeholder="Enter first option"/>
          </div>
          <div className="form-group">
            <label htmlFor="second">Second Option</label>
            <input type="text" className="form-control" placeholder="Enter second option"/>
          </div>
          <button type="submit" className="btn btn-primary">Create</button>
        </form>
        </div>
      </div>
    )
  }
}


function mapStateToProps({ authedUser }) {
    return {
      authedUser
    }
}

export default connect(mapStateToProps)(CreateQuestion) 