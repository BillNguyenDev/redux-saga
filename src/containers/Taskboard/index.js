import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import styles from './styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { STATUSES } from "./../../constants";
import TaskList from './../../components/TaskList';
import TaskForm from './../../components/TaskForm';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as taskAction from './../../actions/task';
// import { toast } from 'react-toastify';
// import Box from '@material-ui/core/Box';
import SearchBox from '../../components/SearchBox';

class Taskboard extends Component {
  state = {
    open: false
  }

  componentDidMount() {
    const { taskActionCreators } = this.props;
    const { fetchListTask } = taskActionCreators;
    fetchListTask();
  }
  openForm = () => {
    this.setState({ open: true });
  }
  handleClose = () => {
    this.setState({ open: false });
  }

  // openToast = () => {
  //   toast.success('Thành Công');
  // }

  renderBoard() {
    const { listTask } = this.props;
    let xhtml = null;
    xhtml = (
      <Grid container spacing={2}>
        {
          STATUSES.map((status,index) => {
            const taskFilltered = listTask.filter(task => task.status === status.value);
            return (
              <TaskList task={taskFilltered} status={status} key={index} />
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
      <SearchBox handleChange={this.handleFilter}/>
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
        {/* <Box mt={5}>
          <Button variant="contained" color="primary" onClick={this.openToast}>
            Hiển Thị Thông Báo
          </Button>
        </Box> */}
        {this.renderSearchBox()}
        {this.renderBoard()}
        <TaskForm open={this.state.open} handleClose={this.handleClose} />
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
    taskActionCreators: bindActionCreators(taskAction, dispatch),
  }
};


export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(Taskboard));
