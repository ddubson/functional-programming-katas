function isPrime(aNumber) {}

test("calculate a prime number", () => {
  expect(isPrime(2)).toEqual(false)
  expect(isPrime(3)).toEqual(true)
  expect(isPrime(5)).toEqual(true)
  expect(isPrime(13)).toEqual(true)
  expect(isPrime(19)).toEqual(true)
  expect(isPrime(23)).toEqual(true)
  expect(isPrime(127)).toEqual(true)
  expect(isPrime(199)).toEqual(true)
})
