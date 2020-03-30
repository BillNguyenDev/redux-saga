import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Fab from '@material-ui/core/Fab';
import styles from './styles';
class TaskItem extends Component {
    render() {
        const { classes, task, status } = this.props;
        const { title, id, description } = task;
        return (
            <Card key={id} className={classes.card}>
                <CardContent>
                    <Grid container justify="space-between">
                        <Grid item md={8}>
                            <Typography component="h3">
                                {title}
                            </Typography>
                        </Grid>
                        <Grid item md={4}>
                            {status.label}
                        </Grid>
                    </Grid>
                    <p>{description}</p>
                </CardContent>
                <CardActions className={classes.cardActions}>
                    <Fab color="primary" aria-label="Edit" className={classes.fab} size="small">
                        <span className="material-icons">
                            edit
                        </span>
                    </Fab>
                    <Fab color="secondary" aria-label="Edit" className={classes.fab} size="small">
                        <span className="material-icons">
                            delete
                        </span>
                    </Fab>
                </CardActions>
            </Card>
        )
    }
}

export default withStyles(styles)(TaskItem);
