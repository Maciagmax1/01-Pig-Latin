const translate = require("../src/translate");

describe("translate function", () => {
  test("words that start with vowel a", () => {
    let result = translate("apple");
    expect(result).toBe("appleway");
  });
  test("words that start with vowel e", () => {
    let result = translate("eager");
    expect(result).toBe("eagerway");
  });
  test("words that start with vowel i", () => {
    let result = translate("indie");
    expect(result).toBe("indieway");
  });
  test("words that start with vowel o", () => {
    let result = translate("origin");
    expect(result).toBe("originway");
  });
  test("words that start with vowel u", () => {
    let result = translate("underwear");
    expect(result).toBe("underwearway");
  });
  test("words that start with capital vowel A", () => {
    let result = translate("Apple");
    expect(result).toBe("appleway");
  });
  test("words that start with capital vowel E", () => {
    let result = translate("Eager");
    expect(result).toBe("eagerway");
  });
  test("words that start with capital vowel I", () => {
    let result = translate("Indie");
    expect(result).toBe("indieway");
  });
  test("words that start with capital vowel O", () => {
    let result = translate("Origin");
    expect(result).toBe("originway");
  });
  test("words that start with capital vowel U", () => {
    let result = translate("Underwear");
    expect(result).toBe("underwearway");
  });
  test("words that start with consonant and have a second letter thats vowel a", () => {
    let result = translate("tarp");
    expect(result).toBe("arptay");
  });
  test("words that start with consonant and have a second letter thats vowel e", () => {
    let result = translate("real");
    expect(result).toBe("ealray");
  });
  test("words that start with consonant and have a second letter thats vowel i", () => {
    let result = translate("pig");
    expect(result).toBe("igpay");
  });
  test("words that start with consonant and have a second letter thats vowel o", () => {
    let result = translate("rope");
    expect(result).toBe("operay");
  });
  test("words that start with consonant and have a second letter thats vowel u", () => {
    let result = translate("buzz");
    expect(result).toBe("uzzbay");
  });
  test("words that start with 2 consonants", () => {
    let result = translate("blast");
    expect(result).toBe("lastbay");
  });
  test("words that start with more than 2 consonants", () => {
    let result = translate("scrap");
    expect(result).toBe("crapsay");
  });
});
