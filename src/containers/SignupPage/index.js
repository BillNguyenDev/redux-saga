import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import styles from './styles';
import { Card, CardContent, Typography, TextField, Button, FormControlLabel, Checkbox } from '@material-ui/core';
import { Link } from 'react-router-dom';

class SignupPage extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.background}>
        <div className={classes.signup}>
          <Card>
            <CardContent>
              <form>
                <div className="text-xs-center pb-xs">
                  <Typography variant="caption">
                    Đăng ký tài khoản
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
                  <TextField
                    id="cpassword"
                    label="Comfirm Password"
                    className={classes.textFied}
                    type="password"
                    fullWidth
                    margin="normal"
                  />
                  <FormControlLabel
                    control={<Checkbox value="agree" />}
                    label="Tôi đã đọc chính sách và đồng ý điều khoản"
                    className={classes.fullWidth}
                  />
                  <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    type="submit"
                  >
                   Signup
                  </Button>
                  <div className="pt-1 text-md-center">
                    <Link to="/login">
                      <Button>Đã có tài khoản?</Button>
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

export default withStyles(styles)(SignupPage);
