import { render, screen } from "@testing-library/react";
import Async from "./Async";

describe("Async component", () => {
  test("render posts if req succeds", async () => {
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      json: async () => [{ id: "p1", title: "First post" }],
    });
    render(<Async />);

    // findAllByRole has a 3rd argument, which we can specify the timeout in miliseconds.
    // e.g: findAllByRole("listitem",{},2000);
    // the default timeout is 1 second.
    const listItems = await screen.findAllByRole("listitem");
    expect(listItems).not.toHaveLength(0);
  });
});
