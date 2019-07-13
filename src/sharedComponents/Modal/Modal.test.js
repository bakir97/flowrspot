import React from "react";
import { shallow } from "enzyme";
import Modal from "./Modal";
describe("Modal", () => {
  it("should render correctly", () => {
    const component = shallow(<Modal modalType />);
    expect(component).toMatchSnapshot();
  });
});
