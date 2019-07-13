import React from "react";
import { shallow } from "enzyme";
import FLowersCard from "./FLowersCard";
describe("FLowersCard", () => {
  it("should render correctly", () => {
    const component = shallow(<FLowersCard flower={{}} />);
    expect(component).toMatchSnapshot();
  });
  it("should render star", () => {
    const component = shallow(<FLowersCard user flower={{}} />);
    expect(component).toMatchSnapshot();
  });
});
