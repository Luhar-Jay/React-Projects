import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

test("Should load contact us component", () => {
  render(<Contact />);

  const heading = screen.getByRole("heading");

  expect(heading).toBeInTheDocument();
});

test("Should load button inside contact component", () => {
  render(<Contact />);

  const button = screen.getByRole("button");

  expect(button).toBeInTheDocument();
});

test("Should load input inside contact component", () => {
  render(<Contact />);

  const inputName = screen.getByPlaceholderText("name");

  expect(inputName).toBeInTheDocument();
});

test("Should load two input boxes in thw Contact component", () => {
  render(<Contact />);

  const inputBoxes = screen.getAllByRole("textbox");

  // console.log(inputBoxes.length);

  expect(inputBoxes.length).toBe(2);
});
