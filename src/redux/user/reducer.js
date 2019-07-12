import { SUCCESS_USER, LOADING_USER, ERROR_USER, SET_USER } from "../constants";
const initialState = {
  userSuccess: false,
  loading: false,
  errors: [],
  user: null
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SUCCESS_USER:
      return { ...state, userSuccess: payload };
    case LOADING_USER:
      return { ...state, loading: payload };
    case ERROR_USER:
      return { ...state, errors: payload };
    case SET_USER:
      return { ...state, user: payload };

    default:
      return state;
  }
};
