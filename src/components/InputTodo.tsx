import React from "react";

export const InputTodo = (props) => {
  const { text, onChange, onClick } = props;
  return (
    <>
      <div className="input-area">
        <input
          type="text"
          placeholder="Todoを入力してください"
          value={text}
          onChange={onChange}
        />
        <button type="button" onClick={onClick}>
          追加
        </button>
      </div>
    </>
  );
};
