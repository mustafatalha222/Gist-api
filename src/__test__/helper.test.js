import { HELPER } from "../utils";

describe("Test helper functions", () => {
  it("should render Files with count", () => {
    expect(HELPER.pluralize(2, "File")).toBe("2 Files");
  });

  it("should render Files if count > 1", () => {
    let value = HELPER.pluralizeText(2, "File");
    expect(value).toBe("Files");
  });
});
