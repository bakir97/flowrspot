import React from "react";
import { shallow } from "enzyme";
import SignInForm from "./SignInForm";
describe("SignInForm", () => {
  it("should render correctly", () => {
    const component = shallow(<SignInForm errors={[]} />);
    expect(component).toMatchSnapshot();
  });
  it("should change state on input change", () => {
    const component = shallow(<SignInForm errors={[]} />);
    component
      .instance()
      .onChange({ target: { value: "test", name: "first_name" } });
    expect(component.state().first_name).toBe("test");
  });
});
