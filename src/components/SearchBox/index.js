import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import styles from './styles';
import { bindActionCreators, compose } from 'redux';
import { connect } from 'react-redux';
import { TextField } from '@material-ui/core';

class SearchBox extends Component {
  render() {
    const { classes, handleChange } = this.props;
    return (
      <form className={classes.container} noValidate autoComplete="off">
        <TextField
          autoComplete="off"
          className={classes.textField}
          onChange={handleChange}
          margin="normal"
          placeholder="Nhập từ khóa"
        />

      </form>
    )
  }
}

const mapStateToProps = state => {
  return null;
}

const mapDispatchToProps = dispatch => {
  return null;
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)


export default compose(
  withStyles(styles),
  withConnect
)(SearchBox);
