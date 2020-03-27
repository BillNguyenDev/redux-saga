import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import styles from './styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { STATUSES } from "./../../constants";

import Box from '@material-ui/core/Box';
import TaskList from './../../components/TaskList';
import TaskForm from './../../components/TaskForm';
const listTask = [
    {
        id: 1,
        title: "Read book",
        description: "Read material ui book",
        status: 0
    },
    {
        id: 2,
        title: "Play football",
        description: "With my friend",
        status: 2
    },
    {
        id: 3,
        title: "Play game",
        description: "",
        status: 1
    }
];

class Taskboard extends Component {
    state = {
        open: false
    }
    openForm = () => {
        this.setState({ open: true });
    }
    handleClose = () => {
        this.setState({ open: false });
    }
    renderBoard() {
        let xhtml = null;
        xhtml = (
            <Grid container spacing={2}>
                {
                    STATUSES.map(status => {
                        const taskFilltered = listTask.filter(task => task.status === status.value);
                        return (
                            <TaskList task={taskFilltered} status={status} />
                        );
                    })
                }
            </Grid>
        );
        return xhtml;
    }

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.taskboard}>
                <Button variant="contained" color="primary" onClick={this.openForm}>
                    <span className="material-icons">
                        add
                    </span>
                    Thêm công việc mới!
                </Button>
                {this.renderBoard()}
                <TaskForm open={this.state.open} handleClose={this.handleClose} />
            </div>
        );
    }
}

export default withStyles(styles)(Taskboard);