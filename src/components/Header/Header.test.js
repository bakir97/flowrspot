import React from "react";
import { shallow } from "enzyme";
import Header from "./Header";
describe("Header", () => {
  it("should render correctly", () => {
    const component = shallow(<Header />);
    expect(component).toMatchSnapshot();
  });
  it("should render MobileNav", () => {
    const component = shallow(<Header />);
    component.setState({ width: 700 });
    expect(component).toMatchSnapshot();
  });
  it("should show mobile menu", () => {
    const component = shallow(<Header />);
    component.setState({ width: 700, showMenu: true });
    expect(component).toMatchSnapshot();
  });
});
