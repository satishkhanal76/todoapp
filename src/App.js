import { useId, useState } from "react";
import "./App.css";
import Todo from "./classes/Todo";
import "./css/Todo.css";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((todos) => {
      return [
        ...todos,
        new Todo({
          id: uuidv4(),
          name: todo,
          dueDate: null,
          isCompleted: false,
        }),
      ];
    });
  };

  const setIsCompleted = (id, isCompleted) => {
    const foundTodo = todos.filter((todo) => todo.id === id)?.pop();
    if (!foundTodo) return;
    foundTodo.isCompleted = isCompleted;

    sortTodos();
  };

  const sortTodos = () => {
    const allTodos = todos.sort((a, b) => {
      if (a.isCompleted && !b.isCompleted) return 1;
      if (!a.isCompleted && b.isCompleted) return -1;
      return 0;
    });

    setTodos([...allTodos]);
  };

  return (
    <div className="App">
      <h1 className="todo-title">To-Do</h1>
      <form
        onSubmit={(eve) => {
          eve.preventDefault();
          addTodo(eve.target.todoName.value);
          eve.target.todoName.value = "";
        }}
        className="add-todo-form"
      >
        <input
          name="todoName"
          className="todo-input"
          type="text"
          placeholder="Add to do"
        />
        <input className="todo-add" type="submit" value={"Add to-do"} />
      </form>

      <div className="todos-container">
        {todos.map((todo) => {
          return (
            <div className="todo-container" id={todo.id}>
              <input
                onChange={(eve) => {
                  setIsCompleted(todo.id, eve.target.checked);
                }}
                className="check-box"
                id={todo.id}
                type="checkbox"
              />
              <label htmlFor={todo.id} className="todo">
                {todo.name}
              </label>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
