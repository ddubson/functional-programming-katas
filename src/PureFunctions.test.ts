function isOddAndInRange(aNumber) {

}

test("calculate if a number is between odd AND between 22 and 78", () => {
  expect(isOddAndInRange(79)).toEqual(false)
  expect(isOddAndInRange(15)).toEqual(false)
  expect(isOddAndInRange(55)).toEqual(true)
  expect(isOddAndInRange(45)).toEqual(true)
  expect(isOddAndInRange(49)).toEqual(true)
})
