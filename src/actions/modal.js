import * as modalConstants from './../constants/modal';

export const showModal = () => {
  return {
    type: modalConstants.SHOW_MODAL,
  };
};
export const hideModal = () => {
  return {
    type: modalConstants.HIDE_MODAL,
  };
};
export const changeModalTitle = title => {
  return {
    type: modalConstants.CHANGE_MODAL_TITLE,
    payload: {
      title,
    }
  };
};
export const changeModalContent = component => {
  return {
    type: modalConstants.CHANGE_MODAL_CONTENT,
    payload: {
      component,
    }
  };
};
