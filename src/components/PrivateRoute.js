/* Private Route: https://tylermcginnis.com/react-router-protected-routes-authentication/ */
import React from 'react'
import { fakeAuth } from '../utils/api'
import { Route, Redirect } from 'react-router-dom'

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      fakeAuth.isAuthenticated === true ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: '/',
            state: { from: props.location }
          }}
        />
      )
    }
  />
)

export default PrivateRoute