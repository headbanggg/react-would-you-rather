  
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'


class Page404 extends Component {
    render() {
  /*     const { 
        authedUser
        } = this.props
  
        if (authedUser === null) {
          return <Redirect to='/' />
        }
        else{ */
          return (
            <div>
                <div className='text-center error-text'> 404 Error </div>
                <h1 className='text-center'> Not Found </h1>     
                <p>
            Return to{' '}
            <Link to="/">
              <span className="badge badge-warning">go back</span>
            </Link>
          </p>
                      
            </div>
        )
       // }
     
    }
}

function mapStateToProps({ authedUser }, props) {
  
  
  return {
    authedUser,
  }
}

export default connect(mapStateToProps)(Page404) 
