import React from "react";

function TodoList({ todos, handleToggleComplete, handleDeleteTodo }) {
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-xl font-bold mb-4 my-4">Todo List</h2>
      <div className="flex justify-center py-2">
        <ul>
          {todos.map((todo, index) => (
            <li key={index} className="flex items-center space-x-8 py-1">
              <div>
                <input
                  className="mr-2"
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => handleToggleComplete(index)}
                />
              </div>
{/* condition to line-through once checkbox is click */}
              <div>
                <input
                  className={`${todo.completed ? "line-through" : ""}`}
                  value={todo.task}
                  disabled={todo.completed}
                />
              </div>
{/* displays the duedate */}
              <div>{todo.dueDate}</div>
{/* delete button */}
              <div>
                <button
                  className="bg-amber-500 hover:bg-amber-600 text-white font-bold px-2 py-1 rounded focus:outline-none"
                  onClick={() => handleDeleteTodo(index)}
                >
                  x
                </button>
              </div>
{/* display if high or low priority */}
              <div>
                {todo.priority === "High" && (
                  <span className="bg-amber-600 text-white px-3 py-1 rounded">
                    {todo.priority}
                  </span>
                )}
                {todo.priority === "Low" && (
                  <span className="bg-amber-400 text-white px-4 py-1 rounded">
                    {todo.priority}
                  </span>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TodoList;
