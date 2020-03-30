import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import styles from './styles';

import TaskItem from './../TaskItem';
class TaskList extends Component {
    render() {
        const { classes, task, status } = this.props;
        return (
            <Grid item md={4} xs={12} key={status.value}>
                <Box mt={2} md={2}>
                    <div className={classes.status}>{status.label}</div>
                </Box>
                <div className={classes.wrapperListTask}>
                    {task.map((task,index) => <TaskItem task={task} status={status} key={index} />)}
                </div>

            </Grid>
        )
    }
}

export default withStyles(styles)(TaskList);
