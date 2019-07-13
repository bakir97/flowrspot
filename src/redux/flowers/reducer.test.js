import reducer from "./reducer";
import { initialState } from "./reducer";
import { successFlowers, loadingFlowers, addFavFlower } from "./actions";
describe("flowers reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toMatchSnapshot();
  });
  it("should handle SUCCESS_FLOWERS", () => {
    expect(
      reducer(initialState, successFlowers([{ id: 1 }]))
    ).toMatchSnapshot();
  });
  it("should handle LOADING_FLOWERS", () => {
    expect(reducer(initialState, loadingFlowers(true))).toMatchSnapshot();
  });
  it("should handle ADD_FAV", () => {
    expect(reducer(initialState, addFavFlower(1))).toMatchSnapshot();
  });
});
