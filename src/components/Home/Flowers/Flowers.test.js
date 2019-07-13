import React from "react";
import { shallow } from "enzyme";
import Flowers from "./Flowers";

describe("Flowers", () => {
  it("should render correctly", () => {
    const mockFn = jest.fn();
    const component = shallow(<Flowers getFlowers={mockFn} />);
    expect(component).toMatchSnapshot();
  });
  it("should render FlowersList", () => {
    const mockFn = jest.fn();

    const component = shallow(<Flowers getFlowers={mockFn} />);
    expect(component).toMatchSnapshot();
  });
  it("should render Loader", () => {
    const mockFn = jest.fn();

    const component = shallow(<Flowers isLoading getFlowers={mockFn} />);
    expect(component).toMatchSnapshot();
  });
  it("should call getFlowers", () => {
    const mockFn = jest.fn();
    shallow(<Flowers getFlowers={mockFn} />);
    expect(mockFn).toHaveBeenCalled();
  });
});
