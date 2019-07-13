import { OPEN_MODAL, CLOSE_MODAL } from "../constants";
import { successUser } from "../user/actions";
export const openModal = type => dispatch => {
  dispatch(openModalAction(type));
  dispatch(successUser(false));
};
export const openModalAction = payload => ({
  type: OPEN_MODAL,
  payload
});

export const closeModal = () => async dispatch => {
  dispatch(closeModalAction());
  dispatch(successUser(false));
};
export const closeModalAction = () => ({
  type: CLOSE_MODAL,
  payload: null
});
