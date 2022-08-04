import { render, screen } from "@testing-library/react";
import Greeting from "./Greeting";

test("Checks if we have a hello world", () => {
  render(<Greeting />);
  expect(screen.getByText(/hello world/i)).toBeInTheDocument();
});
