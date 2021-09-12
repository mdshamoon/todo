import { useState } from "react";

export interface CreateItemProps {
  toDoItems: any;
  createItem: any;
}

export const CreateItem: React.FC<CreateItemProps> = ({
  toDoItems,
  createItem,
}) => {
  const [newItem, setNewItem] = useState("");
  const handleCreate = () => {
    setNewItem("");
    createItem(newItem);
  };

  return (
    <div className="create-new">
      <input
        value={newItem}
        onChange={(event) => {
          setNewItem(event.target.value);
        }}
        onKeyPress={(event) => {
          if (event.key === "Enter") {
            handleCreate();
          }
        }}
        placeholder="New Task"
      />
      <button onClick={() => handleCreate()}>Create</button>
    </div>
  );
};
