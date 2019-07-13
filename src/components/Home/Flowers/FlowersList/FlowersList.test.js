import React from "react";
import { shallow } from "enzyme";
import FlowersList from "./FlowersList";
describe("FlowersList", () => {
  it("should render correctly", () => {
    const component = shallow(<FlowersList flowers={[]} />);
    expect(component).toMatchSnapshot();
  });
  it("should render items", () => {
    const flowers = [{ id: "1" }, { id: "2" }, { id: "3" }];
    const component = shallow(<FlowersList flowers={flowers} />);
    expect(component).toMatchSnapshot();
  });
});
