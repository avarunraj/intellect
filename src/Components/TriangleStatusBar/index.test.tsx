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
  const progressBarsContainer = getById(dom.container, "progress-bars");
  expect(progressBarsContainer).toBeInTheDocument();
  // checking of there is 5 progress bar items in the container
  if (progressBarsContainer) {
    expect(progressBarsContainer.childNodes.length).toEqual(5);
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
  const progressBarsContainer = getById(dom.container, "progress-bars");
  if (progressBarsContainer) {
    //checking if first bar background is #7d9da8 ie rgb(125,157,168) hence not selected
    expect(progressBarsContainer.firstElementChild).toHaveStyle(
      `background:rgb(125,157,168)`
    );
    //checking if last bar background is #fff ie rgb(255,255,255) hence  selected
    expect(progressBarsContainer.lastElementChild).toHaveStyle(
      `background:rgb(255,255,255)`
    );
  }
});
