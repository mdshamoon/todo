import { useState } from "react";
import React from "react";
import { ToDoListProps } from "./TodoList";

interface ToDoListItemProps extends ToDoListProps {
  completed: boolean;
  saveItem: any;
  name: string;
  id: string;
}

export const ToDoListItem: React.FC<ToDoListItemProps> = ({
  completed,
  saveItem,
  name,
  id,
  toggleComplete,
  deleteItem,
}) => {
  const [editing, setEditing] = useState(false);
  const [inputValue, setInputValue] = useState(name);

  const itemStyle = {
    textDecoration: completed ? "line-through" : "none",
    cursor: "pointer",
  };

  let renderName, renderButtons;

  const onEditClick = () => {
    setEditing(true);
  };

  const onCancelClick = () => {
    setEditing(false);
  };

  const onSaveClick = () => {
    saveItem(id, inputValue);
    setEditing(false);
  };

  if (editing) {
    renderName = (
      <input
        type="text"
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
        onKeyPress={(event) => {
          if (event.key === "Enter") {
            onSaveClick();
          }
        }}
      />
    );

    renderButtons = (
      <span>
        <button onClick={() => onSaveClick()}>Save</button>
        <button onClick={() => onCancelClick()}>Cancel</button>
      </span>
    );
  } else {
    renderName = (
      <span style={itemStyle} onClick={() => toggleComplete(id)}>
        {name}
      </span>
    );

    renderButtons = (
      <span>
        <button onClick={() => onEditClick()}>Edit</button>
        <button onClick={() => deleteItem(id)}>Delete</button>
      </span>
    );
  }

  return (
    <div className="to-do-item">
      <span className="name">{renderName}</span>
      <span className="actions">{renderButtons}</span>
    </div>
  );
};
