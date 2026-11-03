import { describe, it, expect } from "vitest";
import { SCHEMES } from "./index";

const bits = [..."111001011000"].map(Number);
const run = (id, init) =>
  SCHEMES.find((s) => s.id === id)
    .run(bits, init)
    .map((s) => s.label.split(" ")[0])
    .join(" ");

describe("line coding vs instructor sheet", () => {
  it("AMI", () =>
    expect(run("ami")).toBe(
      "pos neg pos zero zero neg zero pos neg zero zero zero",
    ));
  it("Pseudoternary", () =>
    expect(run("pseudo")).toBe(
      "zero zero zero pos neg zero pos zero zero neg pos neg",
    ));
  it("Manchester", () =>
    expect(run("manchester")).toBe(
      "nTp nTp nTp pTn pTn nTp pTn nTp nTp pTn pTn pTn",
    ));
  it("Diff Manchester (init hi)", () =>
    expect(run("diffman", 1)).toBe(
      "pTn nTp pTn pTn pTn nTp nTp pTn nTp nTp nTp nTp",
    ));
});
