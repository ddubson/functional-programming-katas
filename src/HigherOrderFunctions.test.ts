const logTimeTaken = () => {

}

test("Log time taken for four fibonacci numbers", () => {
  const generateFourFibonacciNumbers = () => generateFibonacciNumbers(4);

  expect(logTimeTaken(generateFourFibonacciNumbers)).toEqual([1,1,2,3]);
});

const summation = (arr) => {}

test("Sum up all elements of an array", () => {
  expect(summation([])).toEqual(0);
  expect(summation([4,6,9,2])).toEqual(21);
  expect(summation([5,6,7])).toEqual(18);
})
