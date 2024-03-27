import { language } from "./constants.js";

export function greet(name) {
  const greetings = {
    de: "Hallo",
    en: "Hello",
    es: "Hola",
  };
  const greeting = greetings[language];

  if (!name) {
    return `${greeting} stranger`;
  }
  if (["Staicy", "Ralf", "Ernst"].find((teacher) => teacher === name)) {
    return `${greeting} teacher`;
  }
  return `${greeting} student`;
}
