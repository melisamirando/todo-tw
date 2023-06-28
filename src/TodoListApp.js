import React, { useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [priority, setPriority] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handlePriorityChange = (event) => {
    setPriority(event.target.value);
  };

  const handleDueDateChange = (event) => {
    setDueDate(event.target.value);
  };

  const handleAddTodo = () => {
    if (inputValue.trim() !== "") {
      const newTodo = {
        task: inputValue,
        completed: false,
        priority: priority,
        dueDate: dueDate,
      };
      setTodos([...todos, newTodo]);
      setInputValue("");
      setDueDate("");
    }
  };

  const handleToggleComplete = (index) => {
    const updatedTodos = todos.map((todo, i) => {
      if (i === index) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const handleDeleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <>
    
        <h1 className="flex justify-center space-x-4 text-2xl font-bold mb-4 py-4">Things To do</h1>
{/* This part is for input of new task */}
        <TodoInput
          inputValue={inputValue}
          handleInputChange={handleInputChange}
          priority={priority}
          handlePriorityChange={handlePriorityChange}
          dueDate={dueDate}
          handleDueDateChange={handleDueDateChange}
          handleAddTodo={handleAddTodo}
        />
{/* This part is for input of new task */}

        <TodoList
          todos={todos}
          handleToggleComplete={handleToggleComplete}
          handleDeleteTodo={handleDeleteTodo}
        />
      
    </>
  );
}

export default TodoApp;
