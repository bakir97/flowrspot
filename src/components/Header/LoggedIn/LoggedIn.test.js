import React from "react";
import { shallow } from "enzyme";
import LoggedIn from "./LoggedIn";
describe("LoggedIn", () => {
  it("should render correctly", () => {
    const component = shallow(<LoggedIn user={{}} />);
    expect(component).toMatchSnapshot();
  });
  it("should call trigger open modal and toggle menu ", () => {
    const mockFn = jest.fn();
    const component = shallow(
      <LoggedIn openModal={mockFn} toggleMenu={mockFn} showMenu user={{}} />
    );
    component.find("div").simulate("click");
    expect(mockFn).toHaveBeenCalledTimes(2);
  });
});
