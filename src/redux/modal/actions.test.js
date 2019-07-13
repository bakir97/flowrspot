import configureMockStore from "redux-mock-store";
import { openModalAction, closeModalAction } from "./actions";
import thunk from "redux-thunk";
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("action creators modal", () => {
  let store;
  beforeEach(() => {
    store = mockStore({});
  });
  it("should set open modal action with payload modal type", () => {
    store.dispatch(openModalAction("login"));
    expect(store.getActions()).toMatchSnapshot();
  });
  it("should set close modal with payload null", () => {
    store.dispatch(closeModalAction());
    expect(store.getActions()).toMatchSnapshot();
  });
});
