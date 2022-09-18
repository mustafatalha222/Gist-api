import { render, screen, fireEvent } from "@testing-library/react";
import { UserName } from "../../src/components";
import { gist } from "./mock";

describe("UserName Component", () => {
  beforeEach(() => {
    render(
      <UserName
        src={gist[0].owner?.avatar_url}
        name={gist[0].owner?.login}
        link={`https://gist[0].github.com/${gist[0].id}`}
      />
    );
  });

  it("should present in document", () => {
    const avatar = screen.getByTestId("avatar");
    expect(avatar).toBeInTheDocument();
  });

  it("should display href value", () => {
    const ref = screen.getByText(gist[0].owner?.login);
    expect(ref).toBeInTheDocument();
    expect(ref.closest("a")).toHaveAttribute(
      "href",
      `https://gist[0].github.com/${gist[0].id}`
    );
  });

  it("should match snapshot of component", () => {
    expect(screen).toMatchSnapshot();
  });
});
