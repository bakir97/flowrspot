import axios from "axios";
import { devKeys } from "../../globals/keys";
import { SUCCESS_USER, LOADING_USER, ERROR_USER } from "../constants";
export const registerUser = data => async dispatch => {
  try {
    dispatch(loadingUser(true));
    await axios.post(`${devKeys.api}/users/register`, data);
    dispatch(successUser(true));
    dispatch(loadingUser(false));
  } catch (error) {
    dispatch(loadingUser(false));
    dispatch(errorUser(error.response.data.error));
  }
};
export const successUser = payload => ({
  type: SUCCESS_USER,
  payload
});
export const loadingUser = payload => ({
  type: LOADING_USER,
  payload
});
export const errorUser = payload => ({
  type: ERROR_USER,
  payload
});
