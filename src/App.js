import "./App.css";
import { useState } from "react";
import GetCard from "./components/TodoCard";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [isEmpty, setIsEmpty] = useState(false);
  const [todo, setTodo] = useState("");

  const handleAddTodo = (todo) => {
    if (todo) {
      setTodoList((todoList) => [...todoList, todo]);
    } else {
      setIsEmpty(true);
    }
  };

  const handleRemoveTodo = (index) => {
    index >= 0 &&
      index < todoList.length &&
      setTodoList((todoList) => [
        ...todoList.slice(0, index),
        ...todoList.slice(index + 1),
      ]);
  };

  return (
    <div className="App">
      <h1>Todo List</h1>

      <div className="add-form">
        <input
          className="inp-add-todo"
          placeholder="Your new Todo...."
          type="text"
          onChange={(e) => {
            isEmpty && setIsEmpty(false);
            setTodo((todo) => e.target.value);
          }}
          onKeyDown={(e) => {
            if (e.key == "Enter") {
              handleAddTodo(todo);
            }
          }}
        />
        <button className="btn" onClick={() => handleAddTodo(todo)}>
          +
        </button>
      </div>

      {isEmpty && <p className="empty-error">*please fill required field</p>}

      <div className="todo-list">
        {todoList.map((todo, index) => (
          <GetCard
            todo={todo}
            index={index}
            handleRemoveTodo={handleRemoveTodo}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
