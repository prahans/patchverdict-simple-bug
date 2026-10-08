import { describe, expect, it } from "vitest";
import { average } from "./average.js";

describe("average", () => {
  it("calculates the average of multiple numbers", () => {
    expect(average([10, 20, 30])).toBe(20);
  });

  it("calculates the average of one number", () => {
    expect(average([100])).toBe(100);
  });

  it("returns zero for an empty array", () => {
    expect(average([])).toBe(0);
  });

  it("supports negative numbers", () => {
    expect(average([-10, 0, 10])).toBe(0);
  });
});
