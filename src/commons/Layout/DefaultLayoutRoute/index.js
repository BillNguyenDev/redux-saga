import React, { Component } from 'react';
import { Route } from 'react-router-dom';
// import Dashboard from './../../../components/Dashboard';

class DefaultLayoutRoute extends Component {
  render() {
    const { component: YourComponent, ...remainProps } = this.props;
    return (
      <Route
        {...remainProps}
        render={routeProps => {
          return (
            // <Dashboard {...remainProps}>
              <YourComponent {...routeProps}/>
            // </Dashboard>
          );
        }}
      />
    )
  }
}

export default DefaultLayoutRoute;
