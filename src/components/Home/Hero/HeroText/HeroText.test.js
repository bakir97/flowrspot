import React from "react";
import { shallow } from "enzyme";
import HeroText from "./HeroText";
describe("HeroText", () => {
  it("should render correctly", () => {
    const component = shallow(<HeroText />);
    expect(component).toMatchSnapshot();
  });
});
