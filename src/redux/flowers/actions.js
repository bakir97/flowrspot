import axios from "axios";
import { devKeys } from "../../globals/keys";
import { LOADING_FLOWERS, SUCCESS_FLOWERS, ADD_FAV } from "../constants";
export const getFlowers = auth => async dispatch => {
  try {
    let updateflowers = [];

    dispatch(loadingFlowers(true));
    const flowers = await axios.get(`${devKeys.api}/flowers`, {
      headers: { Authorization: auth }
    });

    updateflowers = [...updateflowers, ...flowers.data.flowers];
    if (auth) {
      const favflowers = await axios.get(`${devKeys.api}/flowers/favorites`, {
        headers: { Authorization: auth }
      });

      const favflowersIds = favflowers.data.fav_flowers.map(
        favFlower => favFlower.flower.id
      );

      updateflowers = updateflowers.map(flower => {
        if (favflowersIds.includes(flower.id)) {
          return { ...flower, favorite: true };
        }
        return flower;
      });
    }
    dispatch(successFlowers(updateflowers));
    dispatch(loadingFlowers(false));
  } catch (error) {
    dispatch(loadingFlowers(false));
  }
};
export const searchFlowers = (search, auth) => async dispatch => {
  try {
    dispatch(loadingFlowers(true));
    let updateflowers = [];

    const flowers = await axios.get(
      `${devKeys.api}/flowers/search?query=${search}`,
      {
        headers: { Authorization: auth }
      }
    );
    updateflowers = [...updateflowers, ...flowers.data.flowers];
    if (auth) {
      const favflowers = await axios.get(`${devKeys.api}/flowers/favorites`, {
        headers: { Authorization: auth }
      });

      const favflowersIds = favflowers.data.fav_flowers.map(
        favFlower => favFlower.flower.id
      );

      updateflowers = updateflowers.map(flower => {
        if (favflowersIds.includes(flower.id)) {
          return { ...flower, favorite: true };
        }
        return flower;
      });
    }
    dispatch(successFlowers(updateflowers));
    dispatch(loadingFlowers(false));
  } catch (error) {
    console.log(error);

    dispatch(loadingFlowers(false));
  }
};
export const addFavFlower = (id, auth) => async dispatch => {
  try {
    const flower = await axios.post(
      `${devKeys.api}/flowers/${id}/favorites`,
      {},
      {
        headers: { Authorization: auth }
      }
    );
    dispatch(addNewFavFlower(flower.data.fav_flower.flower.id));
  } catch (error) {
    dispatch(loadingFlowers(false));
  }
};
//cors problem with delete method
// export const removeFavFlower = (id, auth) => async dispatch => {
//   try {
//     const flower = await axios.delete(
//       `https://flowrspot-api.herokuapp.com/api/v1/flowers/1/favorites/3`,
//       {},
//       {
//         headers: { Authorization: auth }
//       }
//     );
//     console.log(flower);

//     // dispatch(addNewFavFlower(flower.data.fav_flower.flower.id));
//   } catch (error) {
//     dispatch(loadingFlowers(false));
//   }
// };
export const loadingFlowers = payload => ({
  type: LOADING_FLOWERS,
  payload
});
export const successFlowers = payload => ({
  type: SUCCESS_FLOWERS,
  payload
});
export const addNewFavFlower = payload => ({
  type: ADD_FAV,
  payload
});
