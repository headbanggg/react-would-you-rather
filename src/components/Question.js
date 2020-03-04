import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import Card from './Card'
class Question extends Component {

  render() {
    const { question, user } = this.props
    if (question === null) {
      return <p>This Question doesn't exist</p>
    }

    const { id, optionOne, optionTwo, timestamp} = question
    return (
        <div className='row' class="container">
          <div class="row">
            <div  >
                <Card user={user} 
              time={timestamp}
              divClass="col-md-12"
              title={`${user.name}`} 
              firstText={"Would you rather: "}
              secondText={"A: "+`${optionOne.text}`} 
              thirdText={"B: "+`${optionTwo.text}`}></Card>
            </div>
          </div>
 


          <div  className="card-footer text-muted col-md-12">
          <Link to={`/question/${id}`}>
              <button className="btn btn-success widthHundred">View Poll</button>
          </Link>
        </div>
      </div>
    )
  }
}

function mapStateToProps({ questions, users }, { id }) {
  const question = questions[id]
  const user = users[question.author]
  return {
    question,
    user
  }
}
export default withRouter(connect(mapStateToProps)(Question)) 

