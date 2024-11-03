import React from "react";
import App from "./App";
import { shallow, render } from "enzyme";

describe("App", () => {
  test("App should not rash", () => {
    render(<App />);
  });
});
