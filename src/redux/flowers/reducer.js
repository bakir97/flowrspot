import { LOADING_FLOWERS, SUCCESS_FLOWERS, ADD_FAV } from "../constants";
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
    case ADD_FAV:
      return {
        ...state,
        flowers: state.flowers.map(flower => {
          if (flower.id === payload) {
            return { ...flower, favorite: true };
          }
          return flower;
        })
      };
    default:
      return state;
  }
};
