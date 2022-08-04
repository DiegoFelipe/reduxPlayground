import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greeting from "./Greeting";

describe("Greeting component test", () => {
  test("Checks if we have a hello world", () => {
    render(<Greeting />);
    expect(screen.getByText(/hello world/i)).toBeInTheDocument();
  });

  test("Check if the text is changing when clicking", () => {
    render(<Greeting />);
    expect(screen.getByText(/It's good to see you!/i)).toBeInTheDocument();
    userEvent.click(screen.getByRole("button"));
    expect(screen.getByText(/Another text/i)).toBeInTheDocument();
  });

  test('Checking if text "It is good to see you" is hidden when clicking', () => {
    render(<Greeting />);
    expect(screen.getByText(/It's good to see you!/i)).toBeInTheDocument();
    userEvent.click(screen.getByRole("button"));
    expect(
      screen.queryByText(/It's good to see you!/i)
    ).not.toBeInTheDocument();
  });

  test("", () => {});
});
