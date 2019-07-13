import configureMockStore from "redux-mock-store";
import { successFlowers, loadingFlowers, addNewFavFlower } from "./actions";
import thunk from "redux-thunk";
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("action creators flowers", () => {
  let store;
  beforeEach(() => {
    store = mockStore({});
  });
  it("should set sucess action with payload true", () => {
    store.dispatch(successFlowers([{ id: 1 }, { id: 1 }, { id: 1 }]));
    expect(store.getActions()).toMatchSnapshot();
  });
  it("should set loading action with payload true", () => {
    store.dispatch(loadingFlowers(true));
    expect(store.getActions()).toMatchSnapshot();
  });
  it("should set addNewFavFlower action with payload flower id", () => {
    store.dispatch(addNewFavFlower(5));
    expect(store.getActions()).toMatchSnapshot();
  });
});
