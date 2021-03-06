function isPrime(aNumber: number) {
}

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

const ToDoList = () => {

}

test("fetch all 'pending' ToDos in the ToDo list", () => {
  const todoList = ToDoList();

  expect(todoList.fetchPending()).toEqual([]);
  expect(todoList.addToDo({text: "Buy milk", status: 'DONE'}));
  expect(todoList.addToDo({text: "Drink milk with breakfast", status: 'DONE'}));
  expect(todoList.addToDo({text: "Return expired milk", status: 'PENDING'}));
  expect(todoList.fetchPending()).toEqual([
    {text: "Return expired milk", status: 'PENDING'}
  ]);
});
