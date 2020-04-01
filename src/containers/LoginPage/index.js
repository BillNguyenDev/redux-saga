import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import styles from './styles';
import { Card, CardContent, Typography, TextField, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

class LoginPage extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.background}>
        <div className={classes.login}>
          <Card>
            <CardContent>
              <form>
                <div className="text-xs-center pb-xs">
                  <Typography variant="caption">
                    Đăng nhập để tiếp tục
                  </Typography>
                  <TextField
                    id="email"
                    label="Email"
                    className={classes.textFied}
                    fullWidth
                    margin="normal"
                  />
                  <TextField
                    id="password"
                    label="Password"
                    className={classes.textFied}
                    type="password"
                    fullWidth
                    margin="normal"
                  />
                  <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    type="submit"
                  >
                    Login
                  </Button>
                  <div className="pt-1 text-md-center">
                    <Link to="/signup">
                      <Button>Đăng ký tài khoản</Button>
                    </Link>
                  </div>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>

      </div>
    );
  }
}

export default withStyles(styles)(LoginPage);
