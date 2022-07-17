import { fireEvent, render, screen } from "@testing-library/react";
import Counter from "./Counter";

test("the counter starts at 0", () => {
  render(<Counter />);
  const counterElement = screen.getByTestId("counter");
  expect(counterElement).toHaveTextContent(0);
});

test("minus button has correct text", () => {
  render(<Counter></Counter>);
  const buttonEl = screen.getByTestId("minus-button");
  expect(buttonEl).toHaveTextContent("-");
});
test("plus button has correct text", () => {
  render(<Counter></Counter>);
  const buttonEl = screen.getByTestId("plus-button");
  expect(buttonEl).toHaveTextContent("+");
});

test("when the + button is pressed, the counter changes to 1", () => {
  render(<Counter></Counter>);
  const buttonEl = screen.getByTestId("plus-button");
  fireEvent.click(buttonEl);
  const counterEl = screen.getByTestId("counter");
  expect(counterEl).toHaveTextContent(1);
});
test("when the - button is pressed, the counter changes to 1", () => {
  render(<Counter></Counter>);
  const buttonEl = screen.getByTestId("minus-button");
  fireEvent.click(buttonEl);
  const counterEl = screen.getByTestId("counter");
  expect(counterEl).toHaveTextContent(-1);
});

test("on/off button color is blue", () => {
  render(<Counter></Counter>);
  const buttonEl = screen.getByTestId("onoff-button");
  expect(buttonEl).toHaveStyle({ backgroundColor: "blue" });
});
test("Prevent the +/- button from being pressed when the on/off button is clicked", () => {
  render(<Counter></Counter>);
  const onoffButtonEl = screen.getByTestId("onoff-button");
  fireEvent.click(onoffButtonEl);
  const plusButtonEl = screen.getByTestId("plus-button");
  const minusButtonEl = screen.getByTestId("minus-button");
  expect(plusButtonEl).toBeDisabled();
  expect(minusButtonEl).toBeDisabled();
});
