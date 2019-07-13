import React from "react";
import { shallow } from "enzyme";
import UserModal from "./UserModal";
describe("UserModal", () => {
  it("should render correctly", () => {
    const component = shallow(<UserModal modalType />);
    expect(component).toMatchSnapshot();
  });
  it("should render Profile", () => {
    const component = shallow(<UserModal modalType="profile" />);
    expect(component).toMatchSnapshot();
  });
  it("should render SignInForm", () => {
    const component = shallow(<UserModal modalType />);
    expect(component).toMatchSnapshot();
  });
  it("should render Loading Component", () => {
    const component = shallow(<UserModal modalType loading />);
    expect(component).toMatchSnapshot();
  });

  it("should render Success Component ", () => {
    const component = shallow(<UserModal modalType isUserSuccess />);
    expect(component).toMatchSnapshot();
  });
});
