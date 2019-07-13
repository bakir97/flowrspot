import configureMockStore from "redux-mock-store";
import { errorUser, loadingUser, setUser, successUser } from "./actions";
import thunk from "redux-thunk";
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("action creators user", () => {
  let store;
  beforeEach(() => {
    store = mockStore({});
  });
  it("should set error user action with payload array of error strings", () => {
    store.dispatch(errorUser(["test error"]));
    expect(store.getActions()).toMatchSnapshot();
  });
  it("should set loading user with payload true", () => {
    store.dispatch(loadingUser(true));
    expect(store.getActions()).toMatchSnapshot();
  });
  it("should set set user action with payload object ", () => {
    store.dispatch(setUser({ id: 1 }));
    expect(store.getActions()).toMatchSnapshot();
  });
  it("should set success user with payload true", () => {
    store.dispatch(successUser(true));
    expect(store.getActions()).toMatchSnapshot();
  });
});
