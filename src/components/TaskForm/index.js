import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import styles from './styles';
import { withStyles } from '@material-ui/core';

class TaskForm extends Component {
  render() {
    const { open, handleClose, classes } = this.props;
    return (
      <div>
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">Thêm công việc mới</DialogTitle>
          <DialogContent>
            <TextField
              id="standard-name"
              label="Name"
              className={classes.textField}
              // value={value.name}
              // onChange={handleChange('name')}
              margin="normal"
            />
            <TextField
              id="standard-multiline-flexible"
              label="Multiline"
              multiline
              rowsMax="4"
              // value={value.multiline}
              // onChange={handleChange('multiline')}
              className={classes.textField}
              margin="normal"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
                        </Button>
            <Button onClick={handleClose} color="primary">
              OK
                        </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
export default withStyles(styles)(TaskForm);