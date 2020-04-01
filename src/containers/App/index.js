import React, { Component } from 'react';
import styles from './styles.js';
import { withStyles } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
// import Taskboard from '../Taskboard/index.js';
import theme from '../../commons/Theme';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Provider } from 'react-redux';
import configureStore from './../../redux/configureStore';
import GlobalLoading from './../../components/GlobalLoading';
import ModalSaga from '../../components/ModalSaga';
import { BrowserRouter, Switch } from 'react-router-dom';
import { ADMIN_ROUTES, ROUTES } from './../../constants';
import AdminLayoutRoute from './../../commons/Layout/AdminLayoutRoute';
import DefaultLayoutRoute from './../../commons/Layout/DefaultLayoutRoute';

const store = configureStore();

class App extends Component {

  renderAdminRoutes() {
    let xhtml = null;
    xhtml = ADMIN_ROUTES.map(route => {
      return (
        <AdminLayoutRoute
          key={route.path}
          path={route.path}
          component={route.component}
          name={route.name}
          exact={route.exact}
        />
      );
    })
    return xhtml;
  }
  renderDefaultRoutes() {
    let xhtml = null;
    xhtml = ROUTES.map(route => {
      return (
        <DefaultLayoutRoute
          key={route.path}
          path={route.path}
          component={route.component}
          name={route.name}
          exact={route.exact}
        />
      );
    })
    return xhtml;
  }


  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <ThemeProvider theme={theme}>
            <ToastContainer />
            <GlobalLoading />
            <ModalSaga />
            <Switch>
              {this.renderAdminRoutes()}
              {this.renderDefaultRoutes()}
            </Switch>
          </ThemeProvider>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default withStyles(styles)(App);
