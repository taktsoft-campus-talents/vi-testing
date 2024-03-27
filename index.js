import { greet } from "./greet.js";
import { loadStarwarsCharacter } from "./load-starwars-character.js";

const greeting = "Hola";

console.log(greet());

console.log("Loading Starwars character 4");

loadStarwarsCharacter(4).then((result) => {
  console.log(result);
});
