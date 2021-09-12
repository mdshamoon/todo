import { useState, useEffect } from "react";
import "./App.css";
import { CreateItem } from "./components/CreateItem";
import { ToDoList } from "./components/TodoList";
import {
  getLatestId,
  getTodoItems,
  setTodoItemsLocally,
} from "./utils/functions";

export interface TodoItem {
  name: string;
  completed: boolean;
  id: string;
}

function App() {
  const [toDoItems, setToDoItems] = useState<Array<TodoItem>>(getTodoItems());

  useEffect(() => {
    setTodoItemsLocally(toDoItems);
  }, [toDoItems]);

  const createItem = (item: string) => {
    const newItem = { name: item, completed: false, id: getLatestId() };
    setToDoItems([...toDoItems, newItem]);
  };

  const toggleComplete = (id: string) => {
    const toggledItems = toDoItems.map((item) => {
      if (item.id === id) {
        item.completed = !item.completed;
      }
      return item;
    });
    setToDoItems(toggledItems);
  };

  const saveItem = (oldIidtemId: string, newItemName: string) => {
    const editedItem = toDoItems.map((item) => {
      if (item.id === oldIidtemId) {
        item.name = newItemName;
      }
      return item;
    });

    setToDoItems(editedItem);
  };

  const deleteItem = (id: string) => {
    const newList = toDoItems.filter((element) => element.id !== id);
    setToDoItems(newList);
  };

  return (
    <div className="App">
      <div className="to-do-app">
        <div className="header">
          <h1>ToDo List</h1>
        </div>
        <CreateItem toDoItems={toDoItems} createItem={createItem} />
        <ToDoList
          toDoItems={toDoItems}
          deleteItem={deleteItem}
          saveItem={saveItem}
          toggleComplete={toggleComplete}
        />
      </div>
    </div>
  );
}

export default App;
