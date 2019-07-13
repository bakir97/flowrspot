import React from "react";
import { shallow } from "enzyme";
import LoginButton from "./LoginButton";
describe("LoginButton", () => {
  it("should render correctly", () => {
    const component = shallow(<LoginButton />);
    expect(component).toMatchSnapshot();
  });
  it("should call trigger open modal and toggle menu ", () => {
    const mockFn = jest.fn();
    const component = shallow(
      <LoginButton openModal={mockFn} toggleMenu={mockFn} showMenu />
    );
    component.find("button").simulate("click");
    expect(mockFn).toHaveBeenCalledTimes(2);
  });
});
