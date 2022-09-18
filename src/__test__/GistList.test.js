import { render, screen } from "@testing-library/react";
import { GistContext } from "../context/GistContext";
import { gist } from "./mock";
import { GistList } from "../components";
import { CONSTANTS } from "../utils";

const renderApp = (ui, value) => {
  return render(
    <GistContext.Provider value={value}>{ui}</GistContext.Provider>
  );
};

let value = {
  publicGist: [],
  loadingPublicGist: true,
  fetchPublicGist: () => {},
  getGistByUser: () => {},
};

describe("GistList Component cases", () => {
  it("should be loading on start loadingPublicGist true", () => {
    renderApp(<GistList />, value);
    const loadingElement = screen.getByTestId("loading");
    expect(loadingElement.textContent).toMatch(CONSTANTS.LOADING);
  });

  it("should be no result if loadingPublicGist false", () => {
    value = { ...value, loadingPublicGist: false };
    renderApp(<GistList />, value);
    const notResultElement = screen.getByTestId("no-result");
    expect(notResultElement.textContent).toMatch(CONSTANTS.NO_RESULT);
  });

  it("should be error if error msg found", () => {
    const error = "Error message";
    value = { ...value, loadingPublicGist: false, error };
    renderApp(<GistList />, value);
    const errorElement = screen.getByTestId("error-message");
    expect(errorElement.textContent).toMatch(error);
  });

  it("should render gist", () => {
    value = { ...value, publicGist: gist, error: "" };
    renderApp(<GistList />, value);

    const allGist = screen.getAllByTestId("gist");
    expect(allGist.length).toBe(1);
  });

  it("should contain SeeDetail button", () => {
    value = { ...value, publicGist: gist, error: "" };
    renderApp(<GistList />, value);
    const seeDetail = screen.getByText("See Detail");
    expect(seeDetail).toBeInTheDocument();
  });
});
