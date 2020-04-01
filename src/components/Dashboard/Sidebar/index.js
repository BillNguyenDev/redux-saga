import React, { Component } from 'react';
import styles from './styles';
import { withStyles } from '@material-ui/styles';
import { Drawer, List, Divider, ListItem } from '@material-ui/core';
import { ADMIN_ROUTES } from './../../../constants';
import { NavLink } from 'react-router-dom';

class Sidebar extends Component {

  toggleDrawer = value => {
    const { onToggleSidebar } = this.props;
    if (onToggleSidebar) {
      onToggleSidebar(value);
    }
  }

  renderList() {
    const { classes } = this.props;
    let xhtml = null;
    xhtml = (
      <div className={classes.list}>
        <List component="div">
          {ADMIN_ROUTES.map(item => {
            return (
              <NavLink
                key={item.path}
                to={item.path}
                exact={item.exact}
                className={classes.menuLink}
                activeClassName={classes.menuLinkActive}
              >
                <ListItem className={classes.menuItem} button>
                  {item.name}
                </ListItem>
              </NavLink>
            );
          })}
        </List>
      </div>
    );
    return xhtml;
  }
  render() {
    const { classes, showSidebar } = this.props;
    return (
      <Drawer anchor='left'
        open={showSidebar}
        onClose={() => this.toggleDrawer(false)}
        classes={{
          paper: classes.drawerPaper,
        }}
        variant="persistent"
      >
        {this.renderList()}
        <Divider />
      </Drawer>
    )
  }
}

export default withStyles(styles)(Sidebar);
