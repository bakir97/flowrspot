import React from "react";
import { shallow } from "enzyme";
import Search from "./Search";
describe("Search", () => {
  it("should render correctly", () => {
    const component = shallow(<Search />);
    expect(component).toMatchSnapshot();
  });
  it("should render form", () => {
    const component = shallow(<Search />);
    expect(component.exists("form")).toBe(true);
  });
  it("should change state on search", () => {
    const component = shallow(<Search />);
    component.instance().onSearcChange({ target: { value: "test" } });
    expect(component.state().searchTerm).toBe("test");
  });
});
