import { render, fireEvent, queryByAttribute } from "@testing-library/react";
import { TriangleStatusBar } from "./index";

test("components should render in the dom", () => {
  // custom function to get an object based on id attribute
  const getById = queryByAttribute.bind(null, "id");
  //getting document object
  const dom = render(<TriangleStatusBar widgetSize={200} />);

  //getting level text based on id and checking if it is populated in dom
  const levelText = getById(dom.container, "level-text");
  expect(levelText).toBeInTheDocument();

  //getting progress bars based on id and checking if it is populated in dom
  const statusBarsContainer = getById(dom.container, "progress-bars");
  expect(statusBarsContainer).toBeInTheDocument();
  // checking of there is 5 progress bar items in the container
  if (statusBarsContainer) {
    expect(statusBarsContainer.childNodes.length).toEqual(5);
  }
});

test("components should have initial value", () => {
  // custom function to get an object based on id attribute
  const getById = queryByAttribute.bind(null, "id");
  //getting document object
  const dom = render(<TriangleStatusBar widgetSize={200} />);

  //getting level text based on id and checking if it is populated in dom
  const levelText = getById(dom.container, "level-text");
  //checking initial text value is 'Low'
  expect(levelText).toHaveTextContent("Low");

  //getting progress bars based on id and checking if it is populated in dom
  const statusBarsContainer = getById(dom.container, "progress-bars");
  if (statusBarsContainer) {
    //checking if first bar background is #7d9da8 ie rgb(125,157,168) hence not selected
    expect(statusBarsContainer.firstElementChild).toHaveStyle(
      `background:rgb(125,157,168)`
    );
    //checking if last bar background is #fff ie rgb(255,255,255) hence  selected
    expect(statusBarsContainer.lastElementChild).toHaveStyle(
      `background:rgb(255,255,255)`
    );
  }
});

test("it should have expected value on change", () => {
  // custom function to get an object based on id attribute
  const getById = queryByAttribute.bind(null, "id");
  //getting document object
  const dom = render(<TriangleStatusBar widgetSize={200} />);

  //getting level text based on id and checking if it is populated in dom
  const levelText = getById(dom.container, "level-text");
  //getting progress bars based on id and checking if it is populated in dom
  const statusBarsContainer = getById(dom.container, "progress-bars");
  //getting first progress bar
  const firstChild = statusBarsContainer?.firstElementChild;
  if (firstChild) {
    //clicking on first progress
    fireEvent.click(firstChild);
    //checking if first bar background is #fff ie rgb(255,255,255) hence  selected
    expect(firstChild).toHaveStyle(`background:rgb(255,255,255)`);
    //checking if text value is "High"
    expect(levelText).toHaveTextContent("High");
  }

  //getting last progress bar
  const lastChild = statusBarsContainer?.lastElementChild;
  if (lastChild) {
    fireEvent.click(lastChild);
    //checking if first bar background is #fff ie rgb(255,255,255) hence  selected
    expect(lastChild).toHaveStyle(`background:rgb(255,255,255)`);
    //checking if text value is "High"
    expect(levelText).toHaveTextContent("Low");
  }

  //getting center progress bar
  const centerStatusBar = getById(dom.container, "medium-bar");
  if (centerStatusBar) {
    fireEvent.click(centerStatusBar);
    //checking if first bar background is #fff ie rgb(255,255,255) hence  selected
    expect(centerStatusBar).toHaveStyle(`background:rgb(255,255,255)`);
    //checking if text value is "High"
    expect(levelText).toHaveTextContent("Medium");
  }
});
