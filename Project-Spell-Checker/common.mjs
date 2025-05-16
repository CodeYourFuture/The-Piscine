import words from "./words.json" with { type: "json" };

export const getDictionarySize = () => words.length;
