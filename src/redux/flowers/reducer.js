import { LOADING_FLOWERS, SUCCESS_FLOWERS } from "../constants";
const initialState = {
  flowers: [],
  loading: false
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case LOADING_FLOWERS:
      return { ...state, loading: payload };
    case SUCCESS_FLOWERS:
      return { ...state, flowers: payload };
    default:
      return state;
  }
};
