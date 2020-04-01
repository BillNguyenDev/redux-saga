import React, { Component } from 'react';
import { Modal } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import styles from './styles';
import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';
import * as modalAction from './../../actions/modal';
class ModalSaga extends Component {
  render() {
    const { classes, open, component, modalActions, title } = this.props;
    const { hideModal } = modalActions;
    return (
      <Modal open={open} onClose={hideModal} >
        <div className={classes.modal}>
          <div className={classes.header}>
            <span className={classes.title}>{title}</span>
            <div className={classes.icon}>
              <span className="material-icons" onClick={hideModal}>close</span>
            </div>
          </div>
          <div className={classes.content}>
            {component}
          </div>
        </div>
      </Modal>
    );
  }
}

const mapStateToProps = state => ({
  open: state.modal.showModal,
  title: state.modal.title,
  component: state.modal.component,
});

const mapDispatchToProps = dispatch => ({
  modalActions: bindActionCreators(modalAction, dispatch),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withStyles(styles),
  withConnect
)(ModalSaga);
