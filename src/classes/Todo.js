export default class Todo {
  #id;
  #name;
  #dueDate;
  #isCompleted;

  constructor({ id, name, dueDate, isCompleted }) {
    this.#id = id;
    this.#name = name;
    this.#dueDate = dueDate;
    this.#isCompleted = isCompleted;
  }

  get id() {
    return this.#id;
  }

  get name() {
    return this.#name;
  }

  get isCompleted() {
    return this.#isCompleted;
  }

  set isCompleted(completed) {
    this.#isCompleted = completed;
  }
}
