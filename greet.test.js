import { describe, expect, it, vi } from "vitest";
import { greet } from "./greet";
import "./constants";

vi.mock("./constants", () => {
  return {
    language: "en",
  };
});

describe("greet", () => {
  it("should return 'Hello teacher' if called with 'Staicy', 'Ernst' or 'Ralf'", () => {
    expect(greet("Staicy")).toBe("Hello teacher");
  });
  it("should return 'Hello student' if not called with 'Staicy', 'Ernst' or 'Ralf'", () => {
    expect(greet("Svitlana")).toBe("Hello student");
  });
  it("should return 'Hello stranger' if called without argument", () => {
    expect(greet()).toBe("Hello stranger");
  });
});

// if called with "Staicy", "Ernst" or "Ralf" it should return "Hello teacher"
// if called with any other name it should return "Hello student"
