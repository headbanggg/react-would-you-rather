import React from 'react'
import CardHeader from './CardHeader'
class Result extends React.Component {
    render() {
        const { user, question } = this.props
        const optionOneVotes = question.optionOne.votes.length 
        const optionTwoVotes = question.optionTwo.votes.length 
        const total = optionOneVotes + optionTwoVotes
        const onePerc = (optionOneVotes / total) * 100
        const twoPerc = (optionTwoVotes / total) * 100
        return (
            <div key={user.id} className="col-md-12">
                <div className="card">
                    <CardHeader user={user}></CardHeader> 
                    <div className="card-body">
                        <h5 className="card-title">{user.name}</h5>
                        <p className="card-text">Would you Rather:</p>
                        <div className="card-text">
                            A: {question.optionOne.text}
                            {user.answers[question.id] === 'optionOne' ? 
                            (<h6 className="badge badge-success">Your choice</h6>)
                            : ('') 
                            }
                        </div>
                        <div className="card-text">
                            B: {question.optionTwo.text}
                            {user.answers[question.id] === 'optionTwo' ? 
                            (<h6 className="badge badge-success">Your choice</h6>)
                            : ('') 
                            }
                        </div>
                        <div>
                        <br />
                        <p>
                        A: {onePerc}% - {question.optionOne.text} | {optionOneVotes} votes
                        </p>
                        <p>
                        B: {twoPerc}% - {question.optionTwo.text} | {optionTwoVotes} votes
                        </p>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
  }

  export default Result 