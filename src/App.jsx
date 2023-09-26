import { useState } from "react";

import "./styles.css";

import { InputTodo } from "./components/InputTodo";

export const App = () => {
  const [todoText, setTodoText] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState([]);
  const [completeTodos, setCompleteTodos] = useState([]);

  const onChangeInputTodo = (event) => {
    setTodoText(event.target.value);
  };

  const onClickAddTodo = () => {
    if (todoText === "") return;
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodoText("");
  };

  const onClickCompleteTodo = (index) => {
    setCompleteTodos((prev) => {
      return [...prev, incompleteTodos[index]];
    });
    setIncompleteTodos((prev) => {
      const newTodos = [...prev];
      newTodos.splice(index, 1);
      return newTodos;
    });
  };

  const onClickDeleteTodo = (index) => {
    setIncompleteTodos((prev) => {
      const newTodos = [...prev];
      newTodos.splice(index, 1);
      return newTodos;
    });
  };

  const onClickBackTodo = (index) => {
    setIncompleteTodos((prev) => {
      return [...prev, completeTodos[index]];
    });
    setCompleteTodos((prev) => {
      const newTodos = [...prev];
      newTodos.splice(index, 1);
      return newTodos;
    });
  };

  return (
    <>
      {/* Todo入力欄 */}
      <div className="input-area">
        <input
          type="text"
          placeholder="Todoを入力してください"
          value={todoText}
          onChange={onChangeInputTodo}
        />
        <button type="button" onClick={onClickAddTodo}>
          追加
        </button>
      </div>

      {/* 未完了Todo一覧 */}
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

      {/* 完了Todo一覧 */}
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

      {/* Todo入力欄 */}
      <InputTodo
        text={todoText}
        onChange={onChangeInputTodo}
        onClick={onClickAddTodo}
      />
    </>
  );
};
