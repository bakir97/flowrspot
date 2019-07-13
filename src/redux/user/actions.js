import axios from "axios";
import { devKeys } from "../../globals/keys";
import { SUCCESS_USER, LOADING_USER, ERROR_USER, SET_USER } from "../constants";
import { getFlowers } from "../flowers/actions";
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
export const loginUser = data => async dispatch => {
  try {
    dispatch(loadingUser(true));
    const user = await axios.post(`${devKeys.api}/users/login`, data);
    dispatch(successUser(true));

    const userData = {
      auth_token: user.data.auth_token,
      email: data.email
    };
    dispatch(login(userData));
    dispatch(getFlowers(user.data.auth_token));
    localStorage.setItem("user", JSON.stringify(userData));
    dispatch(loadingUser(false));
  } catch (error) {
    dispatch(loadingUser(false));
    dispatch(errorUser([error.response.data.error]));
  }
};
export const login = user => async dispatch => {
  try {
    const userCreds = await axios.get(`${devKeys.api}/users/me`, {
      headers: { Authorization: user.auth_token }
    });
    dispatch(setUser({ ...userCreds.data.user, email: user.email }));
  } catch (error) {
    dispatch(loadingUser(false));
    dispatch(errorUser([error.response.data.error]));
  }
};
export const logout = () => dispatch => {
  localStorage.removeItem("user");
  dispatch(getFlowers());
  dispatch(setUser(null));
};
export const successUser = payload => ({
  type: SUCCESS_USER,
  payload
});
export const setUser = payload => ({
  type: SET_USER,
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
