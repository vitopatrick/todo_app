import React from "react";

const SingleTodo = ({ todo }: any) => {
  return (
    <div className="flex justify-between items-center bg-neutral-400/10 p-2 rounded-lg">
      <h4 className="capitalize">{todo.todo}</h4>
      <p
        className={
          todo.completed
            ? "text-xs bg-teal-300 px-4 text-white py-2 rounded-full"
            : "text-xs bg-red-400 px-4 text-white py-2 rounded-full"
        }
      >
        {todo.completed ? "Completed" : "Not Done"}
      </p>
    </div>
  );
};

export default SingleTodo;
