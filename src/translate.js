let translatedWord = "";

const translate = (word) => {
  word = word.toLowerCase();
  if (
    word[0] === "a" ||
    word[0] === "e" ||
    word[0] === "i" ||
    word[0] === "o" ||
    word[0] === "u"
  ) {
    translatedWord = `${word}way`;
    return translatedWord;
  } else {
    translatedWord = `${word.slice(1, word.length + 1) + word[0]}ay`;
    return translatedWord;
  }
};

module.exports = translate;
