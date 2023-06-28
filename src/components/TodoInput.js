import React from "react";

function TodoInput({
  inputValue,
  handleInputChange,
  priority,
  handlePriorityChange,
  dueDate,
  handleDueDateChange,
  handleAddTodo,
}) {
  return (
    <div className="flex justify-center space-x-4">
      <input
        className="border rounded bg-amber-200 px-4 py-2 mr-2 focus:outline-none"
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="New task"
      />
      <select
        className="border rounded bg-amber-200 px-4 py-2 mr-2 focus:outline-none"
        value={priority}
        onChange={handlePriorityChange}
      >
        <option value="Low">Low</option>
        <option value="High" className=" font-text color-red">High</option>
      </select>
      <input
        className="border rounded bg-amber-200  px-4 py-2 mr-2 focus:outline-none"
        type="date"
        value={dueDate}
        onChange={handleDueDateChange}
        placeholder="Due date"
      />
      <button
        className="bg-amber-400 hover:bg-amber-600 text-white font-bold px-4 py-2 rounded focus:outline-none"
        onClick={handleAddTodo}
      >
        Add
      </button>
    </div>
  );
}

export default TodoInput;
