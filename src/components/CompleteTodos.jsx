import React from "react";

export const CompleteTodos = (props) => {
  const { completeTodos, onClickBackTodo } = props;
  return (
    <>
      <div className="complete-area">
        <p className="title">完了したTodo</p>
        <ul id="complete-todo-list">
          {completeTodos.map((todo, index) => {
            return (
              <li key={index}>
                <div className="list-row">
                  <div className="todo">{todo}</div>
                  <button type="button" onClick={() => onClickBackTodo(index)}>
                    戻す
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};
