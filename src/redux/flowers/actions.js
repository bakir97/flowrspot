import axios from "axios";
import { devKeys } from "../../globals/keys";
import { LOADING_FLOWERS, SUCCESS_FLOWERS } from "../constants";
export const getFlowers = () => async dispatch => {
  try {
    dispatch(loadingFlowers(true));
    const flowers = await axios.get(`${devKeys.api}/flowers`, {
      headers: { Authorization: devKeys.getFlowersAuth }
    });
    dispatch(successFlowers(flowers.data.flowers));
    dispatch(loadingFlowers(false));
  } catch (error) {
    dispatch(loadingFlowers(false));
  }
};
export const searchFlowers = search => async dispatch => {
  try {
    dispatch(loadingFlowers(true));

    const flowers = await axios.get(
      `${devKeys.api}/flowers/search?query=${search}`,
      {
        headers: { Authorization: devKeys.flowersSearchAuth }
      }
    );
    dispatch(successFlowers(flowers.data.flowers));
    dispatch(loadingFlowers(false));
  } catch (error) {
    console.log(error);

    dispatch(loadingFlowers(false));
  }
};
export const loadingFlowers = payload => ({
  type: LOADING_FLOWERS,
  payload
});
export const successFlowers = payload => ({
  type: SUCCESS_FLOWERS,
  payload
});
