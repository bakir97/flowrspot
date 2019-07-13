import React from "react";
import { shallow } from "enzyme";
import FormFields from "./FormFields";
describe("FormFields", () => {
  it("should render correctly", () => {
    const component = shallow(<FormFields />);
    expect(component).toMatchSnapshot();
  });
  it("should render login inputs", () => {
    const component = shallow(<FormFields modalType="login" />);
    expect(component).toMatchSnapshot();
  });
});
