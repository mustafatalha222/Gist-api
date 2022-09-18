import { render, screen } from "@testing-library/react";
import { gist } from "./mock";
import { FileList } from "../components";

describe("FileList Component", () => {
  beforeEach(() => {
    render(<FileList files={gist[0].files} />);
  });

  it("should render file match length", () => {
    const ref = screen.getAllByRole("link");
    expect(ref.length).toBe(1);
  });

  it("should render tag", () => {
    const tag = screen.getByText("Python");
    expect(tag).toBeTruthy();
  });

  it("should match snapshot of component", () => {
    expect(screen).toMatchSnapshot();
  });
});
