import React from "react";
import { shallow } from "enzyme";
import Hero from "./Hero";
describe("Hero", () => {
  it("should render correctly", () => {
    const component = shallow(<Hero />);
    expect(component).toMatchSnapshot();
  });
  it("should call handleSearch", () => {
    const handleSearch = jest.fn();
    const component = shallow(<Hero handleSearch={handleSearch} />);
    component.instance().handleSearch("test");
    expect(handleSearch).toHaveBeenCalledWith("test");
  });
});
