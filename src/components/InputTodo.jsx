import React from "react";

export const InputTodo = (props) => {
  const { text, onChange, onClick, disabled } = props;
  return (
    <>
      <div className="input-area">
        <input
          type="text"
          placeholder="Todoを入力してください"
          value={text}
          onChange={onChange}
          disabled={disabled}
        />
        <button type="button" onClick={onClick} disabled={disabled}>
          追加
        </button>
      </div>
    </>
  );
};
