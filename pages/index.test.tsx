import { render } from "@testing-library/react";
import React from "react";

import App from "./index";


test("render bookstore", () => {
  const { container } = render(<App />);
  expect(container).toBeInTheDocument();
});
