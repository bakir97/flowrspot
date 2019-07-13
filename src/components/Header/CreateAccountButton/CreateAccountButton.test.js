import React from "react";
import { shallow } from "enzyme";
import CreateAccountButton from "./CreateAccountButton";
describe("CreateAccountButton", () => {
  it("should render correctly", () => {
    const component = shallow(<CreateAccountButton />);
    expect(component).toMatchSnapshot();
  });
  it("should call trigger open modal and toggle menu ", () => {
    const mockFn = jest.fn();
    const component = shallow(
      <CreateAccountButton openModal={mockFn} toggleMenu={mockFn} showMenu />
    );
    component.find("button").simulate("click");
    expect(mockFn).toHaveBeenCalledTimes(2);
  });
});
