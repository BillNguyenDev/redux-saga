import React, { Component } from 'react';
import { Grid, Button, Box, MenuItem } from '@material-ui/core';
import styles from './styles';
import { withStyles } from '@material-ui/styles';
import { bindActionCreators, compose } from 'redux';
import * as modalAction from './../../actions/modal';
import * as taskAction from './../../actions/task';

import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';

import renderTextField from './../FormHepler/TextField';
import renderSelectField from './../FormHepler/Select';
import validate from './validate';


class TaskForm extends Component {

  handleSubmitForm = data => {
    const { taskActions, taskEditing } = this.props;
    const { addTask, editTask } = taskActions;
    const { title, description, status } = data;
    if (taskEditing && taskEditing.id) {
      editTask(title, description, status);
    } else {
      addTask(title, description);
    }

  }
  renderStatusSelection() {
    let xhtml = null;
    const { taskEditing, classes } = this.props;
    if (taskEditing && taskEditing.id) {
      xhtml = (
        <Field
          id="status"
          label="Trạng thái"
          className={classes.select}
          name="status"
          component={renderSelectField}
        >
          <MenuItem value={0}>Ready</MenuItem>
          <MenuItem value={1}>In Progress</MenuItem>
          <MenuItem value={2}>Completed</MenuItem>
        </Field>
      );
    }
    return xhtml;
  }

  render() {
    const { modalActions, classes, handleSubmit, invalid, submitting, taskEditing } = this.props;
    const { hideModal } = modalActions;
    return (
      <form onSubmit={handleSubmit(this.handleSubmitForm)}>
        <Grid container sapcing={8}>
          <Grid item md={12}>
            <Field
              id="title"
              label="Tiêu đề"
              className={classes.textField}
              margin="normal"
              name="title"
              component={renderTextField}
              value={taskEditing ? taskEditing.title : ''}
            />
          </Grid>
          <Grid item md={12}>
            <Field
              id="description"
              label="Mô tả"
              multiline
              rowsMax="4"
              className={classes.textField}
              margin="normal"
              name="description"
              component={renderTextField}
              value={taskEditing ? taskEditing.description : ''}
            />
          </Grid>
          {this.renderStatusSelection()}
          <Grid item md={12}>
            <Box display="flex" flexDirection="row-reverse" mt={2}>
              <Button disabled={invalid || submitting} variant="contained" color="primary" type="submit" >Lưu Lại</Button>
              <Box mr={1}>
                <Button variant="contained" onClick={hideModal} >Hủy Bỏ</Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </form>
    );
  }
}

const mapStateToProps = state => ({
  taskEditing: state.task.taskEditing,
  initialValues: state.task.taskEditing,
});

const mapDispatchToProps = dispatch => ({
  modalActions: bindActionCreators(modalAction, dispatch),
  taskActions: bindActionCreators(taskAction, dispatch),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const FORM_NAME = 'TASK_MANAGEMENT';

const withReduxForm = reduxForm({
  form: FORM_NAME,
  validate,
});

export default compose(
  withStyles(styles),
  withConnect,
  withReduxForm,
)(TaskForm);
