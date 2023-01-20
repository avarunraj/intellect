import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { CircularProgressBar } from "./index";

test("components should render in the dom", () => {
  const dom = render(
    <CircularProgressBar svgSize={200} progressCircleBarWidth={5} />
  );
  const inputSlider = dom.getByDisplayValue("10");
  expect(inputSlider).toBeInTheDocument();
});

test("it should have expected value", () => {
  const dom = render(
    <CircularProgressBar svgSize={200} progressCircleBarWidth={5} />
  );
  const inputSlider = dom.getByDisplayValue("10");

  fireEvent.change(inputSlider, { target: { value: "5" } });
  expect(inputSlider).toHaveValue("5");
});
