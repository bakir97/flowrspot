import reducer from "./reducer";
import { initialState } from "./reducer";
import { errorUser, loadingUser, setUser, successUser } from "./actions";
describe("user reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toMatchSnapshot();
  });
  it("should handle ERROR_USER", () => {
    expect(reducer(initialState, errorUser(["test error"]))).toMatchSnapshot();
  });
  it("should handle LOADING_USER", () => {
    expect(reducer(initialState, loadingUser(true))).toMatchSnapshot();
  });
  it("should handle SET_USER", () => {
    expect(reducer(initialState, setUser({ id: 1 }))).toMatchSnapshot();
  });
  it("should handle SUCCESS_USER", () => {
    expect(reducer(initialState, successUser(true))).toMatchSnapshot();
  });
});
