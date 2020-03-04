import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import Question from './Question'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'

class Home extends Component {

  state = {
    key: 'unanswered',
  };

  render() {
    const { unanswered, answered, authedUser} = this.props
    if (authedUser === null) {
      return <Redirect to='/login' />
    }
      return (
    <Tabs
        id="controlled-tab-example"
        activeKey={this.state.key}
        onSelect={key => this.setState({ key })}>
        <Tab eventKey="unanswered" title="Unanswered Question">
          <div className="card bg-light">
            <div className="card-body">
            {unanswered.map((id) => (
                <li key={id}>
                  <Question id={id}/>
                </li>
              ))}
              </div>
          </div> 

          </Tab>
          <Tab eventKey="answered" title="Answered Question">
            <div className="card bg-light">
                <div className="card-body">
                {answered.map((id) => (
                    <li key={id}>
                      <Question id={id}/>
                    </li>
                  ))}
                </div>
            </div>
            </Tab>
        </Tabs>
      )
    }
  }

  function mapStateToProps({questions, users, authedUser}) {
    const user = users[authedUser]
    const answered = Object.keys(user.answers)
      .sort((a,b) => questions[b].timestamp - questions[a].timestamp)
    return {
      authedUser,    
      answered,
      unanswered : Object.keys(questions).filter(qid => !answered.includes(qid))
        .sort((a,b) => questions[b].timestamp - questions[a].timestamp),
    }
  }
  export default connect(mapStateToProps)(Home) 