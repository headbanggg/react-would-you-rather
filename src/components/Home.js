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
        <Tab eventKey="unanswered" title="Unanswered Polls">
          <div className="card bg-light container">
            <div className="card-body row" >
            {unanswered.map((id) => (
              <div className="col-sm" key={id}>
                      <li key={id} >
                        <Question id={id}/>
                      </li>
                    
              </div>
              ))}
              </div>
          </div> 

          </Tab>
          <Tab eventKey="answered" title="Answered Polls">
            <div className="card bg-light container" >
                <div className="card-body row" >
                {answered.map((id) => (
                  <div className="col-sm" key={id}>
                    <li key={id}>
                      <Question id={id}/>
                    </li>
                    </div>
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
    const answered = !user || !user.answers ? null: Object.keys(user.answers)
      .sort((a,b) => questions[b].timestamp - questions[a].timestamp)
    return {
      authedUser,    
      answered,
      unanswered : !answered ? null: Object.keys(questions).filter(qid => !answered.includes(qid))
        .sort((a,b) => questions[b].timestamp - questions[a].timestamp),
    }
  }
  export default connect(mapStateToProps)(Home) 