import { OPEN_MODAL, CLOSE_MODAL } from "../constants";
const initialState = {
  modal: null
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case OPEN_MODAL:
      return { ...state, modal: payload };
    case CLOSE_MODAL:
      return { ...state, modal: payload };

    default:
      return state;
  }
};
