import { SUCCESS_USER, LOADING_USER, ERROR_USER } from "../constants";
const initialState = {
  userSuccess: false,
  loading: false,
  errors: []
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SUCCESS_USER:
      return { ...state, userSuccess: payload };
    case LOADING_USER:
      return { ...state, loading: payload };
    case ERROR_USER:
      return { ...state, errors: payload };

    default:
      return state;
  }
};
