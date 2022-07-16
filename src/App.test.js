import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

test("the counter starts at 0", () => {
  render(<App />);
  const counterElement = screen.getByTestId("counter");
  expect(counterElement).toHaveTextContent(0);
});

test("minus button has correct text", () => {
  render(<App></App>);
  const buttonEl = screen.getByTestId("minus-button");
  expect(buttonEl).toHaveTextContent("-");
});
test("plus button has correct text", () => {
  render(<App></App>);
  const buttonEl = screen.getByTestId("plus-button");
  expect(buttonEl).toHaveTextContent("+");
});

test("when the + button is pressed, the counter changes to 1", () => {
  render(<App></App>);
  const buttonEl = screen.getByTestId("plus-button");
  fireEvent.click(buttonEl);
  const counterEl = screen.getByTestId("counter");
  expect(counterEl).toHaveTextContent(1);
});
test("when the - button is pressed, the counter changes to 1", () => {
  render(<App></App>);
  const buttonEl = screen.getByTestId("minus-button");
  fireEvent.click(buttonEl);
  const counterEl = screen.getByTestId("counter");
  expect(counterEl).toHaveTextContent(-1);
});
