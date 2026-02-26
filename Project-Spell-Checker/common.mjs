import words from "./words.json" with { type: "json" };

export const getDictionarySize = () => words.length;

export function checkWordsInDictionary(wordsArray) {
    const dictionarySet = new Set(words); 

    return wordsArray.map(word => ({
        word,
        isCorrect: dictionarySet.has(word.toLowerCase())
    }));
}

export function addWordToDictionary(word) {
    if (!words.includes(word.toLowerCase())) {
        words.push(word.toLowerCase());
    }
}