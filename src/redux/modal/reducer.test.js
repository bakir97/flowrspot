import reducer from "./reducer";
import { initialState } from "./reducer";
import { openModalAction, closeModalAction } from "./actions";
describe("modal reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toMatchSnapshot();
  });
  it("should handle OPEN_MODAL", () => {
    expect(reducer(initialState, openModalAction("login"))).toMatchSnapshot();
  });
  it("should handle CLOSE_MODAL", () => {
    expect(reducer(initialState, closeModalAction())).toMatchSnapshot();
  });
});
