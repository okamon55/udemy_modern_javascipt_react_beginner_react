import React from "react";

export const IncompleteTodos = (props) => {
  const { incompleteTodos, onClickCompleteTodo, onClickDeleteTodo } = props;
  return (
    <>
      <div className="incomplete-area">
        <p className="title">未完了のTodo</p>
        <ul id="incomplete-todo-list">
          {incompleteTodos.map((todo, index) => {
            return (
              <li key={index}>
                <div className="list-row">
                  <div className="todo">{todo}</div>
                  <button
                    type="button"
                    onClick={() => onClickCompleteTodo(index)}
                  >
                    完了
                  </button>
                  <button
                    type="button"
                    onClick={() => onClickDeleteTodo(index)}
                  >
                    削除
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
