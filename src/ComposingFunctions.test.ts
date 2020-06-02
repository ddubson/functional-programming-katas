const isValidSentence = (sentence) => {
  // Not more than 50 characters
  // Should not be empty
  // Should not have any numbers

  if(sentence.length === 0 && sentence.length > 50 && /\d/.test(sentence)) {
    return false;
  }

  return true;
}

test("Validate a sentence", () => {
  expect(isValidSentence("The rain in Spain falls mainly on the plain")).toEqual(true);
})

const numberOfOddLengthWords = (sentence) => {
  return 0;
}

test("Count the number of odd length words in the sentence", () => {
  expect(numberOfOddLengthWords("The rain in Spain falls mainly on the plain"))
    .toEqual(5);
});