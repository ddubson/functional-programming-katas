function isOddAndInRange(aNumber) {

}

test("calculate if a number is between odd AND between 22 and 78", () => {
  expect(isOddAndInRange(79)).toEqual(false)
  expect(isOddAndInRange(15)).toEqual(false)
  expect(isOddAndInRange(55)).toEqual(true)
  expect(isOddAndInRange(45)).toEqual(true)
  expect(isOddAndInRange(49)).toEqual(true)
})

function generateFibonacciNumbers(numberToGenerate) {
  console.log("Calculation started @ " + new Date());
  let fibArray = [];

  if (numberToGenerate === 1) {
    return [1];
  } else if (numberToGenerate === 2) {
    return [1, 1];
  }

  let prev1 = 1;
  let prev2 = 1;
  fibArray.push(1);
  fibArray.push(1);
  for (let i = 2; i < numberToGenerate; i++) {
    fibArray.push(prev1 + prev2);
    prev2 = prev1
    prev1 = fibArray[fibArray.length - 1];
  }
  console.log("Calculation finished @ " + new Date());
  return fibArray;
}

test("Generate fibonacci numbers", () => {
  expect(generateFibonacciNumbers(1)).toEqual([1])
  expect(generateFibonacciNumbers(2)).toEqual([1, 1])
  expect(generateFibonacciNumbers(4)).toEqual([1, 1, 2, 3])
  expect(generateFibonacciNumbers(6)).toEqual([1, 1, 2, 3, 5, 8])
})