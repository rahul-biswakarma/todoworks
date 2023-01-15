import React from "react";

import Task from "./Task";

const Main = ({ todos, setTodos, setIsEdit }) => {
  return (
    <main className="relative flex w-full justify-center p-d-pad z-10">
      <div
        id="todo-container"
        className="flex flex-col w-full p-[3rem_5%] pb-[5%] bg-bg-2 dark:bg-dark-bg-2 rounded-lg h-max max-w-[900px]"
      >
        <div className="flex justify-between items-center">
          <h2 className="flex gap-[10px] pb-[1rem] text-text-2 dark:text-dark-text-2">
            <span className="text-text-2 dark:text-dark-text-2 font-bold">
              {">"}
            </span>{" "}
            Tasks 👍
          </h2>
          <div
            id="total-tasks-count"
            className="text-text-2 dark:text-dark-text-2"
          ></div>
        </div>
        <div className="flex flex-col gap-[1rem] w-full">
          <ul id="todo" className="flex flex-col gap-[1rem]">
            {todos.todo.map((todo, index) => {
              return (
                <Task
                  todos={todos}
                  setTodos={setTodos}
                  key={`todo-${index}`}
                  todo={todo}
                  index={index}
                  setIsEdit={setIsEdit}
                />
              );
            })}
          </ul>
          <ul id="in_progress" className="flex flex-col gap-[1rem]">
            {todos.inprogress.map((todo, index) => {
              return (
                <Task
                  todos={todos}
                  setTodos={setTodos}
                  key={`inprogress-${index}`}
                  todo={todo}
                  index={index}
                  setIsEdit={setIsEdit}
                />
              );
            })}
          </ul>
          {todos.done && todos.done.length > 0 && (
            <div
              id="completed-heading"
              className="flex justify-between items-center"
            >
              <h2 className="flex gap-[10px] pt-[1rem] text-text-2 dark:text-dark-text-2">
                <span className="text-text-2 dark:text-dark-text-2 font-bold">
                  {">"}
                </span>
                Completed 😎
              </h2>
              <div className="text-text-2 dark:text-dark-text-2">
                <span>{todos.done.length}</span> /{" "}
                <span>
                  {todos.todo.length +
                    todos.inprogress.length +
                    todos.done.length}
                </span>
              </div>
            </div>
          )}
          <ul id="done" className="flex flex-col gap-[1rem]">
            {todos.done.map((todo, index) => {
              return (
                <Task
                  todos={todos}
                  setTodos={setTodos}
                  key={`done-${index}`}
                  todo={todo}
                  index={index}
                  setIsEdit={setIsEdit}
                />
              );
            })}
          </ul>
        </div>
      </div>
    </main>
  );
};

export default Main;
