import { render, fireEvent, queryByAttribute } from "@testing-library/react";
import { CircularProgressBar } from "./index";

test("components should render in the dom", () => {
  // custom function to get an object based on id attribute
  const getById = queryByAttribute.bind(null, "id");
  //getting document object
  const dom = render(
    <CircularProgressBar svgSize={200} progressCircleBarWidth={5} />
  );

  //getting input slider based on id and checking if it is populated in dom
  const inputSlider = getById(dom.container, "input-slider");
  expect(inputSlider).toBeInTheDocument();

  //getting progress based on id and checking if it is populated in dom
  const progressText = getById(dom.container, "progress-text");
  expect(progressText).toBeInTheDocument();

  //getting progress circle based on id and checking if it is populated in dom
  const progressCircle = getById(dom.container, "progress-circle");
  expect(progressCircle).toBeInTheDocument();

  //getting dashed circle based on id and checking if it is populated in dom
  const dashedCircle = getById(dom.container, "dashed-circle");
  expect(dashedCircle).toBeInTheDocument();
});

test("it should have expected initial value", () => {
  const getById = queryByAttribute.bind(null, "id");
  //getting document object
  const dom = render(
    <CircularProgressBar svgSize={200} progressCircleBarWidth={5} />
  );
  // fetching input slider and progress text from dom using id attribute
  const inputSlider = getById(dom.container, "input-slider");
  const progressText = getById(dom.container, "progress-text");
  // checking if textContent and value is 10 initially
  expect(progressText).toHaveTextContent("10");
  expect(inputSlider).toHaveValue("10");
});

test("it should have expected value on change", () => {
  const getById = queryByAttribute.bind(null, "id");
  //getting document object
  const dom = render(
    <CircularProgressBar svgSize={200} progressCircleBarWidth={5} />
  );
  // fetching input slider and progress text from dom using id attribute
  const inputSlider = getById(dom.container, "input-slider");
  const progressText = getById(dom.container, "progress-text");
  if (inputSlider) {
    //firing onChange event to set value as '5' and checking if progress text and  imput slider values are '5'
    fireEvent.change(inputSlider, { target: { value: "5" } });
    expect(inputSlider).toHaveValue("5");
    expect(progressText).toHaveTextContent("5");
    //firing onChange event to set value as '0' and checking if progress text and  imput slider values are '0'
    fireEvent.change(inputSlider, { target: { value: "0" } });
    expect(inputSlider).toHaveValue("0");
    expect(progressText).toHaveTextContent("0");
    //firing onChange event to set value as '10' and checking if progress text and  imput slider values are '10'
    fireEvent.change(inputSlider, { target: { value: "10" } });
    expect(inputSlider).toHaveValue("10");
    expect(progressText).toHaveTextContent("10");
  }
});
