import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([
    {
      content: "pickup dry cleaning",
      isCompleted: true,
    },
    {
      content: "get haircut",
      isCompleted: false,
    },
    {
      content: "Build a todo app in react",
      isCompleted: false,
    },
  ]);

  function handleKeyDown(e, i) {
    if (e.key === "Enter") {
      createTodoAtIndex(e, i);
    }
  }

  function createTodoAtIndex(e, i) {
    const newTodos = [...todos];
    newTodos.splice(i + 1, 0, {
      content: "",
      isCompleted: false,
    });
    setTodos(newTodos);
    setTimeout(() => {
      document.forms[0].elements[i + 1].focus();
    }, 0);
  }

  return (
    <div className="app">
      <div className="header">
        <img src={logo} className="logo" alt="logo" />
      </div>
      <form className="todo-list">
        <ul>
          {todos.map((todo, i) => (
            <div className="todo">
              <div className="checkbox" />
              <input
                type="text"
                value={todo.content}
                onKeyDown={(e) => handleKeyDown(e, i)}
              />
            </div>
          ))}
        </ul>
      </form>
    </div>
  );
}

export default App;
