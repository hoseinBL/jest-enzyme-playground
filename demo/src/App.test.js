import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import { render } from "@testing-library/react";
import App from "./App";

Enzyme.configure({ adapter: new EnzymeAdapter() });

test("config enzyme", () => {
  const wrapper = shallow(<App />);
  expect(wrapper).toBeTruthy();
});
