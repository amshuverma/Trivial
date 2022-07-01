export const convertStringToTitleCase = (word) => {
  let splitedWord = word.split("");
  splitedWord[0] = splitedWord[0].toUpperCase();
  return splitedWord.join("");
};
