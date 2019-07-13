import React from "react";
import { shallow } from "enzyme";
import Input from "./Input";
describe("Input", () => {
  it("should render correctly", () => {
    const component = shallow(<Input />);
    expect(component).toMatchSnapshot();
  });
  it("should trigger onChange", () => {
    const mockFn = jest.fn();
    const component = shallow(<Input onChange={mockFn} />);
    component.find("input").simulate("change");
    expect(mockFn).toHaveBeenCalled();
  });
});
