import { OPEN_MODAL, CLOSE_MODAL } from "../constants";
export const openModal = payload => ({
  type: OPEN_MODAL,
  payload
});

export const closeModal = () => ({
  type: CLOSE_MODAL,
  payload: null
});
