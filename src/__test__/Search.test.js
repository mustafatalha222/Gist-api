import { render, screen, fireEvent } from "@testing-library/react";
import { Search } from "../../src/components";

describe("Search Component", () => {
  beforeEach(() => {
    render(<Search />);
  });

  it("should render a search input tag", () => {
    const input = screen.getByTestId("search-input");
    expect(input).toBeInTheDocument();
  });

  it("input value change event check", () => {
    const value = "name";
    const input = screen.getByTestId("search-input");
    fireEvent.change(input, { target: { value } });
    expect(input.value).toBe(value);
  });

  it("should match snapshot of component", () => {
    expect(screen).toMatchSnapshot();
  });
});
