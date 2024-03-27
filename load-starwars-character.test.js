import { describe, expect, it, vi, beforeEach } from "vitest";
import { loadStarwarsCharacter } from "./load-starwars-character";
import axios from "axios";

vi.mock("axios");

// const fakeAxios = {
//   get: () => {
//     return { data: { name: "Darth Vader" } };
//   },
//   post: () => {},
//   put: () => {},
//   // ...
// };

describe("loadStarwarsCharacter", async () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });
  it("should return Darth Vader if called with index 4", async () => {
    // axios.get.mockResolvedValue({ data: { name: "Ralf" } });
    axios.get = vi.fn((url) => {
      if (url === "https://swapi.dev/api/people/4") {
        return { data: { name: "Ralf" } };
      } else if (url === "https://swapi.dev/api/people/5") {
        return { data: { name: "Peter" } };
      } else {
        return { data: { name: "Other" } };
      }
    });
    const characterName = await loadStarwarsCharacter(5);
    console.log(characterName);
    expect(characterName).toBe("Peter");
  });
});
