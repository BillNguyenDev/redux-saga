import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import styles from './styles';
import { Button, Grid, Box } from '@material-ui/core';
import { STATUSES } from "./../../constants";
import TaskList from './../../components/TaskList';
import TaskForm from './../../components/TaskForm';
import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';
import * as taskAction from './../../actions/task';
import * as modalAction from './../../actions/modal';
// import { toast } from 'react-toastify';
// import Box from '@material-ui/core/Box';
import SearchBox from '../../components/SearchBox';

class Taskboard extends Component {

  componentDidMount() {
    const { taskActions } = this.props;
    const { fetchListTask } = taskActions;
    fetchListTask();
  }
  openForm = () => {
    const { modalActions } = this.props;
    const {
      showModal,
      changeModalTitle,
      changeModalContent
    } = modalActions;
    showModal();
    changeModalTitle('Thêm mới công việc');
    changeModalContent(<TaskForm />)
  }
  handleTaskEdit = task => {
    const { taskActions, modalActions } = this.props;
    const {
      showModal,
      changeModalTitle,
      changeModalContent
    } = modalActions;
    const { setTaskEditing } = taskActions;
    setTaskEditing(task);
    showModal();
    changeModalTitle('Cập Nhập Công Việc');
    changeModalContent(<TaskForm />)
  }

  showModalDeleteTask = task => {
    const {  modalActions, classes } = this.props;
    const {
      showModal,
      hideModal,
      changeModalTitle,
      changeModalContent
    } = modalActions;
    showModal();
    changeModalTitle('Xóa Công Việc');
    changeModalContent(
      <div className={classes.modalDelete}>
        <div className={classes.modalConfirmText}>
          Bạn chắc chắn muốn xóa{' '}
          <span className={classes.modalConfirmTextBold}>{task.title}</span>?
        </div>
        <Box display="flex" flexDirection="row-reverse" mt={2}>
          <Button
            variant="contained"
            color="secondary"
            onClick={this.handleTaskDelete(task)}
          >Xóa</Button>
          <Box mr={1}>
            <Button
              variant="contained"
              onClick={hideModal}
            >Hủy Bỏ</Button>
          </Box>
        </Box>
      </div>
    );
  }

  handleTaskDelete(task) {
    console.log(task)
  }

  renderBoard() {
    const { listTask } = this.props;
    let xhtml = null;
    xhtml = (
      <Grid container spacing={2}>
        {
          STATUSES.map((status, index) => {
            const taskFilltered = listTask.filter(task => task.status === status.value);
            return (
              <TaskList
                task={taskFilltered}
                status={status}
                key={index}
                onClickEdit={this.handleTaskEdit}
                onClickDelete={this.showModalDeleteTask}
              />
            );
          })
        }
      </Grid>
    );
    return xhtml;

  }

  handleFilter = e => {
    const { value } = e.target;
    const { taskActionCreators } = this.props;
    const { filterTask } = taskActionCreators;
    filterTask(value);
  }

  renderSearchBox() {
    let xhtml = null;
    xhtml = (
      <SearchBox handleChange={this.handleFilter} />
    )
    return xhtml;
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.taskboard}>
        <Button variant="contained" color="primary" onClick={this.openForm}>
          <span className="material-icons">add</span>
          Thêm công việc mới!
        </Button>
        {this.renderSearchBox()}
        {this.renderBoard()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    listTask: state.task.listTask
  }
};
const mapDispatchToProps = (dispatch) => {
  return {
    taskActions: bindActionCreators(taskAction, dispatch),
    modalActions: bindActionCreators(modalAction, dispatch),
  }
};

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
)

export default compose(
  withStyles(styles),
  withConnect,
)(Taskboard);
