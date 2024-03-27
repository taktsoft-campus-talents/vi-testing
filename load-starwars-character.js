import axios from "axios";

export async function loadStarwarsCharacter(characterIndex) {
  try {
    const response = await axios.get(
      `https://swapi.dev/api/people/${characterIndex}`
    );
    return response.data.name;
  } catch (err) {
    console.log(err);
  }
}
